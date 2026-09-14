#!/usr/bin/env node
'use strict';

/**
 * Static site generator for OCU-One-Web-User-Guides.
 *
 * Scans every topic's _VERIFICATION.md (root-level topic folders, plus each
 * Settings/<sub-area>/_VERIFICATION.md) and splits each guide row into one of
 * two sections by its Verified column: "verified" (Yes) or "needs-verify"
 * (No). A row whose Blocked column is non-empty — the guide's own documented
 * behavior is affected by an open app bug, see <vault>/Zz - Bugged Guides.md
 * — is omitted from both sections, so nobody is shown a guide that's known
 * to be wrong until the bug is fixed and the guide is rewritten. A guide
 * moves from needs-verify to verified the moment its row flips to
 * Verified = Yes and the site is rebuilt.
 *
 * Output goes to <vault>/site/, with a top-level landing page linking to
 * site/needs-verify/ and site/verified/, each mirroring the source folder
 * structure so a guide's own "attachments/<slug>/..." image paths keep
 * working unmodified in the generated HTML.
 *
 * Usage: node scripts/generate-verification-site.js
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

marked.setOptions({ gfm: true });

// ---------------------------------------------------------------------------
// Config: fill these in once. See the embed URL template in README/task notes.
// ---------------------------------------------------------------------------
const FORM_ID = "1FAIpQLSe4kFggwnvLeJfEPnm68Lj3TIjLKdV22aoYzPT5dksv3nnBdA";
const GUIDE_NAME_ENTRY_ID = "47921394";
const VERSION_ENTRY_ID = "65365296";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const VAULT_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(VAULT_ROOT, 'site');
const IGNORED_TOP_LEVEL = new Set(['.git', '.obsidian', 'node_modules', 'site', 'scripts']);

/** The two sections the site is split into. `match` decides which section a
 * _VERIFICATION.md row belongs to; a row matching neither (blocked) is
 * omitted from the site entirely. */
const SECTIONS = [
  {
    id: 'needs-verify',
    dirName: 'needs-verify',
    label: 'Needs Verification',
    statusLabel: 'Unverified',
    match: (row) => (row.verified || '').toLowerCase() === 'no' && !(row.blocked || '').trim(),
  },
  {
    id: 'verified',
    dirName: 'verified',
    label: 'Verified',
    statusLabel: 'Verified',
    match: (row) => (row.verified || '').toLowerCase() === 'yes' && !(row.blocked || '').trim(),
  },
];

// ===========================================================================
// Small utilities
// ===========================================================================

function isDir(p) {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function isFile(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

/** Lowercase, strip everything but letters/digits — unifies "list/table" vs
 * "list-table", "Customising" vs "Customizing" spacing/punctuation (the
 * spelling itself is handled by the fuzzy dice-coefficient match below). */
function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function bigrams(s) {
  const out = [];
  for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
  return out;
}

/** Sørensen–Dice coefficient over character bigrams: robust to the small
 * British/English spelling variance seen between the verification table's
 * Guide title and the actual filename/heading on disk. */
function diceCoefficient(a, b) {
  if (a === b) return 1;
  const bigramsA = bigrams(a);
  const bigramsB = bigrams(b);
  if (bigramsA.length === 0 || bigramsB.length === 0) return 0;
  const counts = new Map();
  for (const bg of bigramsA) counts.set(bg, (counts.get(bg) || 0) + 1);
  let matches = 0;
  for (const bg of bigramsB) {
    const count = counts.get(bg) || 0;
    if (count > 0) {
      matches++;
      counts.set(bg, count - 1);
    }
  }
  return (2 * matches) / (bigramsA.length + bigramsB.length);
}

function slugifyForUrl(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ===========================================================================
// _progress.md parsing
// ===========================================================================

/** Reads OCU-One-Web-User-Guides/_progress.md and counts occurrences of each
 * exact Guide/Feature title across every section. This is the source of
 * truth for the title stamped into a guide's Google Form URL — never the
 * fuzzy-matched filename/heading, and never <Topic>/_VERIFICATION.md's own
 * copy of the title, since that's a separate, independently-maintained file
 * that can drift out of sync with _progress.md. Returns a Map<title, count>;
 * a count other than 1 means the title can't be trusted for this purpose
 * (missing from _progress.md entirely, or ambiguous — the same title used
 * more than once). */
function loadProgressGuideTitleCounts() {
  const progressPath = path.join(VAULT_ROOT, '_progress.md');
  const content = fs.readFileSync(progressPath, 'utf8');
  const rows = parseVerificationTables(content).filter((r) => r.guide);

  const counts = new Map();
  for (const row of rows) {
    counts.set(row.guide, (counts.get(row.guide) || 0) + 1);
  }
  return counts;
}

// ===========================================================================
// _VERIFICATION.md parsing
// ===========================================================================

/** Parses every markdown table in a file and returns rows as objects keyed
 * by lower-cased header name, e.g. { guide, verified, "verified by", date,
 * version, notes }. Handles a file with multiple ### tables (like Views). */
function parseVerificationTables(content) {
  const lines = content.split('\n');
  const rows = [];
  let headers = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith('|')) {
      headers = null;
      continue;
    }
    const cells = line
      .slice(1, line.endsWith('|') ? -1 : undefined)
      .split('|')
      .map((c) => c.trim());

    if (!headers) {
      // Candidate header row — must be followed by a separator row (---|---).
      const next = (lines[i + 1] || '').trim();
      if (/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?$/.test(next)) {
        headers = cells.map((h) => h.toLowerCase());
        i++; // skip separator row
      }
      continue;
    }

    if (cells.length === 1 && cells[0] === '') {
      headers = null;
      continue;
    }

    const row = {};
    headers.forEach((h, idx) => {
      row[h] = (cells[idx] || '').trim();
    });
    rows.push(row);
  }

  return rows;
}

// ===========================================================================
// Topic discovery
// ===========================================================================

/**
 * @typedef {{ id: string, label: string, folder: string }} Topic
 * id/folder are vault-root-relative (e.g. "Views" or "Settings/Labels").
 * label is the human-facing nav name (e.g. "Views" or "Settings: Labels").
 */

function discoverTopics() {
  /** @type {Topic[]} */
  const topics = [];

  for (const entry of fs.readdirSync(VAULT_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || IGNORED_TOP_LEVEL.has(entry.name) || entry.name.startsWith('.')) {
      continue;
    }

    if (entry.name === 'Settings') {
      const settingsDir = path.join(VAULT_ROOT, entry.name);
      for (const sub of fs.readdirSync(settingsDir, { withFileTypes: true })) {
        if (!sub.isDirectory()) continue;
        const folder = path.join('Settings', sub.name);
        if (isFile(path.join(VAULT_ROOT, folder, '_VERIFICATION.md'))) {
          topics.push({ id: folder, label: `Settings: ${sub.name}`, folder });
        }
      }
      continue;
    }

    if (isFile(path.join(VAULT_ROOT, entry.name, '_VERIFICATION.md'))) {
      topics.push({ id: entry.name, label: entry.name, folder: entry.name });
    }
  }

  topics.sort((a, b) => a.label.localeCompare(b.label));
  return topics;
}

// ===========================================================================
// Guide file matching
// ===========================================================================

/** Lists candidate guide .md files in a topic folder: excludes _VERIFICATION.md,
 * "_<Topic> - Overview.md"-style meta pages, and anything else starting with "_". */
function listGuideFiles(topicFolder) {
  const dir = path.join(VAULT_ROOT, topicFolder);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('_'))
    .map((e) => path.join(dir, e.name));
}

function firstH1(content) {
  const match = content.match(/^#\s+(.+?)\s*$/m);
  return match ? match[1] : null;
}

/** Finds the guide file on disk matching a verification row's Guide title.
 * Titles in the wild diverge slightly from filenames/headings (spelling,
 * punctuation), so this fuzzy-matches on normalized text rather than
 * requiring an exact match. Returns null (with a warning) if nothing is a
 * confident match. */
function findGuideFile(topicFolder, guideTitle, warnings) {
  const target = normalize(guideTitle);
  const candidates = listGuideFiles(topicFolder);

  // Track best and runner-up so a low-but-clear winner (e.g. the table row
  // has a parenthetical the filename doesn't) isn't rejected, while two
  // close scores (genuine ambiguity between two different guides) still are.
  let best = null;
  let bestScore = 0;
  let runnerUpScore = 0;

  for (const filePath of candidates) {
    const content = fs.readFileSync(filePath, 'utf8');
    const heading = firstH1(content);
    const baseName = path.basename(filePath, '.md');

    const scores = [normalize(baseName), heading ? normalize(heading) : null]
      .filter(Boolean)
      .map((candidateNorm) => diceCoefficient(target, candidateNorm));

    const score = Math.max(0, ...scores);
    if (score > bestScore) {
      runnerUpScore = bestScore;
      bestScore = score;
      best = filePath;
    } else if (score > runnerUpScore) {
      runnerUpScore = score;
    }
  }

  const MIN_SCORE = 0.55;
  const MIN_MARGIN = 0.08;
  const HIGH_SCORE = 0.8; // confident on its own, regardless of a close runner-up
  const confident =
    best && (bestScore >= HIGH_SCORE || (bestScore >= MIN_SCORE && bestScore - runnerUpScore >= MIN_MARGIN));

  if (!confident) {
    warnings.push(
      `No confident guide file match for "${guideTitle}" in ${topicFolder} ` +
        `(best score ${bestScore.toFixed(2)}, runner-up ${runnerUpScore.toFixed(2)}` +
        `${best ? ` — closest: ${path.basename(best)}` : ''}). Skipping.`
    );
    return null;
  }

  return best;
}

// ===========================================================================
// Inter-guide links
// ===========================================================================

function stripAnchor(href) {
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) return { rawPath: href, anchor: '' };
  return { rawPath: href.slice(0, hashIndex), anchor: href.slice(hashIndex) };
}

function isExternalOrSpecial(href) {
  return /^([a-z][a-z0-9+.-]*:|#|attachments\/)/i.test(href);
}

/** Resolves Obsidian wikilinks ("[[Some Guide]]" or "[[Some Guide|display
 * text]]", optionally with a "#heading" suffix) into ordinary markdown links
 * to the matching guide's generated output page. Obsidian resolves these by
 * note basename regardless of folder, so the lookup here does the same
 * (basenameToOutFile is keyed by vault filename, not by title). Left
 * unchanged — same as Obsidian's own "unresolved link" look — when no guide
 * with that basename is part of this build. */
function rewriteWikilinks(markdown, currentOutFile, basenameToOutFile) {
  return markdown.replace(/\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (full, target, _heading, alias) => {
    const targetOutFile = basenameToOutFile.get(target.trim());
    if (!targetOutFile) return full;

    const newHref = path.relative(path.dirname(currentOutFile), targetOutFile).split(path.sep).join('/');
    const text = (alias || target).trim();
    return `[${text}](${newHref})`;
  });
}

/** Rewrites a guide's own inter-guide links so they resolve on the generated
 * site. Source guides link to each other with vault-relative "*.md" paths
 * (e.g. "Viewing a permit's overview page.md") — these work fine in Obsidian,
 * but the site renames/moves every guide to "<topic>/<slugified-title>.html",
 * so left unrewritten they 404. Links to a guide that isn't part of this
 * build (already verified, blocked, or otherwise excluded — see the module
 * docstring) are left as-is, since no output page exists for them to point
 * to either way. */
function rewriteGuideLinks(markdown, currentFilePath, currentOutFile, fileToOutFile) {
  return markdown.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)\)/g, (full, bang, text, href) => {
    if (bang || isExternalOrSpecial(href)) return full;
    const { rawPath, anchor } = stripAnchor(href);
    if (!/\.md$/i.test(rawPath)) return full;

    const targetAbs = path.resolve(path.dirname(currentFilePath), decodeURIComponent(rawPath));
    const targetOutFile = fileToOutFile.get(targetAbs);
    if (!targetOutFile) return full;

    const newHref = path.relative(path.dirname(currentOutFile), targetOutFile).split(path.sep).join('/');
    return `[${text}](${newHref}${anchor})`;
  });
}

// ===========================================================================
// Attachments
// ===========================================================================

/** Pulls every "attachments/<slug>/" reference out of a guide's markdown and
 * copies those slug folders into the mirrored output location, so the
 * guide's own relative image paths keep resolving unmodified. Slugs are
 * decoded (Markdown image targets containing a space are written as
 * "%20" etc.) since the folder on disk uses the literal, un-encoded name. */
function copyReferencedAttachments(topicFolder, guideContent, sectionDirName) {
  const slugs = new Set();
  const re = /attachments\/([^/)\s]+)\//g;
  let m;
  while ((m = re.exec(guideContent))) slugs.add(decodeURIComponent(m[1]));

  for (const slug of slugs) {
    const src = path.join(VAULT_ROOT, topicFolder, 'attachments', slug);
    if (!isDir(src)) continue;
    const dest = path.join(OUTPUT_DIR, sectionDirName, topicFolder, 'attachments', slug);
    copyDir(src, dest);
  }
}

// ===========================================================================
// Page rendering
// ===========================================================================

function styleSheet() {
  return `
:root {
  color-scheme: light dark;
  --bg: #ffffff;
  --fg: #1b1f23;
  --muted: #5b6470;
  --border: #e3e6ea;
  --accent: #2f6feb;
  --sidebar-bg: #f6f8fa;
  --code-bg: #f0f2f5;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #14171a;
    --fg: #e6e8eb;
    --muted: #9aa4af;
    --border: #2a2f35;
    --accent: #6ea8ff;
    --sidebar-bg: #1b1f23;
    --code-bg: #1f242a;
  }
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--fg);
  display: flex;
  min-height: 100vh;
}
nav.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border);
  padding: 1.25rem 1rem;
  overflow-y: auto;
}
nav.sidebar h2 {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  margin: 0 0 0.75rem;
}
nav.sidebar ul { list-style: none; margin: 0; padding: 0; }
nav.sidebar li { margin: 0.15rem 0; }
nav.sidebar a {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--fg);
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
}
nav.sidebar a:hover { background: var(--border); }
nav.sidebar a.active { background: var(--accent); color: #fff; }
nav.sidebar .count { color: var(--muted); font-variant-numeric: tabular-nums; }
nav.sidebar a.active .count { color: #fff; }
main {
  flex: 1;
  min-width: 0;
  padding: 2rem clamp(1rem, 4vw, 3rem);
  max-width: 860px;
}
main img { max-width: 100%; border: 1px solid var(--border); border-radius: 6px; }
main h1 { margin-top: 0; }
main table { border-collapse: collapse; width: 100%; }
main th, main td { border: 1px solid var(--border); padding: 0.4rem 0.6rem; text-align: left; }
main code { background: var(--code-bg); padding: 0.1rem 0.35rem; border-radius: 4px; }
main pre { background: var(--code-bg); padding: 0.75rem; border-radius: 6px; overflow-x: auto; }
main blockquote { border-left: 3px solid var(--border); margin: 0; padding-left: 1rem; color: var(--muted); }
.guide-meta {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.15rem 0.7rem;
  margin-bottom: 1rem;
}
.verify-form {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}
.verify-form h2 { font-size: 1.1rem; }
.verify-form iframe {
  width: 100%;
  height: 900px;
  border: 1px solid var(--border);
  border-radius: 8px;
}
.topic-list { list-style: none; padding: 0; }
.topic-list li {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.6rem 1rem;
  margin-bottom: 0.6rem;
}
.topic-list a { color: var(--accent); text-decoration: none; font-weight: 600; }
.topic-list .version { color: var(--muted); font-size: 0.85rem; }
.all-guides-link {
  display: inline-block;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}
.all-guides-link:hover { color: var(--fg); }
.section-switch {
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;
}
.section-switch a {
  flex: 1;
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.35rem 0.3rem;
}
.section-switch a.active { background: var(--accent); border-color: var(--accent); color: #fff; }
.section-cards {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.section-cards li {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem;
}
.section-cards a { color: var(--accent); text-decoration: none; font-weight: 700; font-size: 1.1rem; }
.section-cards p { color: var(--muted); margin: 0.4rem 0 0; }
`.trim();
}

function relHref(currentPagePath, target) {
  return (path.relative(path.dirname(currentPagePath), target) || path.basename(target)).split(path.sep).join('/');
}

function renderSidebar(topics, currentPagePath, section) {
  const sectionBase = path.join(OUTPUT_DIR, section.dirName);
  const items = topics
    .map((t) => {
      const target = path.join(sectionBase, t.folder, 'index.html');
      const href = relHref(currentPagePath, target);
      const isActive = currentPagePath.startsWith(path.join(sectionBase, t.folder) + path.sep) ||
        currentPagePath === target;
      return `<li><a class="${isActive ? 'active' : ''}" href="${href}">` +
        `<span>${escapeHtml(t.label)}</span><span class="count">${t.count}</span></a></li>`;
    })
    .join('\n');

  const landingHref = relHref(currentPagePath, path.join(OUTPUT_DIR, 'index.html'));
  const sectionSwitch = SECTIONS.map((s) => {
    const href = relHref(currentPagePath, path.join(OUTPUT_DIR, s.dirName, 'index.html'));
    return `<a class="${s.id === section.id ? 'active' : ''}" href="${href}">${escapeHtml(s.label)}</a>`;
  }).join('\n');

  const homeHref = relHref(currentPagePath, path.join(sectionBase, 'index.html'));

  return `
<nav class="sidebar">
  <a class="all-guides-link" href="${landingHref}">&larr; All guides</a>
  <div class="section-switch">
    ${sectionSwitch}
  </div>
  <h2><a href="${homeHref}" style="color:inherit;text-decoration:none;">${escapeHtml(section.label)}</a></h2>
  <ul>
    ${items}
  </ul>
</nav>`.trim();
}

function pageShell({ title, bodyHtml, cssHref, sidebarHtml }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="${cssHref}">
</head>
<body>
${sidebarHtml}
<main>
${bodyHtml}
</main>
</body>
</html>
`;
}

function formIframeHtml(guideTitle, version) {
  const src =
    `https://docs.google.com/forms/d/e/${FORM_ID}/viewform?embedded=true` +
    `&entry.${GUIDE_NAME_ENTRY_ID}=${encodeURIComponent(guideTitle)}` +
    `&entry.${VERSION_ENTRY_ID}=${encodeURIComponent(version)}`;

  return `
<section class="verify-form">
  <h2>Verify this guide</h2>
  <p>Checked this against the live app? Log it here.</p>
  <iframe src="${escapeHtml(src)}" loading="lazy">Loading form…</iframe>
</section>`;
}

// ===========================================================================
// Main
// ===========================================================================

/** Resolves a _VERIFICATION.md row to its source guide file + content, or
 * null (with a warning) if it can't be matched confidently or its title
 * doesn't line up 1:1 with _progress.md. Shared by both sections since the
 * matching rules don't depend on which section the row belongs to. */
function resolveGuideSource(topic, row, progressTitleCounts, warnings) {
  const guideFile = findGuideFile(topic.folder, row.guide, warnings);
  if (!guideFile) return null;

  // The guide title stamped into the Google Form URL must come from
  // _progress.md, verbatim — never from this row's own copy of the title
  // (that's <Topic>/_VERIFICATION.md, a separately-maintained file that can
  // drift). Require an exact, unambiguous match rather than guessing which
  // _progress.md row was meant.
  const progressCount = progressTitleCounts.get(row.guide) || 0;
  if (progressCount === 0) {
    warnings.push(
      `"${row.guide}" (${topic.folder}/_VERIFICATION.md) has no exact match in _progress.md — ` +
        `the two files' titles have diverged. Skipping until that's fixed.`
    );
    return null;
  }
  if (progressCount > 1) {
    warnings.push(
      `"${row.guide}" (${topic.folder}/_VERIFICATION.md) matches ${progressCount} rows in _progress.md — ` +
        `guide titles must be unique across the tracker. Skipping rather than guessing.`
    );
    return null;
  }

  // Confirmed above to match _progress.md exactly, so row.guide here *is*
  // the _progress.md string — not a coincidence, a checked fact.
  const guideContent = fs.readFileSync(guideFile, 'utf8');
  return { title: row.guide, version: row.version || '', guideContent, filePath: guideFile };
}

/** Builds one section's topic pages (guide entries grouped by topic, each
 * with its section-scoped output path). Does not render/write anything yet —
 * that happens after every section's guides are known, so inter-guide links
 * can resolve across sections too. */
function buildSectionTopicPages(section, topics, progressTitleCounts, warnings) {
  const topicPages = [];

  for (const topic of topics) {
    const verificationPath = path.join(VAULT_ROOT, topic.folder, '_VERIFICATION.md');
    const content = fs.readFileSync(verificationPath, 'utf8');
    const rows = parseVerificationTables(content).filter((r) => r.guide);
    const matched = rows.filter(section.match);

    const guides = [];
    for (const row of matched) {
      const src = resolveGuideSource(topic, row, progressTitleCounts, warnings);
      if (!src) continue;

      const outName = `${slugifyForUrl(src.title)}.html`;
      const outFile = path.join(OUTPUT_DIR, section.dirName, topic.folder, outName);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });

      guides.push({ ...src, outFile });
    }

    if (guides.length > 0) {
      topicPages.push({ topic, guides });
    }
  }

  return topicPages;
}

/** Renders every page (guide pages, topic indexes, section index) for one
 * already-built section. `fileToOutFile`/`basenameToOutFile` are the global,
 * cross-section link maps so a guide in one section can link to a guide in
 * the other. */
function renderSection(section, topicPages, fileToOutFile, basenameToOutFile) {
  const topicsWithCounts = topicPages.map(({ topic, guides }) => ({ ...topic, count: guides.length }));

  // Guide pages
  for (const { topic, guides } of topicPages) {
    for (const guide of guides) {
      copyReferencedAttachments(topic.folder, guide.guideContent, section.dirName);

      let linkedMarkdown = rewriteGuideLinks(guide.guideContent, guide.filePath, guide.outFile, fileToOutFile);
      linkedMarkdown = rewriteWikilinks(linkedMarkdown, guide.outFile, basenameToOutFile);
      const renderedMarkdown = marked.parse(linkedMarkdown);
      const body = `
<span class="guide-meta">Version ${escapeHtml(guide.version || '—')} · ${escapeHtml(section.statusLabel)}</span>
${renderedMarkdown}
${formIframeHtml(guide.title, guide.version)}`;

      const cssHref = path.relative(path.dirname(guide.outFile), path.join(OUTPUT_DIR, 'assets', 'style.css')).split(path.sep).join('/');
      const sidebarHtml = renderSidebar(topicsWithCounts, guide.outFile, section);

      fs.writeFileSync(
        guide.outFile,
        pageShell({ title: guide.title, bodyHtml: body, cssHref, sidebarHtml })
      );
    }
  }

  // Topic index pages
  for (const { topic, guides } of topicPages) {
    const indexFile = path.join(OUTPUT_DIR, section.dirName, topic.folder, 'index.html');
    const items = guides
      .map((g) => {
        const href = path.relative(path.dirname(indexFile), g.outFile).split(path.sep).join('/');
        return `<li><a href="${href}">${escapeHtml(g.title)}</a> <span class="version">v${escapeHtml(g.version || '—')}</span></li>`;
      })
      .join('\n');

    const body = `
<h1>${escapeHtml(topic.label)}</h1>
<p>${guides.length} guide${guides.length === 1 ? '' : 's'} ${section.id === 'verified' ? 'verified against the live app.' : 'awaiting verification.'}</p>
<ul class="topic-list">
${items}
</ul>`;

    const cssHref = path.relative(path.dirname(indexFile), path.join(OUTPUT_DIR, 'assets', 'style.css')).split(path.sep).join('/');
    const sidebarHtml = renderSidebar(topicsWithCounts, indexFile, section);

    fs.writeFileSync(indexFile, pageShell({ title: `${topic.label} — ${section.label}`, bodyHtml: body, cssHref, sidebarHtml }));
  }

  // Section index page
  const sectionIndexFile = path.join(OUTPUT_DIR, section.dirName, 'index.html');
  const totalGuides = topicsWithCounts.reduce((sum, t) => sum + t.count, 0);
  const topicItems = topicsWithCounts
    .map((t) => {
      const href = path.relative(path.join(OUTPUT_DIR, section.dirName), path.join(OUTPUT_DIR, section.dirName, t.folder, 'index.html')).split(path.sep).join('/');
      return `<li><a href="${href}">${escapeHtml(t.label)}</a> <span class="version">${t.count} guide${t.count === 1 ? '' : 's'}</span></li>`;
    })
    .join('\n');

  const intro = section.id === 'verified'
    ? `${totalGuides} guide${totalGuides === 1 ? '' : 's'} across ${topicsWithCounts.length} topic${topicsWithCounts.length === 1 ? '' : 's'} have been checked against the live app and confirmed accurate. A guide lands here the moment its row is marked <code>Verified = Yes</code> and the site is rebuilt.`
    : `${totalGuides} guide${totalGuides === 1 ? '' : 's'} across ${topicsWithCounts.length} topic${topicsWithCounts.length === 1 ? '' : 's'} still need a human check against the live app. A guide moves to Verified the moment its row is marked <code>Verified = Yes</code> and the site is rebuilt.`;

  const sectionBody = `
<h1>${escapeHtml(section.label)}</h1>
<p>${intro}</p>
<ul class="topic-list">
${topicItems}
</ul>`;

  const sectionIndexCssHref = path.relative(path.dirname(sectionIndexFile), path.join(OUTPUT_DIR, 'assets', 'style.css')).split(path.sep).join('/');
  fs.writeFileSync(
    sectionIndexFile,
    pageShell({
      title: section.label,
      bodyHtml: sectionBody,
      cssHref: sectionIndexCssHref,
      sidebarHtml: renderSidebar(topicsWithCounts, sectionIndexFile, section),
    })
  );

  return totalGuides;
}

function renderLandingPage(sectionTotals) {
  const cards = SECTIONS
    .map((s) => {
      const total = sectionTotals[s.id];
      const desc = s.id === 'verified'
        ? `${total} guide${total === 1 ? '' : 's'} confirmed against the live app.`
        : `${total} guide${total === 1 ? '' : 's'} still need a human check against the live app.`;
      return `<li><a href="${s.dirName}/index.html">${escapeHtml(s.label)}</a><p>${desc}</p></li>`;
    })
    .join('\n');

  const body = `
<h1>OCU One User Guides</h1>
<p>Every user guide, split by verification status.</p>
<ul class="section-cards">
${cards}
</ul>`;

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.html'),
    pageShell({
      title: 'OCU One User Guides',
      bodyHtml: body,
      cssHref: 'assets/style.css',
      sidebarHtml: '',
    })
  );
}

function main() {
  const warnings = [];

  rmrf(OUTPUT_DIR);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUTPUT_DIR, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(OUTPUT_DIR, 'assets', 'style.css'), styleSheet());

  const progressTitleCounts = loadProgressGuideTitleCounts();
  const topics = discoverTopics();

  const sectionTopicPages = {};
  for (const section of SECTIONS) {
    sectionTopicPages[section.id] = buildSectionTopicPages(section, topics, progressTitleCounts, warnings);
  }

  // Map every guide's source vault path to its generated output path, across
  // BOTH sections, so inter-guide links (see rewriteGuideLinks) can resolve
  // regardless of which section or topic either end lives in.
  const fileToOutFile = new Map();
  const basenameToOutFile = new Map();
  for (const section of SECTIONS) {
    for (const { guides } of sectionTopicPages[section.id]) {
      for (const guide of guides) {
        fileToOutFile.set(guide.filePath, guide.outFile);
        basenameToOutFile.set(path.basename(guide.filePath, '.md'), guide.outFile);
      }
    }
  }

  const sectionTotals = {};
  for (const section of SECTIONS) {
    sectionTotals[section.id] = renderSection(section, sectionTopicPages[section.id], fileToOutFile, basenameToOutFile);
  }

  renderLandingPage(sectionTotals);

  // Report
  const grandTotal = Object.values(sectionTotals).reduce((sum, n) => sum + n, 0);
  const summary = SECTIONS.map((s) => `${sectionTotals[s.id]} ${s.label.toLowerCase()}`).join(', ');
  console.log(`Generated ${grandTotal} guide page(s) (${summary}) into ${path.relative(VAULT_ROOT, OUTPUT_DIR)}/`);
  if (warnings.length > 0) {
    console.warn(`\n${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main();

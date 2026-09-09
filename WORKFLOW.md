# Workflow

How guides in this vault get written, tracked, verified by a human, and kept
current as the app changes — and the slash commands that drive each step.

## State files

Everything here is tracked in plain markdown, not a database or a committed
CSV.

**`_progress.md`** (vault root) — one row per planned guide/feature. Key
columns:
- `Status` — `todo` (not written), `done` (written), or `needs update`
  (written but flagged stale by code drift).
- `Maps To` — the app codebase paths the guide covers, used to detect drift.
- `Release` — the app version the current guide content was written
  against. On a first write this is just that version; after a rewrite it's
  recorded as `<new version> (from <old version>)`.
- `documented_at`, `Change notes` — when it was last written, and (for
  `needs update` rows) what's known to have changed.

**`<Topic>/_VERIFICATION.md`** (one per topic folder, plus one per
`Settings/*` subfolder) — one row per guide in that topic, tracking human
sign-off:
- `Verified` — Yes/No.
- `Verified by`, `Date` — who checked it against the live app, and when.
- `Version` — the `Release` value the row was last written/reset against.
  This is what a re-verification response gets checked against, so a stale
  response can't be silently reused after the guide changes (see
  `/sync-human-verification` below).
- `Notes` — reviewer comments, appended to (never overwritten), plus a
  hidden marker per applied response so re-syncing the same CSV export
  doesn't double-apply it.

**`_VERIFICATION.md`** (vault root) — a pure rollup of every topic's
`_VERIFICATION.md`, rebuilt by `/sync-verification`.

## Commands

### Writing and updating guides

**`/write-guide`** — write new guides for `todo` rows.
Interactive: shows topics with `todo` rows (pauses for a topic number), then
that topic's list (pauses for how many to write). For each guide it seeds
realistic test data, walks the feature in the running app via browser
automation, screenshots and annotates each step, writes the guide file, logs
any real app bug it hits under `Zz - Known Bugs/`, flips the row to `done`
in `_progress.md`, adds a new `Verified: No` row to that topic's
`_VERIFICATION.md`, then tears down its own test data.

**`/update-guide`** — rewrite guides already flagged `needs update`.
Same interactive shape as `/write-guide`, but starts from the `needs update`
list and reads each row's `Change notes` first to know what to focus on. It
only re-screenshots what actually changed, edits the guide in place rather
than rewriting it wholesale, flips the row back to `done`, and — critically
— bumps that guide's `Version` in `_VERIFICATION.md` to the new `Release`
while leaving `Verified` as `No`, since a human still needs to re-check the
rewritten guide.

### Verification

Verification happens outside this repo: `scripts/generate-verification-site.js`
builds a small site (rows where `Verified: No`) with an embedded Google Form
per guide, stamped with that guide's current `Version`. A human reviewer
checks the guide against the live app and submits the form; responses land
in a Google Sheet, exported as CSV when it's time to sync.

**`/sync-human-verification`** — apply a CSV export of form responses.
Takes a CSV (Timestamp, Guide name, Verified, Verified by, Date, Version,
Notes) and validates every row before applying anything:
1. **Duplicate check** — already-applied Timestamp (found in the row's
   Notes) → skip.
2. **Completeness check** — Verified/Verified by/Date well-formed → else
   skip.
3. **Guide match** — exact title match against `_progress.md` then the
   topic's `_VERIFICATION.md`; zero or multiple matches → skip, never
   guessed.
4. **Version check** — the response's `Version` must equal the `Version`
   currently on that row. If the guide was rewritten (and its `Version`
   bumped by `/update-guide`) after the reviewer opened the form, this
   catches it and skips the row as a "version mismatch" instead of applying
   a review of a now-superseded guide.

Only rows passing all four are applied; a reconciliation check confirms the
count applied matches the count classified as valid before it reports
success. Reports every category (applied, duplicate, incomplete, no match,
ambiguous, version mismatch) explicitly — never a vague summary. Leaves
changes uncommitted for review, and doesn't touch `_progress.md`, the root
rollup, or the site.

### Sync and consistency checks

**`/sync-guides`** — file-existence sync only. Matches guide `.md` files on
disk against `todo` rows in `_progress.md`, flips matched rows to `done`,
fills in `documented_at`/`Release` from git history. Flags orphans (a file
with no row, or a `done` row with no file) instead of guessing.

**`/sync-drift`** — code-drift sync only. Diffs every `done` row's `Release`
SHA against `master` over its `Maps To` paths. No user-facing diff → stays
`done`; a real one → flips to `needs update`, adds a `Change notes` entry,
and resets the matching `_VERIFICATION.md` row (`Verified → No`, clear
`Verified by`/`Date`, **`Version` left unchanged** — it still reflects what
was last actually verified, even though that's now known stale). Also scans
controllers/routes for new undocumented user-facing actions and adds them as
new `todo` rows. Writes a dated sync log.

**`/full-sync`** — the complete chain, in order: file-existence sync →
code-drift sync → propagate every status change to the relevant
`_VERIFICATION.md` rows → rebuild the root `_VERIFICATION.md` rollup →
patch the stale-fact lines in `README.md` → a final cross-file sanity check
(topic totals must reconcile between `_progress.md` and
`_VERIFICATION.md`). Writes a dated sync log. This is what `/sync-guides`
and `/sync-drift` do individually, run together end to end.

**`/sync-verification`** — rebuild only the root `_VERIFICATION.md` rollup
from every topic's own `## Summary` line (with Settings handled specially:
its own subfolder rollup runs first). Never edits a per-topic file, purely
mirrors them.

**`/check-consistency`** — read-only audit, fixes nothing. Checks every
topic's `_VERIFICATION.md` Summary line against its own actual row counts,
and checks the root rollup's per-topic totals against `_progress.md`'s
done+needs-update counts. Reports any mismatch found.

### Utility

**`/guides-remaining`** — read-only report: a table of Remaining/Todo/Needs
update/Total per `_progress.md` section, sorted by biggest gap first. Doesn't
modify anything.

**`/worklist`** — read-only planning aid for one topic (`/worklist <topic>`):
groups that topic's `todo` rows by shared controller so related guides can
be batched in one sitting, ordered by group size. Doesn't write any guide
content.

## The full lifecycle

1. `/write-guide` — a `todo` row becomes a written guide: `_progress.md`
   flips to `done`, a `Verified: No` row appears in the topic's
   `_VERIFICATION.md`.
2. The verification site (built from every `Verified: No` row) surfaces the
   guide with an embedded form, stamped with its current `Version`.
3. A human reviewer checks it against the live app and submits the form.
4. Once exported as CSV, `/sync-human-verification` applies the response —
   guarded by the duplicate/completeness/match/version checks above — and
   the row becomes `Verified: Yes` (or records a real "No" if it failed
   review). A verified row drops off the site.
5. Later, `/sync-drift` (standalone) or `/full-sync` (full chain) detects
   the app changed under that guide: `_progress.md` flips to `needs update`,
   and the `_VERIFICATION.md` row resets to `Verified: No` (Version
   unchanged, since nothing's been rewritten yet).
6. `/update-guide` rewrites the guide, flips `_progress.md` back to `done`,
   and bumps `Version` on the `_VERIFICATION.md` row — which is what lets
   step 4's version check correctly reject any stale review response still
   sitting in the Sheet from before the rewrite.
7. The guide reappears on the verification site under its new `Version`,
   and the cycle repeats from step 3.

`/check-consistency`, `/guides-remaining`, and `/worklist` don't participate
in this cycle — they're read-only reporting and planning tools for auditing
or picking what to work on next.

# Full Sync — keeping _progress.md, _VERIFICATION.md (all of them), and README.md consistent

This repo's state lives in four kinds of file that can each drift from the others if only one is updated:

- **`_progress.md`** (root) — does a guide exist, and is it current with the code. Status: `todo` / `done` / `needs update`.
- **`<Area>/_VERIFICATION.md`** (one per topic folder) — has a human actually checked the *written* guide against the live app. Only guides with actual written content (`done` or `needs update` in `_progress.md`) appear here at all — a `todo` guide has nothing to verify yet.
- **`_VERIFICATION.md`** (root) — a pure rollup of every `<Area>/_VERIFICATION.md`, regenerated from them.
- **`README.md`** (root) — the human-facing roadmap narrative: total workflow count, the "N complete areas" list, the Contents section.

Each of `_progress.md` and the root `_VERIFICATION.md` already has its own "How to sync this file" prompt at the top — this file is the entrypoint that runs them **in the right order**, plus the one linking step neither of them owns on its own: propagating a fresh `needs update` verdict into the matching `_VERIFICATION.md` row immediately, not whenever someone next happens to rewrite that guide.

## When to run this

- After any codebase reconciliation pass against `_progress.md` (new features found, `done` rows diffed for drift).
- Whenever a guide is actually rewritten to close out a `todo` or `needs update` row.
- Periodically as a consistency check even with no known changes, since these files are hand-maintained and drift silently.

## The full sync procedure (prompt for Claude)

1. **Run `_progress.md`'s two sync prompts in full**: "How to sync this file" (matches guide files on disk to `todo` rows, flips them to `done`) and "How to sync for code drift" (diffs every `done` row's mapped controllers/views against its recorded Release, flips genuinely user-facing drift to `needs update` with a Change notes entry, and does a lightweight pass for brand-new undocumented controllers/actions). Either can surface new `todo` rows, so run both before moving on.

2. **Propagate every row that changed status in step 1** into the matching `<Area>/_VERIFICATION.md`:
   - A row that just flipped `done` → `needs update`: reset its `_VERIFICATION.md` row — `Verified` → `No`, clear `Verified by` and `Date`, leave `Version` **unchanged** (it only gets bumped to the new release once the guide is actually rewritten — that's each area file's own "How to use this" rule), and add a short `Notes` entry summarizing what changed (reuse `_progress.md`'s Change notes cell verbatim if it fits, rather than re-deriving it).
   - A row that just flipped `todo` → `done` (a guide was newly written): add a new row to that area's `_VERIFICATION.md` — `Verified: No`, `Version` = the Release just recorded in `_progress.md`, everything else blank.
   - A row that flipped `needs update` → `done` (a stale guide was rewritten): update its existing `_VERIFICATION.md` row's `Version` to the new Release; `Verified` stays `No` until a human actually reviews it (don't set Verified/Date/Notes here — that's a separate reviewing step, not part of this sync).
   - This is the one deliberate exception to `_progress.md`'s own instruction not to touch `_VERIFICATION.md` files during its sync — that instruction is about the routine existence/status sync (step 1), not about a row that just became newly stale or newly written. Everything else about a per-topic `_VERIFICATION.md` (actual human review, i.e. flipping a row to `Verified: Yes`) stays entirely manual and outside any sync.

3. **Run the root `_VERIFICATION.md`'s own sync prompt** (the "How to sync this file" section at the top of that file) to rebuild its rollup table and Summary from the now-updated per-topic files.

4. **Check `README.md`** against the fresh numbers:
   - If `_progress.md`'s total row count (`Completed: X / Y`, the `Y`) changed, update the "roughly N user-facing workflows" line to match.
   - If any area currently listed among the "N complete areas" now has any `todo` or `needs update` row (no longer 100% `done`), remove it from that list and its guide-count parenthetical, and decrement N. If a previously-incomplete area just became 100% `done`, add it.
   - This step is editorial, not mechanical — only touch the facts (counts, area membership), don't rewrite the surrounding prose.

5. **Sanity-check the numbers agree** before finishing:
   - For each topic folder: `done` rows + `needs update` rows for that section in `_progress.md` should equal the `Total` row count in that area's `_VERIFICATION.md` (both count "has written content," regardless of whether it's currently known-stale).
   - Root `_VERIFICATION.md`'s summed `Total` across all topics should equal `_progress.md`'s `Completed` count (done) + its `Needs update` count.
   - If any of these don't reconcile, stop and report the mismatch rather than forcing the numbers to agree — it usually means a row was added/removed inconsistently somewhere in a prior manual edit.

## What this does NOT do

- Doesn't write or rewrite any guide content, screenshots, or the per-topic `_<Topic> - Overview.md` files.
- Doesn't flip anything to `Verified: Yes` — that only happens when a human has actually checked a guide against the live app.
- Doesn't touch `Zz - Known Bugs/` — that's a separate, unrelated tracker.

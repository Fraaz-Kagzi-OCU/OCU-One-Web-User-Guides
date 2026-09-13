# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the internal progress tracker's sections, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet. This folder may later also hold the guides for the separate, larger "Records" section elsewhere in `_progress.md` (25 rows about RecordsController etc., not this one) — add them here when/if they're built, don't create a second folder.

## Status

| Guide | Verified | Verified by | Date | Version | Blocked | Notes |
| ----- | -------- | ------------ | ---- | ------- | ------- | ----- |
| Browsing records by category (Record Groups hub) | No |  |  | v2026.08.04 |  |  |
| Browsing all record type categories (Record Groups landing page) | No |  |  | v2026.09.01 |  |  |
| Drilling into a Record Group to pick a record type | No |  |  | v2026.09.01 |  |  |
| Viewing the Records list/index (table view) | No |  |  | v2026.09.01 |  |  |
| Filtering and searching records in the list view | No |  |  | v2026.09.01 |  |  |
| Choosing a record type before creating a new record | No |  |  | v2026.09.01 |  |  |
| Creating a new record | No |  |  | v2026.09.01 |  |  |
| Viewing a record's Overview/Main tab | No |  |  | v2026.09.01 |  |  |
| Editing a record's details | No |  |  | v2026.09.01 |  |  |
| Deleting (archiving) a record | No |  |  | v2026.09.01 |  |  |
| Setting a record's RAG status | No |  |  | v2026.09.01 |  |  |
| Managing todos on a record | No |  |  | v2026.09.01 |  |  |
| Managing assets linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing jobs linked to a record | No |  |  | v2026.09.01 | Yes: job-created-with-nil-client-crashes-project-jobs-tab.md |  |
| Managing issues linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing estimates linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing clients linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing projects linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing variations linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing invoices linked to a record | No |  |  | v2026.09.01 |  |  |
| Managing linked records (record-to-record relationships) | No |  |  | v2026.09.01 |  |  |
| Managing child records of a specific type ("Records" tab) | No |  |  | v2026.09.01 |  |  |
| Attaching and detaching a permit on a record | No |  |  | v2026.09.01 | Yes: draft-permit-unsearchable-in-attach-picker.md |  |
| Downloading a record as PDF or Word document | No |  |  | v2026.09.01 |  |  |
| Changing and reordering a record's pipeline stage | No |  |  | v2026.09.01 |  |  |
| Viewing and filtering the Records pipeline/kanban board | No |  |  | v2026.09.01 |  |  |

## Summary

Verified: 0 / 26

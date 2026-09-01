# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet.

## Status

| Guide | Verified | Verified by | Date | Version | Notes |
| ----- | -------- | ------------ | ---- | ------- | ----- |
| Commenting on any record, with replies and internal notes | No | | | v2026.08.05 | Demonstrated on Ticket "Boiler not igniting" — Meera Joshi (owner) posts the first comment, Callum Hart (not owner) replies then posts an internal note. Matches the row's hint closely; confirmed the internal checkbox is genuinely conditional on `commentable.is_a?(Ticket) && current_user != commentable.owner`. |
| Reacting to a comment | No | | | v2026.08.05 | Demonstrated on Hub post "Job completed and signed off" — 4 users pre-seeded with reactions (3 thumbs-up, 1 love), a 5th user (Dan Whitfield) adds and then removes a live reaction to show both directions. |
| Viewing a record's activity feed | No | | | v2026.08.05 | **Row hint mismatch**: the hint described Project "Replace guttering - 8 Mill Lane" with activity for created/status-changed/document-added, paginated at 10/page. In the current codebase: (1) Order has no user-facing "status" control in any view (the `status` enum is a permitted param but never rendered) — used the Job Lock/Unlock toggle instead, which is Order's only other tracked activity type; (2) uploading a doc to a Project does **not** create an Activity entry at all — Order only records activity on creation and on job-lock changes; (3) even with 3 activities present, no "See more" pager appeared, despite `Pagy::OPTIONS[:items] = 2` in `config/initializers/pagy.rb`. Documented what's actually on screen. While seeding this data, hit the already-known bug in `Zz - Known Bugs/rag-status-and-job-unlock-silently-fail-to-save.md` — the Unlock button on this same Project silently failed to persist via the UI; worked around it via a direct `skip_field_validations` update to seed the test data, no new bug filed. |

## Summary

Verified: 0 / 3

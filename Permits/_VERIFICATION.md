# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the internal progress tracker's sections, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet.

## Status

| Guide | Verified | Verified by | Date | Version | Notes | Blocked |
| ----- | -------- | ------------ | ---- | ------- | ----- | ----- |
| Using the permits landing page | No |  |  | v2026.09.01 | Static entry page with no test data of its own - screenshotted as-is. |  |
| Browsing permits | No |  |  | v2026.09.01 | |  |
| Viewing the permits board (pipeline) | No |  |  | v2026.09.01 | |  |
| Creating a permit for a project | No |  |  | v2026.09.01 | Date fields on this form use day/month/year order, not month/day - worth confirming the guide's callout is clear enough that a reader doesn't transpose a date by mistake the way the seeding pass initially did. |  |
| Editing or deleting a permit | No |  |  | v2026.09.01 | |  |
| Viewing a permit's overview page | No |  |  | v2026.09.01 | Location showed "None" since neither the demo project nor the permit had an address set - a real permit with an address configured would show it here instead. |  |
| Changing a permit's status | No |  |  | v2026.09.01 | |  |
| Viewing a permit's defects tab | No |  |  | v2026.09.01 | |  |
| Viewing a permit's linked project | No |  |  | v2026.09.01 | |  |
| Viewing a permit's linked jobs | No |  |  | v2026.09.01 | The demo jobs had to be seeded under the "Install" job type rather than "Fibre Install" - the test persona used throughout this batch (Priya Nair, Ops) doesn't have read permission on the "Fibre Install" job type's permission set, only "Install", so a job of that type is invisible to her (a 404/permission redirect, not a bug - just a permission-set gap for this particular demo tenant). |  |
| Linking or unlinking a permit to a job | No |  |  | v2026.09.01 | Same job-type/permission note as "Viewing a permit's linked jobs" above. |  |
| Viewing a permit's records | No |  |  | v2026.09.01 | The attached record is an existing "Safety Risk" record reused from an earlier guide-building session, not a record created specifically for this guide - functionally identical to what a real permit-records attachment looks like. |  |
| Browsing defects | No |  |  | v2026.09.01 | |  |
| Raising a defect against a permit | No |  |  | v2026.09.01 | |  |
| Editing or deleting a defect | No |  |  | v2026.09.01 | |  |
| Viewing a defect | No |  |  | v2026.09.01 | |  |
| Changing a defect's status | No |  |  | v2026.09.01 | |  |

## Summary

Verified: 0 / 17

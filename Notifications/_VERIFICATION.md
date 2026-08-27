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

| Guide                              | Verified | Verified by | Date       | Version     | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------- | -------- | ----------- | ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Viewing and managing notifications | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | The web app's notification list has no delete/remove control anywhere in its markup — the `destroy` route exists but isn't exposed on this page, so the guide says so rather than showing a delete step. The test user needed an Admin role only so the "click a notification" screenshot could reach the job it links to (a plain user role is blocked from viewing jobs it isn't genuinely assigned to) - unrelated to the notification feature itself. |

## Summary

Verified: 1 / 1

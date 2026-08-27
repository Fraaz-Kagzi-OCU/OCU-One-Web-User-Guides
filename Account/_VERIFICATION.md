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

| Guide                            | Verified | Verified by | Date       | Version     | Notes                                                                                                                                                                                                                                                                                                   |
| -------------------------------- | -------- | ----------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Updating your account profile    | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | Built with test user Dave Chen (dave.chen@ocugroup.com, Admin role so the Home dropdown had options). Covers DOB, Home, uploading and removing a profile picture.                                                                                                                                       |
| Collapsing/expanding the sidebar | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | Demonstrated on Dave Chen's own Settings > Users record — this sidebar appears on any record's show page, not just this one.                                                                                                                                                                            |
| Dismissing an onboarding tip     | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | The progress tracker's row named tip "new_launcher_menu", but that tip doesn't exist anywhere in the codebase — the only tip actually wired up is "scene_columns" ("Want to see more?"), shown here on the Settings > Users list. Worth a second look to confirm this is still the only tip in the app. |

## Summary

Verified: 3 / 3

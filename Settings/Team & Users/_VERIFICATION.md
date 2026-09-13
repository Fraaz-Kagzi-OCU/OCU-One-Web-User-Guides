# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the internal progress tracker's sections, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet.
- This is a subfolder of `Settings/` — see `../_VERIFICATION.md` for the roll-up across all Settings sub-areas.

## Status

| Guide | Verified | Verified by | Date | Version | Notes |
| ----- | -------- | ------------ | ---- | ------- | ----- |
| Adding a new team member | No |  |  | v2026.09.01 |  |
| Editing a team member's profile and system settings | No |  |  | v2026.09.01 |  |
| Viewing a team member's overview | No |  |  | v2026.09.01 |  |
| Managing a user's availability entries | No |  |  | v2026.09.01 |  |
| Tracking a user's mobile device sessions | No |  |  | v2026.09.01 |  |
| Reviewing and resolving a mobile session's uploads | No |  |  | v2026.09.01 |  |
| Managing a user's skill sets | No |  |  | v2026.09.01 |  |
| Reviewing a user's skill evidence and todos | No |  |  | v2026.09.01 |  |
| Sending a push message to a user's mobile device | No |  |  | v2026.09.01 |  |
| Managing a user's tags and lifecycle status | No |  |  | v2026.09.01 |  |
| Moving a user through a stage/pipeline | No |  |  | v2026.09.01 |  |
| Browsing team members in a table or pipeline board view | No |  |  | v2026.09.01 |  |
| Managing user types (job roles reference data) | No |  |  | v2026.09.01 |  |
| Attaching a pipeline to user types | No |  |  | v2026.09.01 |  |

## Summary

Verified: 0 / 14

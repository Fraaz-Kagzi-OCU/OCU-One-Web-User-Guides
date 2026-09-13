# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the guide's own README section, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet.

## Status

### Leads

| Guide                                                | Verified | Verified by | Date | Version     | Notes |
| ----------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Viewing and filtering the sales lead list             | No       |             |      | v2026.09.01 |       |
| Creating and editing a sales lead                     | No       |             |      | v2026.09.01 |       |
| Lead overview, todos, and sites tabs                  | No       |             |      | v2026.09.01 | Covers Overview, Sites, and Todos only — no Records tab exists for Leads |
| Converting a lead into a client                       | No       |             |      | v2026.09.01 |       |
| Archiving a lead                                       | No       |             |      | v2026.09.01 |       |

## Summary

Verified: 0 / 5

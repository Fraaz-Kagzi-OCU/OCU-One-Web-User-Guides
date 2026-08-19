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

### Browsing tickets — groups, types, and the tickets list

| Guide                                                          | Verified | Verified by | Date | Version     | Notes |
| --------------------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Browsing the ticket type catalog (ticket groups landing page) | No       |             |      | v2026.08.04 |       |
| Viewing ticket types within a ticket group                    | No       |             |      | v2026.08.04 |       |
| Viewing the tickets list/table                                | No       |             |      | v2026.08.04 |       |

### Working a ticket — creating, updating, todos, PDFs, and deleting

| Guide                                       | Verified | Verified by | Date | Version     | Notes |
| ---------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Creating a new ticket                       | No       |             |      | v2026.08.04 |       |
| Viewing ticket details (main tab)           | No       |             |      | v2026.08.04 |       |
| Editing a ticket                            | No       |             |      | v2026.08.04 |       |
| Managing ticket todos                       | No       |             |      | v2026.08.04 |       |
| Downloading/previewing a ticket PDF         | No       |             |      | v2026.08.04 |       |
| Deleting (archiving) a ticket                | No       |             |      | v2026.08.04 |       |

### Pipeline & board views — tracking progress

| Guide                                             | Verified | Verified by | Date | Version     | Notes |
| ---------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Moving a ticket's pipeline stage                  | No       |             |      | v2026.08.04 |       |
| Viewing the tickets pipeline (kanban) board       | No       |             |      | v2026.08.04 |       |

### Your own tickets — personal account view

| Guide                                                | Verified | Verified by | Date | Version     | Notes |
| ------------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Viewing "My Tickets" (personal account tab)           | No       |             |      | v2026.08.04 |       |

## Summary

Verified: 0 / 12

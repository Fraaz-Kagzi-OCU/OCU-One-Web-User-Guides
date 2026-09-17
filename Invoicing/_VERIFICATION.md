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
| Viewing and filtering the invoices list and pipeline | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Creating a new invoice | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Viewing an invoice overview | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Editing or deleting an invoice | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Managing invoice lines | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Updating invoice status and RAG rating | No |  |  | v2026.09.01 | Newly written 2026-09-17. Documents an actual (broken) behaviour: moving an invoice to Pending logs a wrong "created/sent a bill" activity entry. Not yet human-verified. | Yes: activity-feed-says-created-sent-a-bill-for-a-pending-status-change.md |
| Activating or deactivating an invoice | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |
| Creating and sending an invoice bill (PDF) to a client | No |  |  | v2026.09.01 | Newly written 2026-09-17. Documents the actual (broken) behaviour: creating/previewing/sending a bill crashes with a missing-template error. Not yet human-verified. | Yes: creating-or-previewing-an-invoice-bill-crashes-missing-template.md |
| Viewing an invoice's export history | No |  |  | v2026.09.01 | Newly written 2026-09-17. Not yet human-verified. |  |

## Summary

Verified: 0 / 9

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
| Choosing which attachments appear on a PDF export | No | | | v2026.08.05 | Demonstrated on a Job's "Install"-type attachments (site photos on a custom "Site Photos" field), since that's the closest real on-screen match to the row's hint. The selection screen (Show / Don't show this time / Don't show, plus the bulk "set all" row) was walked through live and screenshotted in full. Clicking **Proceed** did trigger the real PDF-generation request, but PDF rendering itself (via Grover/headless Chrome) errors in this local dev environment ("spawn Unknown system error -86") — a missing dependency in this machine's setup, unrelated to the attachment-selection feature being documented. The final rendered PDF page couldn't be captured locally as a result; everything up to and including clicking Proceed was captured live. |
| Removing an uploaded file attachment | No | | | v2026.08.05 | The row's hint describes "a comment draft" — no comment form in the current codebase actually uses this upload-and-remove widget. The real widget (`Attachments::FormComponent`) is used on forms like Estimates, Variations, Skill Evidence, and custom attachment-type fields. Used a new Estimate's **Files** field instead, since it's a simple, standalone, realistic example of the same exact upload → remove-before-saving interaction the hint describes. No estimate was ever saved — the file was uploaded and removed entirely within the unsaved "new" form, so there was nothing to seed or clean up afterwards. |

## Summary

Verified: 0 / 2

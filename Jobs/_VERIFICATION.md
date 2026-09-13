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
| ----- | -------- | ----------- | ---- | ------- | ----- | ------- |
| Creating a job | No |  |  | v2026.09.01 |  |  |
| Creating a job from existing visits | No |  |  | v2026.09.01 |  |  |
| Viewing job details | No |  |  | v2026.09.01 |  |  |
| Editing a job | No |  |  | v2026.09.01 |  |  |
| Deleting (archiving) a job | No |  |  | v2026.09.01 |  |  |
| Changing a job's status | No |  |  | v2026.09.01 |  |  |
| Unbooking a job | No |  |  | v2026.09.01 |  |  |
| Tracking a job's RAG health status | No |  |  | v2026.09.01 |  | Yes: rag-status-change-silently-fails-on-a-live-job.md |
| Managing secondary allocated users on a job | No |  |  | v2026.09.01 |  |  |
| Downloading or previewing a job PDF | No |  |  | v2026.09.01 |  |  |
| Attaching or detaching an estimate to a job | No |  |  | v2026.09.01 |  |  |
| Allocating products to a job | No |  |  | v2026.09.01 |  |  |
| Tracking todos on a job | No |  |  | v2026.09.01 |  |  |
| Managing visits attached to a job | No |  |  | v2026.09.01 |  |  |
| Viewing assets linked to a job | No |  |  | v2026.09.01 |  |  |
| Viewing issues linked to a job | No |  |  | v2026.09.01 |  |  |
| Managing records on a job | No |  |  | v2026.09.01 |  |  |
| Linking permits to a job | No |  |  | v2026.09.01 |  |  |
| Browsing and filtering the jobs list | No |  |  | v2026.09.01 |  |  |
| Viewing jobs on a pipeline (kanban) board | No |  |  | v2026.09.01 |  |  |

## Summary

Verified: 0 / 20

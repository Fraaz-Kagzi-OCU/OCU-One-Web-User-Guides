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

### Timesheets — clocking in, individual timesheets, review grid

| Guide                                                                        | Verified | Verified by | Date | Version     | Notes |
| ----------------------------------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Clocking in and starting a shift                                             | No       |             |      | v2026.08.02 |       |
| Ending a shift and confirming hours worked                                   | No       |             |      | v2026.08.02 |       |
| Viewing and editing an individual timesheet                                  | No       |             |      | v2026.08.04 | Rewritten 2026-09-03 to cover the Active Duration field's 18-hour cap. Not yet human-verified. |
| Logging a break or other shift event                                        | No       |             |      | v2026.08.02 |       |
| Browsing all timesheets in the table view                                   | No       |             |      | v2026.08.02 |       |
| Approving or denying timesheets for your team (weekly review grid)          | No       |             |      | v2026.08.04 | Rewritten 2026-09-04 to cover the bulk-update failure error banner. Not yet human-verified. |
| Adding or editing a timesheet entry from the review grid                    | No       |             |      | v2026.08.02 |       |
| Rounding or splitting a timesheet entry during review                       | No       |             |      | v2026.08.02 |       |
| Using the Timesheets landing page                                           | No       |             |      | v2026.08.04 | Newly written 2026-09-04. Not yet human-verified. |

### Timesheet Timeline — Gantt/scheduler view

| Guide                                                            | Verified | Verified by | Date | Version     | Notes |
| ------------------------------------------------------------------ | -------- | ----------- | ---- | ----------- | ----- |
| Viewing the company shift timeline (Gantt/scheduler)             | No       |             |      | v2026.08.02 |       |
| Inspecting and updating a shift event from the timeline          | No       |             |      | v2026.08.02 |       |

### Timesheet Groups — pre-booking and reviewing shift groups

| Guide                                                                        | Verified | Verified by | Date | Version     | Notes |
| ----------------------------------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Creating and managing a timesheet group                                     | No       |             |      | v2026.08.02 |       |
| Reviewing a timesheet group and approving or denying its timesheets         | No       |             |      | v2026.08.02 |       |
| Browsing and filtering timesheet groups                                     | No       |             |      | v2026.08.02 |       |

### Timesheet Exports — payroll export files

| Guide                                                                        | Verified | Verified by | Date | Version     | Notes |
| ----------------------------------------------------------------------------- | -------- | ----------- | ---- | ----------- | ----- |
| Creating a timesheet export for payroll                                     | No       |             |      | v2026.08.02 |       |
| Reviewing an export and bulk-updating its timesheet statuses                | No       |             |      | v2026.08.02 |       |
| Browsing and filtering timesheet exports                                    | No       |             |      | v2026.08.02 |       |

## Summary

Verified: 0 / 17

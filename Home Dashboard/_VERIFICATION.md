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

| Guide | Verified | Verified by | Date | Version | Notes |
| ----- | -------- | ------------ | ---- | ------- | ----- |
| Viewing your activity feed | No |  |  | v2026.08.05 | The personal feed column has no visible on-screen label — its title text is inside `<% %>` instead of `<%= %>` in the source, so it never renders. Worth flagging to engineering; the guide just describes it as "the feed on the left" instead of quoting a label. |
| Using the Home overview widget dashboard | No |  |  | v2026.08.05 | Clicking **Filter** submitted to the Home tab rather than staying on Overview with the tag applied, in this test environment — I couldn't get a screenshot of the "after filtering" widget state. The guide describes the filter's intended effect from the code, not from an observed screenshot. Worth double-checking against production before trusting this row fully. |
| Reading the Today snapshot widget | No |  |  | v2026.08.05 | |
| Reading the Timesheets Today widget | No |  |  | v2026.08.05 | |
| Reading the Jobs Today widget | No |  |  | v2026.08.05 | |
| Browsing upcoming jobs on the Coming Up widget | No |  |  | v2026.08.05 | |
| Filtering the Jobs by Status chart | No |  |  | v2026.08.05 | |
| Filtering the Jobs by Type chart | No |  |  | v2026.08.05 | |
| Filtering the Projects by Stage chart | No |  |  | v2026.08.05 | |
| Filtering the Projects by Type chart | No |  |  | v2026.08.05 | Only one realistic order type ("Install") exists in this tenant, so the pie chart in the screenshot is a single slice. Worth reverifying with more varied data if that changes. |
| Filtering the Records by Stage chart | No |  |  | v2026.08.05 | Only one pipeline ("Health and Safety") exists for records in this tenant, so the pipeline dropdown has just one option — the guide doesn't show a picker screenshot for that reason. |
| Filtering the Records by Type chart | No |  |  | v2026.08.05 | |
| Reviewing the Recent Activity widget | No |  |  | v2026.08.05 | |
| Monitoring the Uploads status widget (Admin) | No |  |  | v2026.08.05 | Screenshot obtained via a fictional local test user (Test Docs <test.docs@insiris.com>, admin flag) created solely to satisfy `user.developer?` — not a real employee, deleted after the screenshot. Real behaviour for actual OCU staff should still be spot-checked at some point. |
| Monitoring the Weekly Imports status widget (Admin) | No |  |  | v2026.08.05 | The Pending/Failed counts include 2 pre-existing failed imports from 6 days before this session, on top of the ones seeded for this guide — the widget only shows a total, so nothing specific about those older imports is exposed, but the exact numbers in the screenshot (3 pending / 3 failed) reflect that overlap rather than a clean seed-only count. |

## Summary

Verified: 0 / 15

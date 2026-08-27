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
| Using global search / command palette | No |  |  | v2026.08.05 | The progress tracker's test-data hint suggested reference "ORD-3341", but the real generated format is "{3-letter order type prefix}-{ddmmyy}-{id}" (e.g. "INS-250826-88") - used a real generated reference and a title-text search instead. Didn't screenshot a "no category selected" or "no results" state, or prove a concrete case where Deep Search finds something classic search misses - only the toggle's own visible UI change (blue theme, sparkle icon, banner text) was captured. |
| Launching connected apps from the App Launcher | No |  |  | v2026.08.05 | The two test apps point at placeholder URLs (a real product URL and a `.example` domain) rather than real internal integrations, since no connected apps existed in this tenant. Clicking through to an app wasn't screenshotted, since it just opens the app's own external site in a new tab. |

## Summary

Verified: 0 / 2

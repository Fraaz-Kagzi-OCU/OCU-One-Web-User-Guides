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
| Managing your personal labels ("My Labels") | No | | | v2026.08.05 | Seeded a test user (Chloe Bennett) owning 3 labels (2 active, 1 later deactivated as part of the third guide) so the Active/Inactive split was real, not staged. |
| Creating a new label | No | | | v2026.08.05 | Created "Follow Up" (orange, label group "Client Comms") live through the UI exactly as documented — nothing pre-seeded for this guide. |
| Editing, deactivating, or deleting a label | No | | | v2026.08.05 | The row's hint and guide title both mention "deleting", but there is no delete control anywhere in the Labels UI (list view or edit modal) — only edit, and an activate/deactivate toggle. The controller does have a `destroy` action, but nothing in the UI links to it. Documented edit + deactivate/reactivate, and noted the missing delete affordance explicitly in the guide rather than describing a step that doesn't exist. Not filed as a bug since this reads as an intentional gap (the toggle already covers "retire a label" without losing its history), not broken behaviour. |

## Summary

Verified: 0 / 3

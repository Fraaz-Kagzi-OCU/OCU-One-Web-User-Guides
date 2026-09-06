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

### Filtering and columns — narrowing down and customizing a list view

| Guide                                                 | Verified | Verified by | Date       | Version     | Notes |
| ----------------------------------------------------- | -------- | ----------- | ---------- | ----------- | ----- |
| Filtering a list view by a field                      | Yes      | Fraaz Kagzi | 06/09/2026 | v2026.08.04 | Rewritten 2026-09-03 to cover the new "contains any" multi-select on text filters. Not yet human-verified. <!-- synced: 06/09/2026 20:31:05 --> |
| Removing or updating an active filter                 | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 |       |
| Customizing which columns appear in a list-table view | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 |       |

### Saved views — creating, editing, and switching between your own views

| Guide                                                 | Verified | Verified by | Date       | Version     | Notes                                   |
| ----------------------------------------------------- | -------- | ----------- | ---------- | ----------- | --------------------------------------- |
| Saving current filters-columns as a new personal view | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 |                                         |
| Renaming and updating an existing saved view          | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 |                                         |
| Switching between saved views on a list screen        | No      |  |  | v2026.08.04 (from v2026.08.02) |  |
| Favouriting a saved view                              | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 |                                         |
| Managing all your saved views (My Views)              | Yes      | Fraaz Kagzi | 17/08/2026 | v2026.08.02 | Yes: gated by the `manage_views` permission in permission_set_settings (ViewImplicitPolicy#index?), not user.admin, so any role granted that permission can access it. Edit/activate/deactivate/destroy/move further require owning the view or being admin (ViewPolicy#update?). |

### Admin — managing saved views across the tenant

| Guide                        | Verified | Verified by | Date       | Version     | Notes                                  |
| ---------------------------- | -------- | ----------- | ---------- | ----------- | -------------------------------------- |
| Managing saved views (admin) | No       |             |            | v2026.08.04 | Rewritten 2026-09-03 to cover the fixed settings-scoped Delete link and admin authz check. Not yet human-verified. |

## Summary

Verified: 7 / 9

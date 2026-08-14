# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the guide's own README section, so the two files stay easy to cross-reference.

## Status

### Planned vs Actual (PVA) — Commercial / Product Allocations

| Guide                                                                      | Verified | Verified by | Date | Version                                                         | Notes |
| -------------------------------------------------------------------------- | -------- | ----------- | ---- | --------------------------------------------------------------- | ----- |
| Overview — what Planned vs Actual means and how it all fits together       | No       |             |      | n/a — spans the whole PVA area, not tied to one tracked feature |       |
| Creating a rate book and its versions                                      | No       |             |      | v2026.08.03                                                     |       |
| Setting product rates within a rate book version                           | No       |             |      | v2026.08.03                                                     |       |
| Managing sell rates on a product                                           | No       |             |      | v2026.08.03                                                     |       |
| Managing cost rates on a product                                           | No       |             |      | v2026.08.03                                                     |       |
| Managing product allocation types                                          | No       |             |      | v2026.08.03                                                     |       |
| Managing rate categories                                                   | No       |             |      | v2026.08.03                                                     |       |
| Allocating products or materials to a job, project, estimate, or variation | No       |             |      | v2026.08.03                                                     |       |
| Raising a planned quantity change on an allocation                         | No       |             |      | v2026.08.03                                                     |       |
| Viewing planned quantity change history                                    | No       |             |      | v2026.08.03                                                     |       |
| Editing or removing a product allocation                                   | No       |             |      | v2026.08.03                                                     |       |
| Copying or transferring allocated products between records                 | No       |             |      | v2026.08.03                                                     |       |
| Bulk-applying a rate modifier to all allocated products                    | No       |             |      | v2026.08.03                                                     |       |
| Recording actual product usage against an allocation                       | No       |             |      | v2026.08.03                                                     |       |
| Viewing and managing product allocations on a project                      | No       |             |      | v2026.08.02                                                     |       |
| Managing a task's product allocations tab                                  | No       |             |      | v2026.08.02                                                     |       |
| Viewing a project's commercial stats dashboard                             | No       |             |      | v2026.08.03                                                     |       |

## Summary

Verified: 0 / 17

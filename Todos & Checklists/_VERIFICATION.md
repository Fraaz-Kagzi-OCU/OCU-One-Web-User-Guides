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
| Creating, editing, and managing a standalone todo | No | | | v2026.08.05 | Test user Dave Chen assigned to the created todo; reference "JOB-4021" typed manually (auto-generation only fires if the field is left blank). Delete demonstrated on a throwaway duplicate, not the main example todo. |
| Changing a todo's status from its detail page | No | | | v2026.08.05 | Straightforward — matched the row's hint exactly. |
| Viewing todos as a pipeline (kanban board) | No | | | v2026.08.05 | Seeded 12 todos across Pending/In Progress/On Hold/Done as the row specified, but by the time this guide was screenshotted other guides in this batch had added more todos to the tenant, so the board shows more than 12 cards. This is realistic (the board is tenant-wide, not scoped to a fixed set) rather than a problem with the guide. |
| Adding and managing todos on a job or project (Todos tab) | No | | | v2026.08.05 | Demonstrated on a Job's Todos tab specifically (the row's hint says "job/project/record" generically) since Job was the most direct, fully-wired example. The same tab and behaviour apply to Projects. |
| Viewing and prioritising your assigned todos | No | | | v2026.08.05 | Test user Sarah Ahmed, 4 incomplete todos across 2 jobs (1 prioritised at seed time, a 2nd prioritised live during the walkthrough) + 3 completed todos, matching the row's hint. |
| Adding a checklist to a todo | No | | | v2026.08.05 | **Row hint mismatch**: the tracker's hint describes a checklist on a Project ("Install new boiler - 22 Park Rd", "Pre-Install Safety Checks"). In the current codebase, checklists are only supported on Todos (`has_checklists` is defined on `Todo` and `TodoType` only) — there's no checklist feature on Orders/Projects at all. Demonstrated on a Todo attached to a Job instead, keeping the same checklist name/theme from the hint since it still fit naturally. Not filed as a bug — this reads as the hint describing an intended-but-different attachment point, not broken behaviour. |
| Adding, checking off, and removing checklist items | No | | | v2026.08.05 | Same Todo/checklist as the guide above, continued in the same session. Checklist item text fields visually clip their last character or two once you click away (the stored value is correct — confirmed directly in the database) if the item's title is close to the width of the input box; this is a minor cosmetic quirk, not something worth a bug writeup. |

## Summary

Verified: 0 / 7

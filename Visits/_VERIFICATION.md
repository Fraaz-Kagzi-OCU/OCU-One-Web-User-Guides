# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the internal progress tracker's sections, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet.
- **Blocked** is present because this topic currently has a blocked guide. A blocked row is invisible on the verification site regardless of its `Verified` value — see `Zz - Bugged Guides.md` and `WORKFLOW.md`.

## Status

| Guide | Verified | Verified by | Date | Version | Notes | Blocked |
| ----- | -------- | ------------ | ---- | ------- | ----- | ----- |
| Browsing visits | No | | | v2026.09.01 | Filtering itself is the shared List Views mechanism, only referenced here rather than re-demonstrated. | |
| Creating a visit | No | | | v2026.09.01 | | |
| Editing or deleting a visit | No | | | v2026.09.01 | | |
| Viewing a visit's overview page | No | | | v2026.09.01 | | |
| Changing a visit's status | No | | | v2026.09.01 | Guide documents the actual (broken) behaviour — see the linked bug. | Yes: no-way-to-change-a-visits-status-from-the-ui.md |
| Updating a visit's RAG status | No | | | v2026.09.01 | | |
| Attaching or detaching a visit from a job | No | | | v2026.09.01 | Detach confirm dialog is a native `window.confirm()` with no JS override, so the detach click itself wasn't performed live — described in prose using the real confirm text instead, per this session's automation-safety practice. | |
| Viewing a visit's to-dos | No | | | v2026.09.01 | Only one Todo Type ("Follow-up Action") exists in this tenant. | |
| Viewing and raising issues on a visit | No | | | v2026.09.01 | Only one Issue Type ("Degraded Battery Performance") is actually permitted for this test account, so it's used even though it's a slightly odd fit for a cabinet visit. | |

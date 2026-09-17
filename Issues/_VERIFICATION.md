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
| Browsing issues | No | | | v2026.09.01 | | |
| Viewing the issues board (pipeline) | No | | | v2026.09.01 | Only one pipeline ("Issue Triage") exists for issues in this tenant, so switching between pipelines wasn't demonstrated. | |
| Raising an issue | No | | | v2026.09.01 | | |
| Editing or deleting an issue | No | | | v2026.09.01 | | |
| Viewing an issue's overview page | No | | | v2026.09.01 | | |
| Resolving an issue (moving through pipeline stages) | No | | | v2026.09.01 | | |
| Updating an issue's RAG status | No | | | v2026.09.01 | Guide documents the actual (broken) behaviour — see the linked bug. | Yes: rag-status-badge-does-not-refresh-after-update.md |
| Viewing an issue's to-dos | No | | | v2026.09.01 | | |
| Viewing an issue's records | No | | | v2026.09.01 | | |

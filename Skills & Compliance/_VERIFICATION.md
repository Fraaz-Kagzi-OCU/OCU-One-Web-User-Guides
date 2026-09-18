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
| Finding your way around Skills & Compliance | No | | | v2026.09.01 | | |
| Viewing the Skills Matrix | No | | | v2026.09.01 | | |
| Viewing the compliance dashboard and drilling into missing evidence | No | | | v2026.09.01 | | |
| Uploading skill evidence | No | | | v2026.09.01 | | |
| Reviewing, editing, or approving/rejecting skill evidence | No | | | v2026.09.01 | Guide documents the intended manager-approval flow, which works as shown — but any user (not just a manager) can also do it, since the status change isn't actually role-restricted. See the linked bug. | Yes: field-engineer-can-self-approve-skill-evidence.md |
| Viewing your personal skills wallet | No | | | v2026.09.01 | Guide documents the actual behaviour, including the inflated "Missing"/"Outstanding" counts — see the linked bug. | Yes: wallet-dashboard-double-counts-missing-skill-requirements.md |

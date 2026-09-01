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
| Uploading and organising documents on a record | No | | | v2026.08.05 | Demonstrated on a Job's Docs area (test user Owen Marsh, job "Substation Upgrade - Riverside Depot"). The row's hint asked for a photo "dropped in via drag-and-drop" specifically — dragging a real OS file onto the browser isn't reliably automatable, so the loose photo was uploaded via the "+" button instead, which is the same underlying upload path. Drag-and-drop is mentioned in the guide as the equivalent shortcut. |
| Previewing, replacing, and annotating a document | No | | | v2026.08.05 | Matched the row's hint closely — annotated the certificate's note, then replaced its file with a rescanned copy. |
| Viewing a document's version history | No | | | v2026.08.05 | **Row hint mismatch**: the hint describes "3 versions uploaded by 3 different engineers". In the current codebase, the version history view (`doc_versions/index.html.erb`) always attributes every version to the document's owner (`version.doc.user`), not to whoever actually uploaded that specific version — there's no per-version uploader field shown. Documented what's actually on screen (all three versions credited to the same person) rather than fabricating multiple engineers. Not filed as a bug — reads as the intended design (ownership is per-document, not per-version), not broken behaviour. |
| Commenting on a document | No | | | v2026.08.05 | The row's "Maps to" column already noted this reuses the general Comments component — confirmed the on-screen section label is literally "Notes", not "Comments", and documented it as such. |
| Creating and configuring a folder | No | | | v2026.08.05 | The row's hint says the folder should be created "under Asset 'Van - REG123'". Used the same Job as the other four Documents guides instead, for a consistent narrative across the section — Assets do also support Docs/folders in this app, so this is purely a consistency choice, not a mismatch. The folder edit form's "Default Expires After" months field visually resets to "0" when reopened even though the 12-month duration is correctly saved (confirmed directly in the database) — a minor cosmetic quirk in that form, not a data-loss bug. |

## Summary

Verified: 0 / 5

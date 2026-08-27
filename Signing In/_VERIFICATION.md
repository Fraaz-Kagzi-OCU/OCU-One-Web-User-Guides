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

| Guide                                    | Verified | Verified by | Date       | Version     | Notes                                                                                                                                                                                                                                                               |
| ---------------------------------------- | -------- | ----------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Signing in to your account               | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | Microsoft SSO screenshots taken on production (incognito, no credentials entered — Azure AD isn't configured locally); email/password + error-state screenshots taken locally with test users Priya Nair (normal), Jordan Ellis (deactivated), Sam Ahmed (SSO-only) |
| Requesting a password reset              | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | Reset requested locally for Priya Nair; Postmark sandbox (no real email delivery)                                                                                                                                                                                   |
| Setting a new password from a reset link | Yes      | Fraaz Kagzi | 25/08/2026 | v2026.08.05 | Reset link simulated locally by reading Priya Nair's confirmation_token from the console rather than an actual email                                                                                                                                                |

## Summary

Verified: 3 / 3
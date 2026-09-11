# Settings Guide Verification — Roll-up

Settings has its own nested structure, one subfolder per Settings sub-area (`Overview/`, `Labels/`, `Journeys/`, and so on, matching each "Settings: *" section in the root `_progress.md`), because it will eventually cover ~14 sub-areas and 60+ guides — too many to track as one flat list. Each subfolder has its own `_VERIFICATION.md` (same format as every other topic's) tracking that sub-area's guides individually. This file rolls those up into one tally per sub-area, the same way the root `OCU-One-Web-User-Guides/_VERIFICATION.md` rolls up every topic folder.

## How to sync this file (prompt for Claude)

1. Find every `Settings/*/_VERIFICATION.md` (one level under this folder, one per sub-area).
2. For each one, read its `## Summary` line (`Verified: X / Y`).
3. Rebuild the **Status** table below with one row per sub-area (subfolder name, `X / Y`, most recent verification Date if `X == Y` and `Y > 0`, else blank), sorted alphabetically.
4. Recompute the **Summary**: `Sub-areas fully verified` = count where `X == Y` and `Y > 0`, out of total sub-area count; `Guides verified` = sum of `X`, out of sum of `Y`.
5. Do not touch the per-sub-area `_VERIFICATION.md` files — this file only mirrors them.
6. Update the root `OCU-One-Web-User-Guides/_VERIFICATION.md`'s "Settings" row to match this file's own Summary line (`X` verified / `Y` total) — that's how Settings' nested structure surfaces up to the top-level roll-up.

## Status

| Sub-area                | Verified | Date |
| ------------------------ | -------- | ---- |
| Access Control            | 0 / 2   |      |
| Automation                | 0 / 4   |      |
| Groups & Hierarchy        | 0 / 3   |      |
| Imports & Integrations    | 0 / 1   |      |
| Hub Administration        | 0 / 2   |      |
| Journeys                  | 0 / 1   |      |
| Labels                    | 0 / 1   |      |
| Overview                  | 0 / 1   |      |
| Pipelines & Stages        | 0 / 2   |      |
| Scheduling Reference Data | 0 / 2   |      |
| Tags & Notifications      | 0 / 2   |      |
| Type Management           | 0 / 8   |      |
| Views & Organization      | 0 / 1   |      |
| Visit Scheduling          | 0 / 2   |      |
| Workspace Builder         | 0 / 6   |      |

## Summary

Sub-areas fully verified: 0 / 15
Guides verified: 0 / 38

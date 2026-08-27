# Guide Verification — Master Summary

Rolls up every feature area's `_VERIFICATION.md` into one table. A topic's **Date** is filled in only once every guide in that topic is verified (`Verified` = `Yes` for all rows) — it's the most recent of those verification dates. A partially-verified topic has no single "done" date, so its **Date** cell stays blank. This file is generated from the per-topic files — update those first, then refresh this one to match.

## How to sync this file (prompt for Claude)

When asked to sync/update/refresh this file, do the following:

1. Find every `*/_VERIFICATION.md` one level under this repo's root (one per topic folder).
2. For each one, read its `## Status` table(s) — a topic may have several tables under `###` subheadings, but they share the same columns. Across all rows in the file:
   - `Verified` = count of rows where the **Verified** column is `Yes`.
   - `Total` = count of all rows.
3. Compute that topic's **Date**: if `Verified == Total` and `Total > 0` (every guide in the topic is verified), take the most recent value in the **Date** column across those rows. Otherwise leave **Date** blank — a partially-verified topic has no single "done" date.
4. Rebuild the **Status** table below with one row per topic (topic folder name, `Verified / Total`, Date), sorted alphabetically by topic name.
5. Recompute the **Summary**: `Topics fully verified` = number of topics where `Verified == Total` and `Total > 0`, out of the total topic count; `Guides verified` = sum of `Verified` across topics, out of sum of `Total` across topics.
6. Do not touch the per-topic `_VERIFICATION.md` files — this file only mirrors them.

## Status

| Topic                          | Verified | Date       |
| ------------------------------- | -------- | ---------- |
| Account                          | 3 / 3   | 25/08/2026 |
| Assets                           | 0 / 16  |            |
| Home Dashboard                   | 0 / 15  |            |
| Media & Attachments              | 0 / 2   |            |
| Notifications                    | 1 / 1   | 25/08/2026 |
| Product Allocations              | 0 / 7   |            |
| Products & Rates                 | 0 / 11  |            |
| Projects                         | 0 / 33  |            |
| Search & Navigation              | 0 / 2   |            |
| Signing In                       | 3 / 3   | 25/08/2026 |
| Tickets                          | 0 / 12  |            |
| Timesheets                       | 0 / 16  |            |
| Views                            | 9 / 9   | 17/08/2026 |
| Watches                          | 1 / 1   | 26/08/2026 |

## Summary

Topics fully verified: 5 / 14
Guides verified: 17 / 131
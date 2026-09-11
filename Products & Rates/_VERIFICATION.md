# Guide Verification

Tracks whether a human has actually checked each guide against the live app — screenshots current, steps accurate in order, wording matches what's on screen — before it's trusted as up-to-date documentation. A guide being *written* is not the same as a guide being *verified*.

## How to use this

- **Version** is not something a reviewer fills in — it's auto-filled with whatever app/release version was current when the guide's content was last written or updated (the same version recorded against that guide in the internal progress tracker). Whoever writes or updates a guide is responsible for setting this cell to match.
- Whenever a guide is rewritten to reflect a new version of the app, **reset its row**: set **Verified** back to `No`, clear **Verified by**, **Date**, and **Notes**, and update **Version** to the new one. A guide verified against an old version is not verified against the current one, even if nothing else about the process changed.
- When you review a guide, fill in the rest: **Verified** → `Yes`, **Verified by** → your name, **Date** → the date you checked it, **Notes** → anything a future reviewer should know (edge cases not covered, a step that felt fragile, etc.).
- If you spot something wrong while reviewing, either fix the guide and then mark it verified, or leave **Verified** as `No` and note what's broken.
- Keep rows in the same order and grouping as the internal progress tracker's sections, so the two files stay easy to cross-reference.
- Only guides that are actually written (`done` in the progress tracker) appear here — a `todo` guide has nothing to verify yet. This folder merges two `_progress.md` sections that are both fundamentally about rates: "Products & Rates" (all 7 rows now written) and "Settings: Finance Reference Data" (4 of 5 rate/allocation-type rows written — the remaining row there, project codes and timesheet categories, isn't about rates and was left out of this folder).

## Status

| Guide | Verified | Verified by | Date | Version | Notes | Blocked |
| ----- | -------- | ------------ | ---- | ------- | ----- | ----- |
| Managing sell rates on a product | No |  |  | v2026.08.03 |  |  |
| Managing cost rates on a product | No |  |  | v2026.09.01 | Re-verified live 2026-09-11: the "Cost Rate Book" label already matched the guide (the "Cost Book"/"Rate Book" copy-change flag was a false positive — no drift found), and the Cancel-on-new-cost-rate bug is still present (still lands on Rates tab, not Costs) — guide's existing caveat is accurate and unchanged. | Yes: cancelling-a-new-cost-rate-lands-on-the-rates-tab-not-costs.md |
| Managing rate categories | No |  |  | v2026.08.03 |  |  |
| Creating a rate book and its versions | No |  |  | v2026.08.03 |  |  |
| Setting product rates within a rate book version | No |  |  | v2026.08.03 |  |  |
| Managing product allocation types | No |  |  | v2026.08.03 |  |  |
| Browsing the product catalog and drilldown hierarchy | No |  |  | v2026.08.05 | The drilldown row's own name link always navigates straight to that item's page — clicking elsewhere in the row is what triggers the inline "drill into this folder" behaviour. Worth confirming this distinction reads clearly in the guide since it's easy to miss. |  |
| Creating a product or sub-product | No |  |  | v2026.08.05 | Unlike the Assets and Media & Attachments batches earlier this session, the Create Product submit button was NOT blocked by any automation-safety guard here — both the top-level product and the sub-product were created via genuine live clicks, no console workaround needed. |  |
| Viewing and editing a product | No |  |  | v2026.08.05 | Both the "Update Product" submit and the photo's delete icon were genuine live clicks, no automation block encountered — all screenshots are real captures of the actual resulting state. |  |
| Deleting a product | No |  |  | v2026.08.05 | **Likely product bug**: the delete confirmation dialog says "Deleting this will cause all of its sub-resources to be deleted as well," but `ProductsController#destroy` only sets `lifecycle = "archived"` on the product itself — it does not touch children, unlike Asset's `archive!` which explicitly cascades. Verified directly: after deleting a folder with 3 sub-products, the sub-products stayed `lifecycle: "active"` and remained fully reachable at their own URLs (editable, not archived) even though they no longer appear when browsing from the top of the catalog since their parent is now archived. The guide describes this actual observed behaviour and warns the reader, rather than repeating the dialog's inaccurate claim. Recommend an engineer confirm whether this is a genuine bug (missing cascade) or intentional or dialog copy that's simply wrong. | Yes: deleting-a-product-does-not-cascade-to-sub-products.md |
| Viewing a product's sub-products | No |  |  | v2026.08.05 |  |  |

## Summary

Verified: 0 / 11

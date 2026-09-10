# Cancelling a new cost rate lands on the Rates tab, not Costs

**Status:** Open
**Found in:** [Managing cost rates on a product](../Products%20%26%20Rates/Managing%20cost%20rates%20on%20a%20product.md)
**Area:** Products & Rates

## Description

From a product's **Costs** tab, clicking **Add New Cost → Add Cost to `<cost book>`** opens the "Create a new Rate" form (correctly labelled with cost-specific copy — "Cost Rate overview", "Cost Rate Book", etc.). Clicking **Never mind** (Cancel) on that form does not return to the Costs tab it was opened from — it lands on the **Rates** (sell) tab instead. Minor navigation papercut, not data loss.

## Preconditions

- A product with at least one cost book configured.

## Steps to Reproduce

1. Open a product and go to its **Costs** tab.
2. Click **Add New Cost → Add Cost to `<cost book>`**.
3. On the "Create a new Rate" form (cost-specific copy), click **Never mind** (Cancel).

## Expected Result

The form closes and returns to the **Costs** tab, where the action was started from.

## Actual Result

The form closes but lands on the **Rates** (sell) tab instead of Costs.

## Screenshot or Video

![Clicking "Add New Cost" from the Costs tab, filling in a cost rate, then clicking Never mind — landing on the Rates tab instead of back on Costs](attachments/managing-cost-rates-on-a-product/cost-rate-cancel-returns-to-rates-tab.gif)

## Root cause (brief)

`RatesController#new` (`app/controllers/rates_controller.rb`) decides where Cancel should go with `source = request.path.include?("/costs") ? :cost : :price`. A dedicated route exists for this (`resources :rates, path: :costs, as: :costs`, `config/routes.rb`), which would make the request path contain `/costs` — but the Costs tab's "Add New Cost" link (`app/views/rates/costs.html.erb`) still builds its `href` with `new_product_rate_path`, not the costs-specific route helper. So the request path is always `/products/:id/rates/new`, `request.path.include?("/costs")` is always false, and `@cancel_href` always resolves to the Rates tab regardless of which tab you started from.

## 2026-09-10 recheck

A code diff since `v2026.08.03` suggested `RatesController`/`rates/new.html.erb` now set `@cancel_href` to the Costs tab for cost rates. Re-tested live against product "HV Cable per metre" (id 32) on the running dev app: clicking **Add New Cost** from the Costs tab, then **Never mind** on the new-rate form, still lands on `/products/32/tabs/rates` — **bug still present**. The diff likely only touched part of the fix (e.g. `@cancel_href`'s logic) without fixing the "Add New Cost" link itself still pointing at `new_product_rate_path` rather than the costs-scoped route, per the root cause above — so `request.path.include?("/costs")` is still never true. Left as `Open`.

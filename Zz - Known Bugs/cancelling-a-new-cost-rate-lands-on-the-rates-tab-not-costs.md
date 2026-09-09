# Cancelling a new cost rate lands on the Rates tab, not Costs

**Status:** Open
**Found in:** [Managing cost rates on a product](../Products%20%26%20Rates/Managing%20cost%20rates%20on%20a%20product.md)
**Area:** Products & Rates

## What happens

From a product's **Costs** tab, clicking **Add New Cost → Add Cost to `<cost book>`** opens the "Create a new Rate" form (correctly labelled with cost-specific copy — "Cost Rate overview", "Cost Rate Book", etc.). Clicking **Never mind** (Cancel) on that form does not return to the Costs tab it was opened from — it lands on the **Rates** (sell) tab instead.

## Root cause (brief)

`RatesController#new` (`app/controllers/rates_controller.rb`) decides where Cancel should go with `source = request.path.include?("/costs") ? :cost : :price`. A dedicated route exists for this (`resources :rates, path: :costs, as: :costs`, `config/routes.rb`), which would make the request path contain `/costs` — but the Costs tab's "Add New Cost" link (`app/views/rates/costs.html.erb`) still builds its `href` with `new_product_rate_path`, not the costs-specific route helper. So the request path is always `/products/:id/rates/new`, `request.path.include?("/costs")` is always false, and `@cancel_href` always resolves to the Rates tab regardless of which tab you started from.

## Impact

Anyone adding a cost rate and changing their mind gets dropped on the wrong tab (Rates instead of Costs) — a minor but consistent navigation papercut, not data loss.

## Evidence

![Clicking "Add New Cost" from the Costs tab, filling in a cost rate, then clicking Never mind — landing on the Rates tab instead of back on Costs](attachments/managing-cost-rates-on-a-product/cost-rate-cancel-returns-to-rates-tab.gif)

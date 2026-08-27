# Bulk-applying a rate modifier to all allocated products

If a job or project needs an across-the-board price adjustment — like an out-of-hours surcharge — you don't have to open every single allocated product and adjust it by hand. **Modify all Products** applies the same adjustment to everything at once.

## Where to find it

On a Products tab with several products already allocated, click **Modify all Products** in the top-right corner.

![A Products tab with 12 allocated products across 4 items, and the Modify all Products button highlighted](attachments/bulk-applying-a-rate-modifier-to-all-allocated-products/01-products-tab-before-annotated.jpg)

## Applying the modifier

A dialog titled **Uplift or Discount** opens, with an important warning worth reading carefully:

![The Uplift or Discount dialog with its heads-up warning and an empty Modifier field](attachments/bulk-applying-a-rate-modifier-to-all-allocated-products/02-modal-empty.jpg)

It explains that this will apply to *everything* in the list, with two exceptions: anything that already has a modifier on it, and anything priced from a different rate book version than this record uses, are both left untouched.

Click the **Modifier** field to see what's available — here, a ready-made **"Out of Hours"** adjustment of **+15.0%**.

![The Modifier dropdown open, showing "(MOD-OOH) Out of Hours: +15.0%" as an option](attachments/bulk-applying-a-rate-modifier-to-all-allocated-products/03-modifier-dropdown-open.jpg)

Select it, and click **Modify All Product Allocations**.

![The dialog with "Out of Hours: +15.0%" selected, ready to submit](attachments/bulk-applying-a-rate-modifier-to-all-allocated-products/04-modifier-selected.jpg)

## Seeing the result

Every eligible row on the Products tab now shows the modifier underneath its normal rate, along with the extra amount it adds per unit, and the **Total Planned Price** column breaks the figure down into the original amount plus the top-up:

![The Products tab afterwards: each row shows "MOD-OOH +15.0%: £0.48" under its rate, and a Total Planned Price like "£11.04" broken down as "£9.60 + £1.44"](attachments/bulk-applying-a-rate-modifier-to-all-allocated-products/05-after-applying-modifier-annotated.jpg)

## Other things to know

- This only works on products that already have a proper rate book price behind them. If a product's price was typed in by hand (rather than picked up from the rate book), there's nothing for the modifier to apply on top of, so it's skipped — the row will look exactly as it did before.
- If you need to remove or change the modifier on just one allocation afterwards, that's done from the allocation's own details rather than through this bulk action.
- The available modifiers here come from whatever's been set up in your rate book — if you don't see the one you need, ask whoever manages your rate books to add it.

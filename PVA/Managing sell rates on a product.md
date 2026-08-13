# Managing sell rates on a product

This is the same feature as *Setting product rates within a rate book version*, but starting from the product instead of the rate book — handy when you're focused on one product and want to see (or set) its price across every price book at once.

## Where to find it

Open a product and click its **Rates** tab. Prices are grouped by rate book, with a separate section for anything **Inactive**. With nothing set up yet, the groups are empty:

![The empty Rates tab on a product, with the Add New Rate button highlighted](attachments/managing-sell-rates-on-a-product/01-rates-tab-empty-annotated.jpg)

## Adding a sell rate

Click **Add New Rate**. Since a product can be priced under more than one rate book, you're asked which one this new price belongs to:

![The Add New Rate dropdown, listing "Add Rate to Default" and "Add Rate to 2026 Wind Rates"](attachments/managing-sell-rates-on-a-product/02-add-rate-dropdown.jpg)

Choose one, and the same form from *Setting product rates within a rate book version* opens — except this time the **Product** is already fixed, and you instead choose which **Rate Book Version** the price belongs to:

![The "Create a new Rate" form, empty, showing the Rate Book fixed to "2026 Wind Rates" and a Rate Book Version dropdown](attachments/managing-sell-rates-on-a-product/03-new-rate-form-empty.jpg)

Fill in a **Name**, the **Price**, and tick **Default** if it's the first (or main) price for this product on this rate book:

![The form filled in: Name "HV Cable per metre", Price £14.50, Rate Book Version "v1", Default ticked](attachments/managing-sell-rates-on-a-product/04-new-rate-form-filled.jpg)

Click **Create Rate**, and it appears on the Rates tab, grouped under its rate book with the version and Default status shown alongside it:

![The Rates tab showing "HV Cable per metre" under "2026 Wind Rates", tagged v1 and Default](attachments/managing-sell-rates-on-a-product/05-rates-tab-after.jpg)

## Editing a rate

Click a rate's name to open **Change this Rate**, where you can update the name, price, cost, Default status, or even move it to a different version of the same rate book:

![The "Change this Rate" form pre-filled with the existing values](attachments/managing-sell-rates-on-a-product/06-edit-rate-form.jpg)

## Other things to know

- The toggle next to each rate switches it between active and inactive without deleting it — useful for retiring an old price while keeping a record of what it was.
- This tab only shows **Price** rate books. To set what this product costs you internally, use the **Costs** tab instead — covered in *Managing cost rates on a product*.

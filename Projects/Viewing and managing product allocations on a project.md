# Viewing and managing product allocations on a project

Every project has its own **Products** tab, where you plan out the materials and products the whole project needs — separate from anything allocated to individual jobs or tasks underneath it. This is where the overall plan for "what materials does this project need" lives.

## Where to find it

Open a project and click the **Products** tab in the row of tabs across the top.

![A project's Overview tab before switching to the Products tab](attachments/viewing-and-managing-product-allocations-on-an-order/01-project-overview.jpg)

With nothing allocated yet, the tab shows an empty table with a search box and two buttons: **+ Product** and **Modify all Products**.

![An empty Products tab on a project](attachments/viewing-and-managing-product-allocations-on-an-order/02-products-tab-empty.jpg)

**Good to know:** unlike a task's Products tab, a project's Products tab has no "Allocate from" option — a project sits at the top, so there's nothing above it to pull materials from (unless it has a parent project or an active estimate, in which case that option appears too).

## Adding a product to the project's plan

Click **+ Product**, then choose the type of allocation (here, **Default**).

![The + Product dropdown showing "Default" as the allocation type](attachments/viewing-and-managing-product-allocations-on-an-order/03-add-product-dropdown.jpg)

This opens a searchable list of everything in the product catalogue, showing the unit price and existing quantity already allocated elsewhere for each one.

![The "Add a Product" search list showing the catalogue](attachments/viewing-and-managing-product-allocations-on-an-order/04-add-product-search-list.jpg)

Pick a product, and you're asked to set its quantity, status, and — if no rate book price exists for it — a price and cost per unit to use instead.

![The "Add a Product" form filled in for Ducting 100mm: 200 metres at £12.50 per unit](attachments/viewing-and-managing-product-allocations-on-an-order/05-add-product-form-filled.jpg)

Click **Create Product Allocation**, and it appears as a new row on the Products tab:

![The Products tab showing Ducting 100mm allocated at 200 metres](attachments/viewing-and-managing-product-allocations-on-an-order/06-ducting-allocation-created.jpg)

Repeating this for a second product (15 units of Chamber Cover) gives a table with both, plus a **Totals** row summing the price and cost across everything:

![The Products tab with both Ducting 100mm and Chamber Cover allocated, with totals](attachments/viewing-and-managing-product-allocations-on-an-order/07-both-allocations-created.jpg)

## Reading the table

Each row shows:

- **Product** / **Product Category** / **Product Type** — what it is and how it's classified.
- **Planned Quantity** — how much is currently planned.
- **Planned Quantity Change** — the original quantity and how much it's changed by, once it has changed.
- **Available** — how much of this is still free to hand out to tasks underneath the project.
- **Actual Quantity** — how much has actually been recorded as used, with a **+** to log a new record.
- **Invoiced Quantity** — how much has made it onto an invoice.
- **Rates** / **Costs** — sell and cost price per unit.
- **Total Planned Price** / **Total Planned Cost** — the planned quantity multiplied by its rate.
- **Status**, **Owner**, and (when it can still be removed) a delete icon.

## Viewing and editing an allocation's details

Click a product's name to open its full details — including the **Product Allocation Map**, which shows the project's own planned quantity and how much is still free for tasks to draw on. Click **Edit** to change its title, category, or an uplift/discount modifier.

![The Product Allocation detail view with the Edit button](attachments/viewing-and-managing-product-allocations-on-an-order/09-allocation-detail-view.jpg)

## Changing the planned quantity

Quantity changes work a little differently to protect a record of *why* a plan moved. In the **Quantities** section of the detail view, click **Change Planned Quantity**, then enter the new figure and a reason:

![The "Create a new Planned Quantity Change" form, filled in with the new quantity and a reason](attachments/viewing-and-managing-product-allocations-on-an-order/10-change-planned-quantity-filled.jpg)

Once submitted, the row updates immediately, and the **Planned Quantity Change** column shows exactly what changed — here, the original 200 metres in brackets, with the +20 increase next to it:

![The Products tab row after the change, showing 220 metres planned and "(200) +20"](attachments/viewing-and-managing-product-allocations-on-an-order/11-after-quantity-change.jpg)

## Recording actual usage

Click the small **+** next to **Actual Quantity** on any row to log how much has actually been used — who completed the work, when, how much, and an optional note or photo.

![The "Create a new Recording" form, filled in with who completed the work, when, and the quantity](attachments/viewing-and-managing-product-allocations-on-an-order/12-record-actual-usage-filled.jpg)

Once saved, the row shows the planned figure next to the actual one, so you can see the plan against reality at a glance:

![Both rows showing Planned and Actual quantities side by side, with the quantity-change history visible](attachments/viewing-and-managing-product-allocations-on-an-order/13-final-state-both-rows.jpg)

## Removing an allocation

If you scroll the table across, there's a small trash icon at the end of each row.

![The Owner column with a delete icon visible on one row but not the other](attachments/viewing-and-managing-product-allocations-on-an-order/14-owner-and-delete-column.jpg)

**Good to know:** once actual usage has been recorded against an allocation, its delete icon disappears — you can no longer remove it, since there's now a real record of work done against it tied to it. Only allocations with nothing recorded against them yet can be deleted this way.

Clicking the trash icon asks you to confirm:

![The delete confirmation dialog: "Are you sure you want to delete this?"](attachments/viewing-and-managing-product-allocations-on-an-order/15-delete-confirm-dialog.jpg)

Confirming removes it from the table immediately:

![The Products tab after removing Ducting 100mm, leaving only Chamber Cover](attachments/viewing-and-managing-product-allocations-on-an-order/16-after-removing-ducting.jpg)

## Other things on this tab

- **Modify all Products** lets you apply a rate adjustment across everything allocated to the project at once, rather than one row at a time.

This is a less common action and worth exploring separately if you need it.

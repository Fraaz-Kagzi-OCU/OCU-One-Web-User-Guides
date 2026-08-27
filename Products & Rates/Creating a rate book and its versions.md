# Creating a rate book and its versions

## What rate books and cost books actually are

A **rate book** is a price list — a named collection of prices for your products, used to work out what to charge (or what something costs you) on jobs, projects, estimates, and everything else covered elsewhere in these guides.

There's no separate "cost book" feature to go and find — a cost book is just a rate book with its **Source** set to **Cost** instead of **Price**. A Price rate book holds what you sell things for; a Cost rate book holds what things cost you internally (materials, labour, whatever you're tracking). Everything in this guide — creating it, adding versions to it — works identically for both; the only difference is that single Source setting.

Each rate book can also have several **versions** — think of a version as a dated snapshot of the whole price list, so you can update prices for a new year or contract without losing the old figures. Once a version exists, prices get attached to it rather than to the rate book directly (covered in *Setting product rates within a rate book version*).

## Creating a rate book

Go to **Settings > Rate Books** and click **+ Rate Book**. A form opens for the new rate book's details:

![The "new rate book" form: Name, Source, and a Default checkbox](attachments/creating-a-rate-book-and-its-versions/01-new-rate-book-modal.jpg)

Give it a **Name**, choose a **Source** — **Price** for a normal sell-price book, **Cost** for one that tracks internal costs — and decide whether it should be your **Default Rate Book** (the one used automatically unless something specifies otherwise).

![The Source dropdown open, showing "Price" and "Cost" as the two options](attachments/creating-a-rate-book-and-its-versions/09-source-dropdown-open.jpg)

Here's a Price rate book called "2026 Wind Rates" being created, left as not the default:

![The new rate book form filled in: Name "2026 Wind Rates", Source Price, Default unchecked](attachments/creating-a-rate-book-and-its-versions/02-new-rate-book-filled.jpg)

Click **Create Rate Book**, and it appears in the list alongside anything else already there:

![The Rate Books list showing the newly created "2026 Wind Rates"](attachments/creating-a-rate-book-and-its-versions/03-rate-books-list-after-create-annotated.jpg)

## Adding a version

Open the new rate book — with nothing set up yet, it shows **No Versions**.

![The empty rate book page: "No Versions", with a New Version button](attachments/creating-a-rate-book-and-its-versions/04-rate-book-show-empty.jpg)

Click **New Version** (or **Add new Version** from the top of the page). Give it a **Name**, a **Version Number**, and tick **Default** if this should be the version used unless something specifies a different one — worth doing for the very first version you create.

![The new version form filled in: Name "v1", Version Number 1, Default ticked](attachments/creating-a-rate-book-and-its-versions/06-new-version-filled.jpg)

Click **Create Version**, and it's added to the rate book:

![The rate book page showing version "v1" at 1.0](attachments/creating-a-rate-book-and-its-versions/07-rate-book-with-v1-annotated.jpg)

**Good to know:** each new version's number has to be higher than the last one on that rate book — this keeps them in a clear, ascending order over time. Add a second version the same way, this time leaving Default unticked so "v1" stays the one used by default:

![The rate book page now showing both "v1" (1.0) and "v2" (2.0)](attachments/creating-a-rate-book-and-its-versions/08-rate-book-with-both-versions.jpg)

## Creating a cost book

The same process creates a cost book — just pick **Cost** as the Source instead:

![The new rate book form with Name "Internal Costs 2026" and Source set to Cost](attachments/creating-a-rate-book-and-its-versions/10-cost-rate-book-filled.jpg)

It gets its own version in exactly the same way as any other rate book:

![The "Internal Costs 2026" cost book with its first version, v1 at 1.0](attachments/creating-a-rate-book-and-its-versions/11-cost-rate-book-with-version.jpg)

## Other things to know

- Only one rate book can be your tenant-wide default at a time — making a new one default automatically un-defaults whichever one held that spot before.
- Creating the rate book and its versions doesn't add any prices yet — that's the next step, covered in *Setting product rates within a rate book version* and *Managing sell rates on a product* / *Managing cost rates on a product*.

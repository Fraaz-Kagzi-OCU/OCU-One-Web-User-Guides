# Assets — Overview

**Assets** are the physical things your organisation tracks and maintains — cabinets, poles, batteries, vehicles, equipment, anything with its own service history. This guide explains how the pieces fit together, before you dive into the detailed guides for each part.

## The core pieces

An **Asset** is a single physical item, of a particular **Asset Type** (set up in advance by an admin — Battery, Street Cabinet, Pole, Fuse Board, and so on), each with a **Name**, an auto-generated **Reference**, and optionally a **Site**, an **NFC Identifier**, and a **Description**.

Assets can nest inside one another as **sub-assets** — a cabinet might contain several poles, and a pole might have its own battery fitted to it — forming a hierarchy that goes as many levels deep as it needs to.

Where an asset's type is tracked through a lifecycle, it sits on a **Pipeline** and moves through **stages** — for example New, In Service, and Decommissioned — the same way a job or ticket does.

Beyond its own details, an asset can accumulate: **Visits** (trips out to inspect or check on it, optionally generated automatically from a **Visit Plan**), **Jobs** (booked work carried out via one of those visits), **Todos** (small tracked tasks), **Records** (structured documentation like certificates), and **Issues** (flagged problems needing resolution).

## Why this matters

Treating physical things as tracked records, rather than just names on a spreadsheet, is what makes it possible to:

- **See the real physical relationships** — which parts belong to which, via the sub-asset hierarchy, instead of everything sitting in one flat, disconnected list.
- **Stay ahead of maintenance** — a visit plan generates its own recurring visits, so inspections happen on schedule without anyone having to remember to book them one at a time.
- **Know an asset's full history at a glance** — every job it's been part of, every issue raised against it, and every todo still outstanding, all in one place on the asset itself.
- **Track lifecycle status** — a pipeline shows whether an asset is still new, actively in service, or decommissioned, without digging through its activity log.

## The end-to-end flow

It starts with **finding your way in**. The assets landing page is the entry point — see [Using the assets landing page](Using%20the%20assets%20landing%20page.md) — from which you can browse existing assets in two ways: the [Browsing assets in the drilldown tree view](Browsing%20assets%20in%20the%20drilldown%20tree%20view.md) for exploring the hierarchy one level at a time, or [Browsing assets in the table (list) view](Browsing%20assets%20in%20the%20table%20%28list%29%20view.md) for a flat, sortable list across every type at once. Where a pipeline is configured, [Viewing the assets board (pipeline)](Viewing%20the%20assets%20board%20%28pipeline%29.md) gives a third, Kanban-style view grouped by stage.

Adding a new asset is covered in [Creating an asset](Creating%20an%20asset.md) — pick a type, fill in its details, and you land on its own overview page. From there, [Viewing an asset's overview page](Viewing%20an%20asset's%20overview%20page.md) covers everything that page brings together, and [Editing or deleting an asset](Editing%20or%20deleting%20an%20asset.md) covers changing its details later or archiving it (and everything nested inside it) for good.

Once an asset exists, **building out its structure and history** covers most of what you'll do next: [Viewing and adding sub-assets](Viewing%20and%20adding%20sub-assets.md) for nesting smaller parts underneath it; [Viewing an asset's Visits tab](Viewing%20an%20asset's%20Visits%20tab.md) and [Scheduling a maintenance visit plan for an asset](Scheduling%20a%20maintenance%20visit%20plan%20for%20an%20asset.md) (with [Removing a visit plan from an asset](Removing%20a%20visit%20plan%20from%20an%20asset.md) when a schedule no longer applies) for keeping on top of inspections; [Viewing an asset's linked jobs](Viewing%20an%20asset's%20linked%20jobs.md) for the booked work that's touched it; and [Viewing an asset's to-dos](Viewing%20an%20asset's%20to-dos.md), [Viewing an asset's records](Viewing%20an%20asset's%20records.md), and [Viewing and raising issues against an asset](Viewing%20and%20raising%20issues%20against%20an%20asset.md) for everything else that can be tracked against it.

Finally, where an asset's type has a lifecycle, [Moving an asset through pipeline stages](Moving%20an%20asset%20through%20pipeline%20stages.md) covers updating where it currently stands — reflected immediately on both the asset itself and the pipeline board.

## The flow at a glance

```mermaid
flowchart LR
    A["Find or Create"] --> B["Build Out Structure"]
    B --> C["Track Activity"]
    C --> D["Move Through Pipeline"]
```

- **Find or Create** — browse via the drilldown tree, table, or pipeline board, or create a brand new asset.
- **Build Out Structure** — nest sub-assets underneath it, and attach a visit plan for recurring inspections.
- **Track Activity** — visits, the jobs they lead to, todos, records, and issues all accumulate against the asset over time.
- **Move Through Pipeline** — where a lifecycle is configured, move the asset from one stage to the next as its status changes.

Not every asset needs a pipeline, sub-assets, or a visit plan — a standalone asset with none of these is just a name, a type, and a set of empty tabs waiting to be used. But the full flow above is there for anything with a more involved lifecycle to track.

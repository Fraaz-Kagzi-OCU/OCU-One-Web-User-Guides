# User Guides

This repo is an end-user-facing documentation project for a web app — how-to guides written for the people who use the app day to day, not for developers. The end goal is full coverage: a guide for every user-facing feature and workflow in the app, not just a handful of isolated topics. Each guide is a single self-contained `.md` file with numbered steps and screenshots stored alongside it under `attachments/<guide-slug>/`.

Every guide listed below still needs a human to check it against the live app before it's trusted. Verification is tracked per feature area. Every feature area gets its own `_VERIFICATION.md` as it's added.

## Roadmap

The app has roughly 390 user-facing workflows worth documenting in total. This repo currently covers four complete areas — Planned vs Actual / commercial product allocations (16 guides), Timesheets (16 guides), List Views & Filtering (9 guides), and Tickets (12 guides) — each end to end, from setup through to seeing the results. The plan is to keep working through the rest of the app area by area until every workflow has a guide, verified against the live app, kept current as the app changes.

## Contents

### Planned vs Actual (PVA) — Commercial / Product Allocations
Start with the overview, then follow the flow: set up rates → allocate → adjust the plan → record what happened → view the results.

- [Overview — what Planned vs Actual means and how it all fits together](PVA/_Planned%20vs%20Actual%20-%20Overview.md)

**Setting up rates & categories**
- [Creating a rate book and its versions](PVA/Creating%20a%20rate%20book%20and%20its%20versions.md)
- [Setting product rates within a rate book version](PVA/Setting%20product%20rates%20within%20a%20rate%20book%20version.md)
- [Managing sell rates on a product](PVA/Managing%20sell%20rates%20on%20a%20product.md)
- [Managing cost rates on a product](PVA/Managing%20cost%20rates%20on%20a%20product.md)
- [Managing product allocation types](PVA/Managing%20product%20allocation%20types.md)
- [Managing rate categories](PVA/Managing%20rate%20categories.md)

**Allocating**
- [Allocating products or materials to a job, project, estimate, or variation](PVA/Allocating%20products%20or%20materials%20to%20a%20job%2C%20project%2C%20estimate%2C%20or%20variation.md)

**Adjusting the plan**
- [Raising a planned quantity change on an allocation](PVA/Raising%20a%20planned%20quantity%20change%20on%20an%20allocation.md)
- [Viewing planned quantity change history](PVA/Viewing%20planned%20quantity%20change%20history.md)
- [Editing or removing a product allocation](PVA/Editing%20or%20removing%20a%20product%20allocation.md)
- [Copying or transferring allocated products between records](PVA/Copying%20or%20transferring%20allocated%20products%20between%20records.md)
- [Bulk-applying a rate modifier to all allocated products](PVA/Bulk-applying%20a%20rate%20modifier%20to%20all%20allocated%20products.md)

**Recording what happened**
- [Recording actual product usage against an allocation](PVA/Recording%20actual%20product%20usage%20against%20an%20allocation.md)

**Seeing the results**
- [Viewing and managing product allocations on a project](PVA/Viewing%20and%20managing%20product%20allocations%20on%20a%20project.md)
- [Managing a task's product allocations tab](PVA/Managing%20a%20task%27s%20product%20allocations%20tab.md)
- [Viewing a project's commercial stats dashboard](PVA/Viewing%20an%20projects%20commercial%20stats%20dashboard.md)

### Timesheets


- [Overview — what Timesheets, Timesheet Groups, and Timesheet Exports mean and how they fit together](Timesheets/_Timesheets%20-%20Overview.md)

**Clocking in & tracking your own time**
- [Clocking in and starting a shift](Timesheets/Clocking%20in%20and%20starting%20a%20shift.md)
- [Ending a shift and confirming hours worked](Timesheets/Ending%20a%20shift%20and%20confirming%20hours%20worked.md)
- [Logging a break or other shift event](Timesheets/Logging%20a%20break%20or%20other%20shift%20event.md)
- [Viewing and editing an individual timesheet](Timesheets/Viewing%20and%20editing%20an%20individual%20timesheet.md)

**Reviewing your team's timesheets**
- [Browsing all timesheets in the table view](Timesheets/Browsing%20all%20timesheets%20in%20the%20table%20view.md)
- [Approving or denying timesheets for your team (weekly review grid)](Timesheets/Approving%20or%20denying%20timesheets%20for%20your%20team%20%28weekly%20review%20grid%29.md)
- [Adding or editing a timesheet entry from the review grid](Timesheets/Adding%20or%20editing%20a%20timesheet%20entry%20from%20the%20review%20grid.md)
- [Rounding or splitting a timesheet entry during review](Timesheets/Rounding%20or%20splitting%20a%20timesheet%20entry%20during%20review.md)

**Viewing the shift timeline**
- [Viewing the company shift timeline (Gantt/scheduler)](Timesheets/Viewing%20the%20company%20shift%20timeline%20%28Gantt-scheduler%29.md)
- [Inspecting and updating a shift event from the timeline](Timesheets/Inspecting%20and%20updating%20a%20shift%20event%20from%20the%20timeline.md)

**Pre-booking and reviewing timesheet groups**
- [Creating and managing a timesheet group](Timesheets/Creating%20and%20managing%20a%20timesheet%20group.md)
- [Reviewing a timesheet group and approving or denying its timesheets](Timesheets/Reviewing%20a%20timesheet%20group%20and%20approving%20or%20denying%20its%20timesheets.md)
- [Browsing and filtering timesheet groups](Timesheets/Browsing%20and%20filtering%20timesheet%20groups.md)

**Exporting timesheets for payroll**
- [Creating a timesheet export for payroll](Timesheets/Creating%20a%20timesheet%20export%20for%20payroll.md)
- [Reviewing an export and bulk-updating its timesheet statuses](Timesheets/Reviewing%20an%20export%20and%20bulk-updating%20its%20timesheet%20statuses.md)
- [Browsing and filtering timesheet exports](Timesheets/Browsing%20and%20filtering%20timesheet%20exports.md)

### List Views & Filtering

- [Overview — what filters, columns, and saved views mean and how they fit together](Views/_Views%20-%20Overview.md)

**Filtering and columns**
- [Filtering a list view by a field](Views/Filtering%20a%20list%20view%20by%20a%20field.md)
- [Removing or updating an active filter](Views/Removing%20or%20updating%20an%20active%20filter.md)
- [Customising which columns appear in a list-table view](Views/Customising%20which%20columns%20appear%20in%20a%20list-table%20view.md)

**Saved views**
- [Saving current filters-columns as a new personal view](Views/Saving%20current%20filters-columns%20as%20a%20new%20personal%20view.md)
- [Renaming and updating an existing saved view](Views/Renaming%20and%20updating%20an%20existing%20saved%20view.md)
- [Switching between saved views on a list screen](Views/Switching%20between%20saved%20views%20on%20a%20list%20screen.md)
- [Favouriting a saved view](Views/Favouriting%20a%20saved%20view.md)
- [Managing all your saved views (My Views)](Views/Managing%20all%20your%20saved%20views%20%28My%20Views%29.md)

**Admin**
- [Managing saved views (admin)](Views/Managing%20saved%20views%20%28admin%29.md)

### Tickets
Start with the overview, then follow the flow: browse groups & types → raise a ticket → work the ticket → track it via pipeline → your personal view.

- [Overview — what ticket groups, types, and pipelines mean and how they fit together](Tickets/_Tickets%20-%20Overview.md)

**Browsing tickets**
- [Browsing the ticket type catalog (ticket groups landing page)](Tickets/Browsing%20the%20ticket%20type%20catalog.md)
- [Viewing ticket types within a ticket group](Tickets/Viewing%20ticket%20types%20within%20a%20ticket%20group.md)
- [Viewing the tickets list/table](Tickets/Viewing%20the%20tickets%20list.md)

**Working a ticket**
- [Creating a new ticket](Tickets/Creating%20a%20new%20ticket.md)
- [Viewing ticket details (main tab)](Tickets/Viewing%20ticket%20details.md)
- [Editing a ticket](Tickets/Editing%20a%20ticket.md)
- [Managing ticket todos](Tickets/Managing%20ticket%20todos.md)
- [Downloading or previewing a ticket PDF](Tickets/Downloading%20or%20previewing%20a%20ticket%20PDF.md)
- [Deleting a ticket](Tickets/Deleting%20a%20ticket.md)

**Pipeline & board views**
- [Moving a ticket's pipeline stage](Tickets/Moving%20a%20ticket%27s%20pipeline%20stage.md)
- [Viewing the tickets pipeline (kanban) board](Tickets/Viewing%20the%20tickets%20pipeline%20%28kanban%29%20board.md)

**Your own tickets**
- [Viewing "My Tickets" (personal account tab)](Tickets/Viewing%20My%20Tickets.md)

## Folder layout

```
OCU-One-Web-User-Guides/
├── README.md              this file
├── _progress.md           internal tracker: every planned guide + its status
├── PVA/                    Planned vs Actual guides
│   ├── _Planned vs Actual - Overview.md
│   ├── _VERIFICATION.md    verification status for PVA guides
│   ├── ...guide files
│   └── attachments/         
├── Timesheets/             Timesheets guides
│   ├── _Timesheets - Overview.md
│   ├── _VERIFICATION.md    verification status for Timesheets guides
│   ├── ...guide files
│   └── attachments/        
├── Views/                  List Views & Filtering guides
│   ├── _Views - Overview.md
│   ├── _VERIFICATION.md    verification status for Views guides
│   ├── ...guide files
│   └── attachments/        
└── Tickets/                Tickets guides
    ├── _Tickets - Overview.md
    ├── _VERIFICATION.md    verification status for Tickets guides
    ├── ...guide files
    └── attachments/        
```

## Conventions

- **Naming**: guide filenames are the plain-English title of the workflow (e.g. `Raising a planned quantity change on an allocation.md`).
- **Screenshots**: live under `attachments/<slugified-guide-name>/`, numbered in the order they're referenced (`01-...`, `02-...`).
- **Cross-links**: guides link to each other with `[[Guide Name]]` wiki-style links (see the PVA overview for examples).

# User Guides

This repo is an end-user-facing documentation project for a web app — how-to guides written for the people who use the app day to day, not for developers. The end goal is full coverage: a guide for every user-facing feature and workflow in the app, not just a handful of isolated topics. Each guide is a single self-contained `.md` file with numbered steps and screenshots stored alongside it under `attachments/<guide-slug>/`.

Every guide listed below still needs a human to check it against the live app before it's trusted. Verification is tracked per feature area. Every feature area gets its own `_VERIFICATION.md` as it's added.

## Roadmap

The app has roughly 399 user-facing workflows worth documenting in total. This repo currently covers twenty-three complete areas — Projects (33 guides), Products & Rates (11 guides), List Views & Filtering (9 guides), Product Allocations (7 guides), Timesheets (17 guides), Tickets (12 guides), Signing In (3 guides), Account (3 guides), Home Dashboard (15 guides), Notifications (1 guide), Search & Navigation (2 guides), Assets (16 guides), Watches (1 guide), Media & Attachments (2 guides), Labels (3 guides), Todos & Checklists (7 guides), Documents (5 guides), Collaboration (3 guides), Client Portal (1 guide), Custom Fields (1 guide), Map (1 guide), Tasks (1 guide), and Access & Visibility (3 guides) — each end to end, from setup through to seeing the results. All six guides flagged `needs update` by the 2026-09-03 code-drift sync (see `_progress.md`) have now been rewritten, and every new guide that sync's discovery pass found has been written too. Three areas have made a start but aren't complete yet: **Assignments** (1/3 — "Assignments Inbox"'s 2 record/project rows still open), **Records** (1/26 — this repo's biggest remaining gap), and **Settings** (4/63 — most admin configuration screens are still undocumented).

Together with Product Allocations and Products & Rates, three of the Projects guides descend from what used to be grouped as one "Planned vs Actual (PVA)" folder — see the [Planned vs Actual overview](Product%20Allocations/_Planned%20vs%20Actual%20-%20Overview.md) in Product Allocations for how those pieces still fit together conceptually, even though the guide files themselves live under whichever `_progress.md` section they actually belong to.

Known product issues found while building these guides — not documentation gaps, but real app behaviour worth an engineer's attention — are tracked separately in [`Zz - Known Bugs/`](Zz%20-%20Known%20Bugs/).

The plan is to keep working through the rest of the app area by area until every workflow has a guide, verified against the live app, kept current as the app changes.

## Contents

### Signing In
Start with signing in, then the password-reset flow if you use email/password rather than Microsoft sign-in.

- [Overview — how Microsoft SSO, email/password sign-in, and the password-reset flow fit together](Signing%20In/_Signing%20In%20-%20Overview.md)
- [Signing in to your account](Signing%20In/Signing%20in%20to%20your%20account.md) — Microsoft SSO (the realistic path for most users) and email/password, including what each error message means and how to sign out
- [Requesting a password reset](Signing%20In/Requesting%20a%20password%20reset.md)
- [Setting a new password from a reset link](Signing%20In/Setting%20a%20new%20password%20from%20a%20reset%20link.md)

### Account
Personal account settings, available to everyone.

- [Overview — the three standalone personal settings covered in this area](Account/_Account%20-%20Overview.md)
- [Updating your account profile](Account/Updating%20your%20account%20profile.md)
- [Collapsing or expanding the sidebar](Account/Collapsing%20or%20expanding%20the%20sidebar.md)
- [Dismissing an onboarding tip](Account/Dismissing%20an%20onboarding%20tip.md)

### Home Dashboard
Start with the activity feed and the tag filter, then each widget on the Overview dashboard.

- [Overview — what the Home and Overview tabs are for, and how the activity feed, snapshot widgets, charts, and Admin widgets fit together](Home%20Dashboard/_Home%20Dashboard%20-%20Overview.md)
- [Viewing your activity feed](Home%20Dashboard/Viewing%20your%20activity%20feed.md)
- [Using the Home overview widget dashboard](Home%20Dashboard/Using%20the%20Home%20overview%20widget%20dashboard.md) — the tag filter that narrows every widget below

**Snapshots**
- [Reading the Today snapshot widget](Home%20Dashboard/Reading%20the%20Today%20snapshot%20widget.md)
- [Reading the Timesheets Today widget](Home%20Dashboard/Reading%20the%20Timesheets%20Today%20widget.md)
- [Reading the Jobs Today widget](Home%20Dashboard/Reading%20the%20Jobs%20Today%20widget.md)
- [Browsing upcoming jobs on the Coming Up widget](Home%20Dashboard/Browsing%20upcoming%20jobs%20on%20the%20Coming%20Up%20widget.md)
- [Reviewing the Recent Activity widget](Home%20Dashboard/Reviewing%20the%20Recent%20Activity%20widget.md)

**Charts**
- [Filtering the Jobs by Status chart](Home%20Dashboard/Filtering%20the%20Jobs%20by%20Status%20chart.md)
- [Filtering the Jobs by Type chart](Home%20Dashboard/Filtering%20the%20Jobs%20by%20Type%20chart.md)
- [Filtering the Projects by Stage chart](Home%20Dashboard/Filtering%20the%20Projects%20by%20Stage%20chart.md)
- [Filtering the Projects by Type chart](Home%20Dashboard/Filtering%20the%20Projects%20by%20Type%20chart.md)
- [Filtering the Records by Stage chart](Home%20Dashboard/Filtering%20the%20Records%20by%20Stage%20chart.md)
- [Filtering the Records by Type chart](Home%20Dashboard/Filtering%20the%20Records%20by%20Type%20chart.md)

**Admin**
- [Monitoring the Uploads status widget (Admin)](Home%20Dashboard/Monitoring%20the%20Uploads%20status%20widget%20%28Admin%29.md) — OCU-internal only, not visible to any tenant account
- [Monitoring the Weekly Imports status widget (Admin)](Home%20Dashboard/Monitoring%20the%20Weekly%20Imports%20status%20widget%20%28Admin%29.md)

### Search & Navigation
Finding things and getting around quickly.

- [Overview — global search and the App Launcher, and how they differ](Search%20%26%20Navigation/_Search%20%26%20Navigation%20-%20Overview.md)
- [Using global search / command palette](Search%20%26%20Navigation/Using%20global%20search%20-%20command%20palette.md)
- [Launching connected apps from the App Launcher](Search%20%26%20Navigation/Launching%20connected%20apps%20from%20the%20App%20Launcher.md)

### Notifications
How you're alerted when something needs your attention.

- [Overview — what notifications are for and how they work](Notifications/_Notifications%20-%20Overview.md)
- [Viewing and managing notifications](Notifications/Viewing%20and%20managing%20notifications.md)

### Assets
Tracking and maintaining the physical things your organisation manages — browse them, create and edit them, and manage everything attached to one: sub-assets, visits, visit plans, jobs, todos, records, issues, and pipeline stage.

- [Overview — how asset types, sub-assets, pipeline stages, visits, and everything else attached to an asset fit together](Assets/_Assets%20-%20Overview.md)
- [Using the assets landing page](Assets/Using%20the%20assets%20landing%20page.md)

**Browsing**
- [Browsing assets in the drilldown tree view](Assets/Browsing%20assets%20in%20the%20drilldown%20tree%20view.md)
- [Browsing assets in the table (list) view](Assets/Browsing%20assets%20in%20the%20table%20%28list%29%20view.md)
- [Viewing the assets board (pipeline)](Assets/Viewing%20the%20assets%20board%20%28pipeline%29.md)

**Creating, viewing, and editing an asset**
- [Creating an asset](Assets/Creating%20an%20asset.md)
- [Viewing an asset's overview page](Assets/Viewing%20an%20asset%27s%20overview%20page.md)
- [Editing or deleting an asset](Assets/Editing%20or%20deleting%20an%20asset.md)
- [Moving an asset through pipeline stages](Assets/Moving%20an%20asset%20through%20pipeline%20stages.md)

**Everything attached to an asset**
- [Viewing and adding sub-assets](Assets/Viewing%20and%20adding%20sub-assets.md)
- [Viewing an asset's Visits tab](Assets/Viewing%20an%20asset%27s%20Visits%20tab.md)
- [Scheduling a maintenance visit plan for an asset](Assets/Scheduling%20a%20maintenance%20visit%20plan%20for%20an%20asset.md)
- [Removing a visit plan from an asset](Assets/Removing%20a%20visit%20plan%20from%20an%20asset.md)
- [Viewing an asset's linked jobs](Assets/Viewing%20an%20asset%27s%20linked%20jobs.md)
- [Viewing an asset's to-dos](Assets/Viewing%20an%20asset%27s%20to-dos.md)
- [Viewing an asset's records](Assets/Viewing%20an%20asset%27s%20records.md)
- [Viewing and raising issues against an asset](Assets/Viewing%20and%20raising%20issues%20against%20an%20asset.md)

### Watches
Keeping an eye on specific items (shown on screen as "Bookmarks").

- [Overview — what bookmarking an item is for](Watches/_Watches%20-%20Overview.md)
- [Managing your bookmarks](Watches/Managing%20your%20bookmarks.md)

### Media & Attachments
Choosing which photos and files show up when you export a PDF, and removing a file you've just uploaded before you save.

- [Overview — two unrelated attachment conveniences and when to use each](Media%20%26%20Attachments/_Media%20%26%20Attachments%20-%20Overview.md)
- [Choosing which attachments appear on a PDF export](Media%20%26%20Attachments/Choosing%20which%20attachments%20appear%20on%20a%20PDF%20export.md)
- [Removing an uploaded file attachment](Media%20%26%20Attachments/Removing%20an%20uploaded%20file%20attachment.md)

### Labels
Your own personal coloured tags for marking records — the My Labels page, creating one, and editing/deactivating one.

- [Overview — what labels are for and how the three guides fit together](Labels/_Labels%20-%20Overview.md)
- [Managing your personal labels ("My Labels")](Labels/Managing%20your%20personal%20labels%20%28My%20Labels%29.md)
- [Creating a new label](Labels/Creating%20a%20new%20label.md)
- [Editing, deactivating, or deleting a label](Labels/Editing%2C%20deactivating%2C%20or%20deleting%20a%20label.md)

### Todos & Checklists
Simple tracked tasks — the standalone Todos list and board, todos on a job's Todos tab, your assigned todos, and checklists within a todo.

- [Overview — how todos, the assignments view, and checklists fit together](Todos%20%26%20Checklists/_Todos%20%26%20Checklists%20-%20Overview.md)
- [Creating, editing, and managing a standalone todo](Todos%20%26%20Checklists/Creating%2C%20editing%2C%20and%20managing%20a%20standalone%20todo.md)
- [Changing a todo's status from its detail page](Todos%20%26%20Checklists/Changing%20a%20todo%27s%20status%20from%20its%20detail%20page.md)
- [Viewing todos as a pipeline (kanban board)](Todos%20%26%20Checklists/Viewing%20todos%20as%20a%20pipeline%20%28kanban%20board%29.md)
- [Adding and managing todos on a job or project (Todos tab)](Todos%20%26%20Checklists/Adding%20and%20managing%20todos%20on%20a%20job%20or%20project%20%28Todos%20tab%29.md)
- [Viewing and prioritising your assigned todos](Todos%20%26%20Checklists/Viewing%20and%20prioritising%20your%20assigned%20todos.md)
- [Adding a checklist to a todo](Todos%20%26%20Checklists/Adding%20a%20checklist%20to%20a%20todo.md)
- [Adding, checking off, and removing checklist items](Todos%20%26%20Checklists/Adding%2C%20checking%20off%2C%20and%20removing%20checklist%20items.md)

### Documents
Uploading and organising files on a record — folders, previewing and replacing a document, version history, and comments.

- [Overview — how Docs, folders, versions, and comments fit together](Documents/_Documents%20-%20Overview.md)
- [Uploading and organising documents on a record](Documents/Uploading%20and%20organising%20documents%20on%20a%20record.md)
- [Previewing, replacing, and annotating a document](Documents/Previewing%2C%20replacing%2C%20and%20annotating%20a%20document.md)
- [Viewing a document's version history](Documents/Viewing%20a%20document%27s%20version%20history.md)
- [Commenting on a document](Documents/Commenting%20on%20a%20document.md)
- [Creating and configuring a folder](Documents/Creating%20and%20configuring%20a%20folder.md)

### Collaboration
Discussing and reacting to records together — comments with threaded replies and internal-only notes, reactions on Hub posts, and each record's activity feed.

- [Overview — how comments, reactions, and activity feeds fit together](Collaboration/_Collaboration%20-%20Overview.md)
- [Commenting on any record, with replies and internal notes](Collaboration/Commenting%20on%20any%20record%2C%20with%20replies%20and%20internal%20notes.md)
- [Reacting to a comment](Collaboration/Reacting%20to%20a%20comment.md)
- [Viewing a record's activity feed](Collaboration/Viewing%20a%20record%27s%20activity%20feed.md)

### Product Allocations
Allocate products or materials, adjust the plan, and record what actually happened — the core of the app's Planned vs Actual tracking.

- [Overview — what Planned vs Actual means and how it all fits together, across this and the three areas below](Product%20Allocations/_Planned%20vs%20Actual%20-%20Overview.md)

**Allocating**
- [Allocating products or materials to a job, project, estimate, or variation](Product%20Allocations/Allocating%20products%20or%20materials%20to%20a%20job%2C%20project%2C%20estimate%2C%20or%20variation.md)

**Adjusting the plan**
- [Raising a planned quantity change on an allocation](Product%20Allocations/Raising%20a%20planned%20quantity%20change%20on%20an%20allocation.md)
- [Viewing planned quantity change history](Product%20Allocations/Viewing%20planned%20quantity%20change%20history.md)
- [Editing or removing a product allocation](Product%20Allocations/Editing%20or%20removing%20a%20product%20allocation.md)
- [Copying or transferring allocated products between records](Product%20Allocations/Copying%20or%20transferring%20allocated%20products%20between%20records.md)
- [Bulk-applying a rate modifier to all allocated products](Product%20Allocations/Bulk-applying%20a%20rate%20modifier%20to%20all%20allocated%20products.md)

**Recording what happened**
- [Recording actual product usage against an allocation](Product%20Allocations/Recording%20actual%20product%20usage%20against%20an%20allocation.md)

### Products & Rates
Browsing, creating, editing, and deleting products in the catalog, plus everything about rates — setting up rate books, rate categories, and allocation types, then setting the sell/cost rate on a specific product. Merges two `_progress.md` sections that are both fundamentally about rates and the catalog they apply to, even though they live on different screens (a product's own page vs. admin Settings). All 11 rows across both sections are now written — the only excluded row (project codes/timesheet categories) is unrelated to products or rates.

- [Overview — how the product catalog, rate books and versions, rate categories, and product allocation types fit together](Products%20%26%20Rates/_Products%20%26%20Rates%20-%20Overview.md)

**Browsing the catalog**
- [Browsing the product catalog and drilldown hierarchy](Products%20%26%20Rates/Browsing%20the%20product%20catalog%20and%20drilldown%20hierarchy.md)
- [Viewing a product's sub-products](Products%20%26%20Rates/Viewing%20a%20product%27s%20sub-products.md)

**Creating, viewing, editing, and deleting a product**
- [Creating a product or sub-product](Products%20%26%20Rates/Creating%20a%20product%20or%20sub-product.md)
- [Viewing and editing a product](Products%20%26%20Rates/Viewing%20and%20editing%20a%20product.md)
- [Deleting a product](Products%20%26%20Rates/Deleting%20a%20product.md)

**Rates**
- [Managing sell rates on a product](Products%20%26%20Rates/Managing%20sell%20rates%20on%20a%20product.md)
- [Managing cost rates on a product](Products%20%26%20Rates/Managing%20cost%20rates%20on%20a%20product.md)
- [Creating a rate book and its versions](Products%20%26%20Rates/Creating%20a%20rate%20book%20and%20its%20versions.md)
- [Setting product rates within a rate book version](Products%20%26%20Rates/Setting%20product%20rates%20within%20a%20rate%20book%20version.md)
- [Managing product allocation types](Products%20%26%20Rates/Managing%20product%20allocation%20types.md)
- [Managing rate categories](Products%20%26%20Rates/Managing%20rate%20categories.md)

### Projects
Browsing projects in every available view, creating and managing a project end to end, its Children/Key Fields/Plan tabs, its Records/Jobs/Tasks tabs, its Estimates/Invoices/Variations/Permits and linking to other projects, and its Todos/RAG/job-locking/PDF export controls — all 33 guides are now written, making this the biggest complete area in the repo.

- [Overview — what a Project is and how its structure, records/jobs/tasks, financials, and status controls fit together](Projects/_Projects%20-%20Overview.md)

**Browsing**
- [Browsing and filtering the projects list](Projects/Browsing%20and%20filtering%20the%20projects%20list.md)
- [Exploring projects as a relationship graph](Projects/Exploring%20projects%20as%20a%20relationship%20graph.md) — currently broken; the guide documents the intended behaviour and flags the bug
- [Browsing projects in drilldown (hierarchy) view](Projects/Browsing%20projects%20in%20drilldown%20%28hierarchy%29%20view.md)
- [Viewing and moving projects on the pipeline (kanban) board](Projects/Viewing%20and%20moving%20projects%20on%20the%20pipeline%20%28kanban%29%20board.md)

**Creating and managing a project**
- [Creating a new project](Projects/Creating%20a%20new%20project.md)
- [Creating a sub-project (child project) under an existing project](Projects/Creating%20a%20sub-project%20%28child%20project%29%20under%20an%20existing%20project.md)
- [Viewing a project's overview (main tab)](Projects/Viewing%20a%20project%27s%20overview%20%28main%20tab%29.md)
- [Editing a project's details](Projects/Editing%20a%20project%27s%20details.md)
- [Deleting (archiving) a project](Projects/Deleting%20%28archiving%29%20a%20project.md)

**Sub-projects, key fields, and the project plan**
- [Managing sub-projects on the Children tab](Projects/Managing%20sub-projects%20on%20the%20Children%20tab.md)
- [Viewing key fields rolled up from jobs and tasks](Projects/Viewing%20key%20fields%20rolled%20up%20from%20jobs%20and%20tasks.md)
- [Managing the project plan (project groups / checklist tab)](Projects/Managing%20the%20project%20plan%20%28project%20groups%20-%20checklist%20tab%29.md)
- [Adding a new checklist item to a project group](Projects/Adding%20a%20new%20checklist%20item%20to%20a%20project%20group.md)
- [Attaching an existing job or record to a project group checklist](Projects/Attaching%20an%20existing%20job%20or%20record%20to%20a%20project%20group%20checklist.md)
- [Completing, editing, reordering, and removing checklist items](Projects/Completing%2C%20editing%2C%20reordering%2C%20and%20removing%20checklist%20items.md)

**Records, jobs, and tasks**
- [Viewing and attaching records (surveys, inspections) to a project](Projects/Viewing%20and%20attaching%20records%20%28surveys%2C%20inspections%29%20to%20a%20project.md)
- [Viewing and creating jobs from a project](Projects/Viewing%20and%20creating%20jobs%20from%20a%20project.md)
- [Viewing and filtering tasks on a project](Projects/Viewing%20and%20filtering%20tasks%20on%20a%20project.md)
- [Creating a new task under a project](Projects/Creating%20a%20new%20task%20under%20a%20project.md)
- [Viewing and working a task's overview tab](Projects/Viewing%20and%20working%20a%20task%27s%20overview%20tab.md)
- [Editing or deleting a task](Projects/Editing%20or%20deleting%20a%20task.md)

**Estimates, invoices, variations, permits, and linking**
- [Viewing and creating estimates on a project](Projects/Viewing%20and%20creating%20estimates%20on%20a%20project.md)
- [Viewing and creating invoices on a project](Projects/Viewing%20and%20creating%20invoices%20on%20a%20project.md)
- [Viewing and raising variations on a project](Projects/Viewing%20and%20raising%20variations%20on%20a%20project.md)
- [Viewing and attaching permits to a project](Projects/Viewing%20and%20attaching%20permits%20to%20a%20project.md)
- [Linking related projects together](Projects/Linking%20related%20projects%20together.md)

**Planned vs Actual on a project**
- [Viewing and managing product allocations on a project](Projects/Viewing%20and%20managing%20product%20allocations%20on%20a%20project.md)
- [Managing a task's product allocations tab](Projects/Managing%20a%20task%27s%20product%20allocations%20tab.md)
- [Viewing a project's commercial stats dashboard](Projects/Viewing%20an%20projects%20commercial%20stats%20dashboard.md)

**Todos, RAG status, job locking, and PDF export**
- [Viewing and managing to-dos on a project](Projects/Viewing%20and%20managing%20to-dos%20on%20a%20project.md)
- [Setting a project's RAG status](Projects/Setting%20a%20project%27s%20RAG%20status.md) — the RAG dropdown click can silently fail to save; see `Zz - Known Bugs/`
- [Locking and unlocking jobs on a project](Projects/Locking%20and%20unlocking%20jobs%20on%20a%20project.md) — unlocking has the same silent-save issue as RAG status
- [Downloading or previewing a project PDF](Projects/Downloading%20or%20previewing%20a%20project%20PDF.md)

### Timesheets


- [Overview — what Timesheets, Timesheet Groups, and Timesheet Exports mean and how they fit together](Timesheets/_Timesheets%20-%20Overview.md)
- [Using the Timesheets landing page](Timesheets/Using%20the%20Timesheets%20landing%20page.md)

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

### Access & Visibility
Who can see a record, who owns it, and who it's shared with or assigned to — the Access panel that appears in the sidebar of every record's Main tab.

- [Overview — how visibility, ownership, sharing, and tagging fit together in the Access panel](Access%20%26%20Visibility/_Access%20%26%20Visibility%20-%20Overview.md)
- [Viewing a record's Access panel (visibility & ownership)](Access%20%26%20Visibility/Viewing%20a%20record's%20Access%20panel%20%28visibility%20%26%20ownership%29.md)
- [Sharing or assigning a record to specific users](Access%20%26%20Visibility/Sharing%20or%20assigning%20a%20record%20to%20specific%20users.md)
- [Tagging or labelling a record from the Access panel](Access%20%26%20Visibility/Tagging%20or%20labelling%20a%20record%20from%20the%20Access%20panel.md)

### Assignments
Where your assigned work lands — jobs assigned to you show up here. (Partial area — the separate "Assignments Inbox" records/projects tabs aren't written yet.)

- [Overview — the four tabs of the Assignments inbox](Assignments/_Assignments%20-%20Overview.md)
- [Viewing my assigned jobs](Assignments/Viewing%20my%20assigned%20jobs.md)

### Client Portal
The read-only page a client reaches from an emailed link to approve or reject a quote — no sign-in required.

- [Overview — what the Client Portal is for](Client%20Portal/_Client%20Portal%20-%20Overview.md)
- [Approving or rejecting a quote via a client portal link](Client%20Portal/Approving%20or%20rejecting%20a%20quote%20via%20a%20client%20portal%20link.md)

### Custom Fields
Filling in the extra fields an admin has attached to a record type, beyond the record's standard fields.

- [Overview — what custom fields are and where they show up](Custom%20Fields/_Custom%20Fields%20-%20Overview.md)
- [Filling in and editing custom field values on a record](Custom%20Fields/Filling%20in%20and%20editing%20custom%20field%20values%20on%20a%20record.md)

### Map
A live view of where your field team is right now.

- [Overview — what the Map page shows](Map/_Map%20-%20Overview.md)
- [Viewing the live user map](Map/Viewing%20the%20live%20user%20map.md)

### Records
Custom record types — inspections, audits, and other structured forms attached to your work. (Partial area — this repo's biggest remaining gap; only the entry-point hub is written so far.)

- [Overview — Record Groups and what's still to come](Records/_Records%20-%20Overview.md)
- [Browsing records by category (Record Groups hub)](Records/Browsing%20records%20by%20category%20%28Record%20Groups%20hub%29.md)

### Settings
Tenant admin configuration — organised into one subfolder per Settings sub-area (matching the "Settings: *" sections in `_progress.md`), since this will grow to ~14 sub-areas and 60+ guides. (Partial area — 4 of many sub-areas documented so far.)

- [Overview — how the 4 written Settings guides fit together](Settings/_Settings%20-%20Overview.md)
- [Finding your way around Settings (landing page)](Settings/Overview/Finding%20your%20way%20around%20Settings%20%28landing%20page%29.md)
- [Configuring label groups](Settings/Labels/Configuring%20label%20groups.md)
- [Managing folder sets (document folder templates)](Settings/Views%20%26%20Organization/Managing%20folder%20sets%20%28document%20folder%20templates%29.md)
- [Building a notification journey](Settings/Journeys/Building%20a%20notification%20journey.md)

### Tasks
A cross-job, cross-project view of every task assigned across the organisation — not to be confused with the tasks tab on an individual job.

- [Overview — what the Tasks landing page is for](Tasks/_Tasks%20-%20Overview.md)
- [Browsing the tasks landing page](Tasks/Browsing%20the%20tasks%20landing%20page.md)

## Folder layout

```
OCU-One-Web-User-Guides/
├── README.md              this file
├── _progress.md           internal tracker: every planned guide + its status
├── Product Allocations/    Product Allocations guides (formerly part of "PVA")
│   ├── _Planned vs Actual - Overview.md   cross-cutting concept doc, spans all 3 PVA-descended folders below
│   ├── _VERIFICATION.md    verification status for Product Allocations guides
│   ├── ...guide files
│   └── attachments/         
├── Products & Rates/       Products & Rates guides (formerly part of "PVA"; merges the _progress.md "Products & Rates" and "Settings: Finance Reference Data" sections since both are about rates)
│   ├── _Products & Rates - Overview.md
│   ├── _VERIFICATION.md    verification status for Products & Rates guides
│   ├── ...guide files
│   └── attachments/         
├── Projects/               Projects guides (all 33 rows written; a handful originally descend from "PVA")
│   ├── _Projects - Overview.md
│   ├── _VERIFICATION.md    verification status for Projects guides
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
├── Tickets/                Tickets guides
│   ├── _Tickets - Overview.md
│   ├── _VERIFICATION.md    verification status for Tickets guides
│   ├── ...guide files
│   └── attachments/        
├── Signing In/             Signing In guides
│   ├── _Signing In - Overview.md
│   ├── _VERIFICATION.md    verification status for Signing In guides
│   ├── ...guide files
│   └── attachments/        
├── Account/                Account guides
│   ├── _Account - Overview.md
│   ├── _VERIFICATION.md    verification status for Account guides
│   ├── ...guide files
│   └── attachments/        
├── Home Dashboard/         Home Dashboard guides
│   ├── _Home Dashboard - Overview.md
│   ├── _VERIFICATION.md    verification status for Home Dashboard guides
│   ├── ...guide files
│   └── attachments/        
├── Notifications/          Notifications guides
│   ├── _Notifications - Overview.md
│   ├── _VERIFICATION.md    verification status for Notifications guides
│   ├── ...guide files
│   └── attachments/        
├── Search & Navigation/    Search & Navigation guides
│   ├── _Search & Navigation - Overview.md
│   ├── _VERIFICATION.md    verification status for Search & Navigation guides
│   ├── ...guide files
│   └── attachments/        
├── Assets/                 Assets guides
│   ├── _Assets - Overview.md
│   ├── _VERIFICATION.md    verification status for Assets guides
│   ├── ...guide files
│   └── attachments/        
├── Watches/                Watches guides
│   ├── _Watches - Overview.md
│   ├── _VERIFICATION.md    verification status for Watches guides
│   ├── ...guide files
│   └── attachments/        
├── Media & Attachments/    Media & Attachments guides
│   ├── _Media & Attachments - Overview.md
│   ├── _VERIFICATION.md    verification status for Media & Attachments guides
│   ├── ...guide files
│   └── attachments/        
├── Labels/                 Labels guides
│   ├── _Labels - Overview.md
│   ├── _VERIFICATION.md    verification status for Labels guides
│   ├── ...guide files
│   └── attachments/        
├── Todos & Checklists/    Todos & Checklists guides
│   ├── _Todos & Checklists - Overview.md
│   ├── _VERIFICATION.md    verification status for Todos & Checklists guides
│   ├── ...guide files
│   └── attachments/        
├── Documents/              Documents guides
│   ├── _Documents - Overview.md
│   ├── _VERIFICATION.md    verification status for Documents guides
│   ├── ...guide files
│   └── attachments/        
├── Collaboration/          Collaboration guides
│   ├── _Collaboration - Overview.md
│   ├── _VERIFICATION.md    verification status for Collaboration guides
│   ├── ...guide files
│   └── attachments/        
├── Access & Visibility/    Access & Visibility guides (the Access panel: visibility, ownership, sharing, tagging)
│   ├── _Access & Visibility - Overview.md
│   ├── _VERIFICATION.md    verification status for Access & Visibility guides
│   ├── ...guide files
│   └── attachments/        
├── Assignments/            Assignments guides (merges "Assignments (My Work Inbox)" and "Assignments Inbox" _progress.md sections)
│   ├── _Assignments - Overview.md
│   ├── _VERIFICATION.md    verification status for Assignments guides
│   ├── ...guide files
│   └── attachments/        
├── Client Portal/          Client Portal guides
│   ├── _Client Portal - Overview.md
│   ├── _VERIFICATION.md    verification status for Client Portal guides
│   ├── ...guide files
│   └── attachments/        
├── Custom Fields/          Custom Fields guides
│   ├── _Custom Fields - Overview.md
│   ├── _VERIFICATION.md    verification status for Custom Fields guides
│   ├── ...guide files
│   └── attachments/        
├── Map/                    Map guides
│   ├── _Map - Overview.md
│   ├── _VERIFICATION.md    verification status for Map guides
│   ├── ...guide files
│   └── attachments/        
├── Records/                Records guides (merges the small "Records" hub section with the much larger later "Records" _progress.md section)
│   ├── _Records - Overview.md
│   ├── _VERIFICATION.md    verification status for Records guides
│   ├── ...guide files
│   └── attachments/        
├── Settings/               Settings guides (merges every "Settings: *" _progress.md section except "Settings: Finance Reference Data", which lives under Products & Rates)
│   ├── _Settings - Overview.md
│   ├── _VERIFICATION.md    roll-up of every subfolder below (not a flat guide list — see the file itself)
│   ├── Overview/           one subfolder per Settings sub-area, each with its own guide(s), _VERIFICATION.md, and attachments/
│   │   ├── _VERIFICATION.md
│   │   ├── ...guide files
│   │   └── attachments/
│   ├── Labels/             (same subfolder shape as Overview/ above)
│   ├── Views & Organization/
│   └── Journeys/
├── Tasks/                  Tasks guides
│   ├── _Tasks - Overview.md
│   ├── _VERIFICATION.md    verification status for Tasks guides
│   ├── ...guide files
│   └── attachments/        
└── Zz - Known Bugs/        real product issues found while building guides, not documentation — named to sort last
    ├── ...bug writeups (one .md per issue)
    └── attachments/         evidence screenshots/recordings, one subfolder per bug
```

## Conventions

- **Naming**: guide filenames are the plain-English title of the workflow (e.g. `Raising a planned quantity change on an allocation.md`).
- **Screenshots**: live under `attachments/<slugified-guide-name>/`, numbered in the order they're referenced (`01-...`, `02-...`).
- **Cross-links**: a guide linking to a sibling guide in the same area uses `[[Guide Name]]` wiki-style links (see the Assets guides for examples). An area's `_<Area> - Overview.md` links out to its child guides with standard markdown links instead (see the Product Allocations, Timesheets, Tickets, or Views overview for examples), since those need to resolve outside Obsidian too — and, where an overview's guides span more than one folder (see Product Allocations' `_Planned vs Actual - Overview.md`), with relative `../Other Folder/Guide.md` paths.

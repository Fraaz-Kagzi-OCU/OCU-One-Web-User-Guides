# User Guides

This repo is an end-user-facing documentation project for a web app — how-to guides written for the people who use the app day to day, not for developers. The end goal is full coverage: a guide for every user-facing feature and workflow in the app, not just a handful of isolated topics. Each guide is a single self-contained `.md` file with numbered steps and screenshots stored alongside it under `attachments/<guide-slug>/`.

Every guide listed below still needs a human to check it against the live app before it's trusted. Verification is tracked per feature area. Every feature area gets its own `_VERIFICATION.md` as it's added. See [`WORKFLOW.md`](WORKFLOW.md) for how guides move through writing, human verification, and re-verification after app changes, and the slash commands (`/write-guide`, `/update-guide`, `/sync-human-verification`, etc.) that drive each step.

## Roadmap

The app has roughly 399 user-facing workflows worth documenting in total. This repo currently covers thirty-three complete areas — Tickets (12 guides), Signing In (3 guides), Account (3 guides), Home Dashboard (15 guides), Notifications (1 guide), Search & Navigation (2 guides), Assets (16 guides), Watches (1 guide), Media & Attachments (2 guides), Labels (3 guides), Todos & Checklists (7 guides), Documents (5 guides), Collaboration (3 guides), Client Portal (1 guide), Custom Fields (1 guide), Map (1 guide), Tasks (1 guide), Access & Visibility (3 guides), Assignments (3 guides), Contacts & Addresses (2 guides), Invoice Exports (3 guides, one currently blocked by [a known bug](Zz%20-%20Known%20Bugs/creating-an-invoice-export-shows-no-selected-invoices-and-crashes-on-create.md)), Hub - Surveys (4 guides, one currently blocked by [a known bug](Zz%20-%20Known%20Bugs/survey-response-drilldown-link-goes-to-wrong-page-and-crashes.md)), Hub - Pages (5 guides), Hub - Channels (5 guides), Public Share Links (4 guides, one currently blocked by [a known bug](Zz%20-%20Known%20Bugs/csrf-token-leaked-into-public-share-redirect-url.md)), Leads (5 guides), Permits (17 guides), Products & Rates (11 guides), Timesheets (18 guides), and List Views & Filtering (9 guides) — each end to end, from setup through to seeing the results. All six guides flagged `needs update` by the 2026-09-03 code-drift sync (see `_progress.md`) have now been rewritten, and every new guide that sync's discovery pass found has been written too. A further code-drift sync on 2026-09-10 found 8 more guides gone stale — in Projects, Product Allocations, Products & Rates, Timesheets, and List Views & Filtering. Products & Rates, Timesheets, and List Views & Filtering have since been fully rewritten and are back in the complete list above; Projects and Product Allocations remain incomplete — see `_progress.md` for details. **Records** (26/26) is now also complete, though two of its guides are currently blocked from human verification by open app bugs (see the Records section below). **Jobs** (20/20) is now also complete, though one of its guides is currently blocked from human verification by an open app bug — see the Jobs section below. **Leads** (5/5) is now also complete. **Permits** (17/17) is now also complete, covering both permits and the defects raised against them. **Scheduling** (7/7) is now also complete, covering the scheduler board and its drag-and-drop booking, unbooking, unallocating, editing, and bulk-booking actions. **Variations (Change Projects)** (9/9) is now also complete, covering browsing and the status pipeline, raising, editing, and managing products on a variation, moving it through its approval workflow (including RAG status, Draft-only), applying an approved one to its project, and its PDF export, sending, and attachment-visibility controls. **Visits** (9/9) is now also complete, covering browsing, creating, editing/deleting, the overview page, RAG status, attaching/detaching a visit from a job, and its todos and issues — though one of its guides is currently blocked from human verification by an open app bug (see the Visits section below). **Estimates & Quotes** (8/8) is now also complete, covering browsing/filtering the estimates list and pipeline, creating an estimate, its status/RAG workflow, editing/activating/deactivating/deleting, attaching jobs, viewing records, and creating/sending a quote — though one of its guides is currently blocked from human verification by an open app bug (see the Estimates & Quotes section below). Settings (63/65 guides across 18 sub-areas) is not yet listed as complete — two guides are still `todo` (an attachment-field display-options guide in Workspace Builder, and a common-condition-types reference in Automation). **Clients** (8/8) is now also complete, covering browsing/filtering the client list, creating and editing a client, its overview/todos/jobs/records tabs, managing its sites, a site's own overview and assets, and archiving — though two of its guides ("Viewing a client's invoices" and "Downloading a client PDF summary") are currently blocked from human verification by open app bugs, since both routes exist with no working controller action or UI entry point (see the Clients section below). **SLAs** (5/5) is now also complete, covering creating an SLA on a record/project/ticket/user, monitoring its progress and jeopardy, the pause/resume/restart/cancel/satisfy commands, and browsing/filtering the SLAs list — though its activate/deactivate guide is currently blocked from human verification by an open app bug, since those routes work but have no UI entry point anywhere (see the SLAs section below). **Job Tasks** (6/6) is now also complete, covering viewing/editing a job task, deleting one, its status and RAG workflow, and its todos and records — though its PDF download guide is currently blocked from human verification by an open app bug, since the Download button's accessible title is a broken translation (see the Job Tasks section below).

Together with Product Allocations and Products & Rates, three of the Projects guides descend from what used to be grouped as one "Planned vs Actual (PVA)" folder — see the [Planned vs Actual overview](Product%20Allocations/_Planned%20vs%20Actual%20-%20Overview.md) in Product Allocations for how those pieces still fit together conceptually, even though the guide files themselves live under whichever `_progress.md` section they actually belong to.

Known product issues found while building these guides — not documentation gaps, but real app behaviour worth an engineer's attention — are tracked separately in [`Zz - Known Bugs/`](Zz%20-%20Known%20Bugs/). Any guide whose own content is affected by one of these bugs is listed in [`Zz - Bugged Guides.md`](Zz%20-%20Bugged%20Guides.md) and hidden from the human-verification site until the bug's fixed and the guide is rewritten — see `WORKFLOW.md`.

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
Browsing projects in every available view, creating and managing a project end to end, its Children/Key Fields/Plan tabs, its Records/Jobs/Tasks tabs, its Estimates/Invoices/Variations/Permits and linking to other projects, its Todos/RAG/job-locking/PDF export controls, and raising/acknowledging/closing warnings against a project — all 36 guides are now written, making this the biggest complete area in the repo.

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

**Warnings**
- [Raising a warning against a project](Projects/Raising%20a%20warning%20against%20a%20project.md)
- [Editing a warning's message](Projects/Editing%20a%20warning%27s%20message.md)
- [Acknowledging and closing a warning](Projects/Acknowledging%20and%20closing%20a%20warning.md)

### Jobs
Booking, running, and tracking a single piece of work end to end — creating and editing a job, moving it through status and RAG health, managing its allocated users, and everything that accumulates on it: tasks, todos, visits, estimates, products, permits, and the assets/issues pulled in from its visits. All 20 guides are now written, though one is currently blocked from human verification by an open app bug.

- [Overview — how a job's type, status, allocation, and everything attached to it fit together](Jobs/_Jobs%20-%20Overview.md)

**Creating and managing a job**
- [Creating a job](Jobs/Creating%20a%20job.md)
- [Creating a job from existing visits](Jobs/Creating%20a%20job%20from%20existing%20visits.md)
- [Viewing job details](Jobs/Viewing%20job%20details.md)
- [Editing a job](Jobs/Editing%20a%20job.md)
- [Deleting (archiving) a job](Jobs/Deleting%20%28archiving%29%20a%20job.md)

**Status, RAG health, and allocation**
- [Changing a job's status](Jobs/Changing%20a%20job%27s%20status.md)
- [Unbooking a job](Jobs/Unbooking%20a%20job.md)
- [Tracking a job's RAG health status](Jobs/Tracking%20a%20job%27s%20RAG%20health%20status.md) — changing RAG status can silently fail to save on a live job; see `Zz - Known Bugs/`
- [Managing secondary allocated users on a job](Jobs/Managing%20secondary%20allocated%20users%20on%20a%20job.md)
- [Downloading or previewing a job PDF](Jobs/Downloading%20or%20previewing%20a%20job%20PDF.md)

**Commercials, tasks, and visits**
- [Attaching or detaching an estimate to a job](Jobs/Attaching%20or%20detaching%20an%20estimate%20to%20a%20job.md)
- [Allocating products to a job](Jobs/Allocating%20products%20to%20a%20job.md)
- [Tracking todos on a job](Jobs/Tracking%20todos%20on%20a%20job.md)
- [Managing visits attached to a job](Jobs/Managing%20visits%20attached%20to%20a%20job.md)
- [Viewing assets linked to a job](Jobs/Viewing%20assets%20linked%20to%20a%20job.md)
- [Viewing issues linked to a job](Jobs/Viewing%20issues%20linked%20to%20a%20job.md)
- [Managing records on a job](Jobs/Managing%20records%20on%20a%20job.md)
- [Linking permits to a job](Jobs/Linking%20permits%20to%20a%20job.md)

**Browsing jobs**
- [Browsing and filtering the jobs list](Jobs/Browsing%20and%20filtering%20the%20jobs%20list.md)
- [Viewing jobs on a pipeline (kanban) board](Jobs/Viewing%20jobs%20on%20a%20pipeline%20%28kanban%29%20board.md)

### Scheduling
The drag-and-drop board dispatchers use to assign jobs to field users on a calendar — navigating and searching the board, dragging jobs onto it to book them, creating jobs directly on it, and taking jobs back off (unbooking or unallocating), editing, and bulk-booking. All 7 guides are now written.

- [Overview — how the scheduler board, its Ready for Scheduling panel, and job booking states fit together](Scheduling/_Scheduling%20-%20Overview.md)
- [Using the scheduling board (navigation, zoom, time span, user search)](Scheduling/Using%20the%20scheduling%20board.md)
- [Booking a job on the scheduler](Scheduling/Booking%20a%20job%20on%20the%20scheduler.md)
- [Creating a job directly on the scheduler](Scheduling/Creating%20a%20job%20directly%20on%20the%20scheduler.md)
- [Unbooking a job from the scheduler](Scheduling/Unbooking%20a%20job%20from%20the%20scheduler.md)
- [Unallocating a job from a user on the scheduler](Scheduling/Unallocating%20a%20job%20from%20a%20user%20on%20the%20scheduler.md)
- [Editing a job from the scheduler](Scheduling/Editing%20a%20job%20from%20the%20scheduler.md)
- [Bulk-booking many jobs](Scheduling/Bulk-booking%20many%20jobs.md)

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
Where your assigned work lands — jobs, records, and projects assigned to you all show up here, across the same four-tab inbox.

- [Overview — the four tabs of the Assignments inbox](Assignments/_Assignments%20-%20Overview.md)
- [Viewing my assigned jobs](Assignments/Viewing%20my%20assigned%20jobs.md)
- [Viewing assigned records in your Assignments inbox](Assignments/Viewing%20assigned%20records%20in%20your%20Assignments%20inbox.md) — also notes the "Things I've assigned" toggle bug; see `Zz - Known Bugs/`
- [Viewing assigned projects in your Assignments inbox](Assignments/Viewing%20assigned%20projects%20in%20your%20Assignments%20inbox.md)

### Contacts & Addresses
Two small, reusable sidebar cards found on clients, leads, projects, jobs, sites, permits, and estimates — a record's real-world contacts, and its address with an expandable interactive map.

- [Overview — how the Contacts and Address cards fit together](Contacts%20%26%20Addresses/_Contacts%20%26%20Addresses%20-%20Overview.md)
- [Managing contacts on a client, lead, or other record](Contacts%20%26%20Addresses/Managing%20contacts%20on%20a%20client%2C%20lead%2C%20or%20other%20record.md) — also notes the "View all" button bug; see `Zz - Known Bugs/`
- [Viewing an address on a map](Contacts%20%26%20Addresses/Viewing%20an%20address%20on%20a%20map.md)

### Client Portal
The read-only page a client reaches from an emailed link to approve or reject a quote — no sign-in required.

- [Overview — what the Client Portal is for](Client%20Portal/_Client%20Portal%20-%20Overview.md)
- [Approving or rejecting a quote via a client portal link](Client%20Portal/Approving%20or%20rejecting%20a%20quote%20via%20a%20client%20portal%20link.md)

### Clients
Browsing, creating, and working a client record — its todos, jobs, sites, and linked records — through to archiving one whose work is finished. All 8 guides are now written; two are currently blocked from human verification by open app bugs (see below).

- [Overview — how browsing, creating, working, and archiving a client fit together](Clients/_Clients%20-%20Overview.md)
- [Viewing and filtering the client list](Clients/Viewing%20and%20filtering%20the%20client%20list.md)
- [Creating and editing a client](Clients/Creating%20and%20editing%20a%20client.md)
- [Client overview, todos, jobs, and linked records tabs](Clients/Client%20overview%2C%20todos%2C%20jobs%2C%20and%20linked%20records%20tabs.md)
- [Viewing a client's invoices](Clients/Viewing%20a%20client's%20invoices.md) — currently blocked from human verification by [a known bug](Zz%20-%20Known%20Bugs/clients-invoices-tab-route-has-no-controller-action-or-ui-link.md)
- [Downloading a client PDF summary](Clients/Downloading%20a%20client%20PDF%20summary.md) — currently blocked from human verification by [a known bug](Zz%20-%20Known%20Bugs/clients-pdf-download-route-has-no-controller-action-or-ui-link.md)
- [Managing a client's sites](Clients/Managing%20a%20client's%20sites.md)
- [Site detail — overview and linked assets](Clients/Site%20detail%20%E2%80%94%20overview%20and%20linked%20assets.md)
- [Archiving a client](Clients/Archiving%20a%20client.md)

### Public Share Links
Letting people who aren't logged into OCU One submit a new Project or Record through a link — for setting one up, and for what the person on the other end of the link sees. All 4 guides are now written; one is currently blocked from human verification by an open app bug (see below).

- [Overview — how enabling a link, identifying yourself, and submitting a Project or Record fit together](Public%20Share%20Links/_Public%20Share%20Links%20-%20Overview.md)
- [Enabling a Public Intake Link for a Project Type or Record Type](Public%20Share%20Links/Enabling%20a%20Public%20Intake%20Link%20for%20a%20Project%20Type%20or%20Record%20Type.md)
- [Accessing a Shared Intake Link and Identifying Yourself](Public%20Share%20Links/Accessing%20a%20Shared%20Intake%20Link%20and%20Identifying%20Yourself.md) — currently blocked from human verification by [a known bug](Zz%20-%20Known%20Bugs/csrf-token-leaked-into-public-share-redirect-url.md)
- [Submitting a New Project Through a Public Share Link](Public%20Share%20Links/Submitting%20a%20New%20Project%20Through%20a%20Public%20Share%20Link.md)
- [Submitting a New Record Through a Public Share Link](Public%20Share%20Links/Submitting%20a%20New%20Record%20Through%20a%20Public%20Share%20Link.md)

### Custom Fields
Filling in the extra fields an admin has attached to a record type, beyond the record's standard fields.

- [Overview — what custom fields are and where they show up](Custom%20Fields/_Custom%20Fields%20-%20Overview.md)
- [Filling in and editing custom field values on a record](Custom%20Fields/Filling%20in%20and%20editing%20custom%20field%20values%20on%20a%20record.md)

### Map
A live view of where your field team is right now.

- [Overview — what the Map page shows](Map/_Map%20-%20Overview.md)
- [Viewing the live user map](Map/Viewing%20the%20live%20user%20map.md)

### Records
Custom record types — inspections, audits, and other structured forms attached to your work. All 26 guides are now written; two are currently blocked from human verification by open app bugs (see below).

- [Overview — Record Groups and the full record lifecycle](Records/_Records%20-%20Overview.md)
- [Browsing records by category (Record Groups hub)](Records/Browsing%20records%20by%20category%20%28Record%20Groups%20hub%29.md)
- [Browsing all record type categories (Record Groups landing page)](Records/Browsing%20all%20record%20type%20categories%20%28Record%20Groups%20landing%20page%29.md)
- [Drilling into a Record Group to pick a record type](Records/Drilling%20into%20a%20Record%20Group%20to%20pick%20a%20record%20type.md)
- [Viewing the Records list (table view)](Records/Viewing%20the%20Records%20list-table%20view.md)
- [Filtering and searching records in the list view](Records/Filtering%20and%20searching%20records%20in%20the%20list%20view.md)
- [Choosing a record type before creating a new record](Records/Choosing%20a%20record%20type%20before%20creating%20a%20new%20record.md)
- [Creating a new record](Records/Creating%20a%20new%20record.md)
- [Viewing a record's Overview/Main tab](Records/Viewing%20a%20record's%20Overview-Main%20tab.md)
- [Editing a record's details](Records/Editing%20a%20record's%20details.md)
- [Deleting (archiving) a record](Records/Deleting%20%28archiving%29%20a%20record.md)
- [Setting a record's RAG status](Records/Setting%20a%20record's%20RAG%20status.md)
- [Managing todos on a record](Records/Managing%20todos%20on%20a%20record.md)
- [Managing assets linked to a record](Records/Managing%20assets%20linked%20to%20a%20record.md)
- [Managing jobs linked to a record](Records/Managing%20jobs%20linked%20to%20a%20record.md) — blocked from human verification by an [open app bug](Zz%20-%20Known%20Bugs/job-created-with-nil-client-crashes-project-jobs-tab.md)
- [Managing issues linked to a record](Records/Managing%20issues%20linked%20to%20a%20record.md)
- [Managing estimates linked to a record](Records/Managing%20estimates%20linked%20to%20a%20record.md)
- [Managing clients linked to a record](Records/Managing%20clients%20linked%20to%20a%20record.md)
- [Managing projects linked to a record](Records/Managing%20projects%20linked%20to%20a%20record.md)
- [Managing variations linked to a record](Records/Managing%20variations%20linked%20to%20a%20record.md)
- [Managing invoices linked to a record](Records/Managing%20invoices%20linked%20to%20a%20record.md)
- [Managing linked records (record-to-record relationships)](Records/Managing%20linked%20records%20%28record-to-record%20relationships%29.md)
- [Managing child records of a specific type ("Records" tab)](Records/Managing%20child%20records%20of%20a%20specific%20type%20%28Records%20tab%29.md)
- [Attaching and detaching a permit on a record](Records/Attaching%20and%20detaching%20a%20permit%20on%20a%20record.md) — blocked from human verification by an [open app bug](Zz%20-%20Known%20Bugs/draft-permit-unsearchable-in-attach-picker.md)
- [Downloading a record as PDF or Word document](Records/Downloading%20a%20record%20as%20PDF%20or%20Word%20document.md)
- [Changing and reordering a record's pipeline stage](Records/Changing%20and%20reordering%20a%20record's%20pipeline%20stage.md)
- [Viewing and filtering the Records pipeline/kanban board](Records/Viewing%20and%20filtering%20the%20Records%20pipeline-kanban%20board.md)

### Leads
Prospective clients — companies or contacts you're talking to before any work is agreed. All 5 guides are now written.

- [Overview — how browsing, creating, working, and converting or archiving a lead fit together](Leads/_Leads%20-%20Overview.md)
- [Viewing and filtering the sales lead list](Leads/Viewing%20and%20filtering%20the%20sales%20lead%20list.md)
- [Creating and editing a sales lead](Leads/Creating%20and%20editing%20a%20sales%20lead.md)
- [Lead overview, todos, and sites tabs](Leads/Lead%20overview%2C%20todos%2C%20and%20sites%20tabs.md)
- [Converting a lead into a client](Leads/Converting%20a%20lead%20into%20a%20client.md)
- [Archiving a lead](Leads/Archiving%20a%20lead.md)

### Permits
Street-works and traffic-management permits raised against a project, and the defects logged against them. All 17 guides are now written.

- [Overview — how permits, defects, and their links to projects and jobs fit together](Permits/_Permits%20-%20Overview.md)
- [Using the permits landing page](Permits/Using%20the%20permits%20landing%20page.md)
- [Browsing permits](Permits/Browsing%20permits.md)
- [Viewing the permits board (pipeline)](Permits/Viewing%20the%20permits%20board%20%28pipeline%29.md)
- [Creating a permit for a project](Permits/Creating%20a%20permit%20for%20a%20project.md)
- [Editing or deleting a permit](Permits/Editing%20or%20deleting%20a%20permit.md)
- [Viewing a permit's overview page](Permits/Viewing%20a%20permit's%20overview%20page.md)
- [Changing a permit's status](Permits/Changing%20a%20permit's%20status.md)
- [Viewing a permit's defects tab](Permits/Viewing%20a%20permit's%20defects%20tab.md)
- [Viewing a permit's linked project](Permits/Viewing%20a%20permit's%20linked%20project.md)
- [Viewing a permit's linked jobs](Permits/Viewing%20a%20permit's%20linked%20jobs.md)
- [Linking or unlinking a permit to a job](Permits/Linking%20or%20unlinking%20a%20permit%20to%20a%20job.md)
- [Viewing a permit's records](Permits/Viewing%20a%20permit's%20records.md)
- [Browsing defects](Permits/Browsing%20defects.md)
- [Raising a defect against a permit](Permits/Raising%20a%20defect%20against%20a%20permit.md)
- [Editing or deleting a defect](Permits/Editing%20or%20deleting%20a%20defect.md)
- [Viewing a defect](Permits/Viewing%20a%20defect.md)
- [Changing a defect's status](Permits/Changing%20a%20defect's%20status.md)

### Variations (Change Projects)
Changes to the agreed scope of work on a project — raising one, giving it a value through allocated products, moving it through its approval workflow, and applying an approved one back onto the project. All 9 guides are now written.

- [Overview — how a variation's status workflow, products, and PDF export fit together](Variations%20%28Change%20Projects%29/_Variations%20%28Change%20Projects%29%20-%20Overview.md)
- [Viewing and filtering variations and the variations pipeline](Variations%20%28Change%20Projects%29/Viewing%20and%20filtering%20variations%20and%20the%20variations%20pipeline.md)
- [Creating a new variation](Variations%20%28Change%20Projects%29/Creating%20a%20new%20variation.md)
- [Managing products on a variation](Variations%20%28Change%20Projects%29/Managing%20products%20on%20a%20variation.md)
- [Editing, activating or deactivating, or deleting a variation](Variations%20%28Change%20Projects%29/Editing%2C%20activating%20or%20deactivating%2C%20or%20deleting%20a%20variation.md)
- [Viewing a variation overview and updating status/RAG](Variations%20%28Change%20Projects%29/Viewing%20a%20variation%20overview%20and%20updating%20status-rag.md)
- [Applying an approved variation to a job or project](Variations%20%28Change%20Projects%29/Applying%20an%20approved%20variation%20to%20a%20job%20or%20project.md)
- [Downloading or previewing a variation PDF](Variations%20%28Change%20Projects%29/Downloading%20or%20previewing%20a%20variation%20PDF.md)
- [Sending a variation for client approval](Variations%20%28Change%20Projects%29/Sending%20a%20variation%20for%20client%20approval.md)
- [Toggling attachment visibility on a variation PDF](Variations%20%28Change%20Projects%29/Toggling%20attachment%20visibility%20on%20a%20variation%20PDF.md)

### Visits
Planned or completed trips out to an asset — browsing them, creating one by hand, its overview page, RAG status, attaching/detaching it from a job, and its todos and issues. All 9 guides are now written, though one ("Changing a visit's status") is currently blocked from human verification by an open app bug — see the bug list below.

- [Overview — how a visit's type, asset, status, and job attachment fit together](Visits/_Visits%20-%20Overview.md)
- [Browsing visits](Visits/Browsing%20visits.md)
- [Creating a visit](Visits/Creating%20a%20visit.md)
- [Editing or deleting a visit](Visits/Editing%20or%20deleting%20a%20visit.md)
- [Viewing a visit's overview page](Visits/Viewing%20a%20visit's%20overview%20page.md)
- [Changing a visit's status](Visits/Changing%20a%20visit's%20status.md)
- [Updating a visit's RAG status](Visits/Updating%20a%20visit's%20RAG%20status.md)
- [Attaching or detaching a visit from a job](Visits/Attaching%20or%20detaching%20a%20visit%20from%20a%20job.md)
- [Viewing a visit's to-dos](Visits/Viewing%20a%20visit's%20to-dos.md)
- [Viewing and raising issues on a visit](Visits/Viewing%20and%20raising%20issues%20on%20a%20visit.md)

### Settings
Tenant admin configuration — organised into one subfolder per Settings sub-area (matching the "Settings: *" sections in `_progress.md`). All 18 sub-areas and 63 guides are now written.

- [Overview — how the written Settings guides fit together](Settings/_Settings%20-%20Overview.md)
- [Finding your way around Settings (landing page)](Settings/Overview/Finding%20your%20way%20around%20Settings%20%28landing%20page%29.md)
- [Creating and editing team groups](Settings/Groups%20%26%20Hierarchy/Creating%20and%20editing%20team%20groups.md)
- [Browsing the group hierarchy (table and org chart)](Settings/Groups%20%26%20Hierarchy/Browsing%20the%20group%20hierarchy%20%28table%20and%20org%20chart%29.md)
- [Managing group membership (members, leads, admin leads)](Settings/Groups%20%26%20Hierarchy/Managing%20group%20membership%20%28members%2C%20leads%2C%20admin%20leads%29.md)
- [Configuring label groups](Settings/Labels/Configuring%20label%20groups.md)
- [Managing folder sets (document folder templates)](Settings/Views%20%26%20Organization/Managing%20folder%20sets%20%28document%20folder%20templates%29.md)
- [Building a pipeline with stages](Settings/Pipelines%20%26%20Stages/Building%20a%20pipeline%20with%20stages.md)
- [Attaching a pipeline to a type](Settings/Pipelines%20%26%20Stages/Attaching%20a%20pipeline%20to%20a%20type.md)
- [Building a notification journey](Settings/Journeys/Building%20a%20notification%20journey.md)
- [Configuring Hub survey types](Settings/Hub%20Administration/Configuring%20Hub%20survey%20types.md)
- [Configuring app-launcher shortcuts](Settings/Hub%20Administration/Configuring%20app-launcher%20shortcuts.md)
- [Creating a shared visit plan and its recurring visit schedules](Settings/Visit%20Scheduling/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules.md)
- [Attaching a custom (asset-specific) visit plan](Settings/Visit%20Scheduling/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan.md)
- [Creating and managing rotating shift patterns](Settings/Scheduling%20Reference%20Data/Creating%20and%20managing%20rotating%20shift%20patterns.md) — blocked from human verification by an [open app bug](Zz%20-%20Known%20Bugs/shift-cannot-be-created-back-to-back-with-adjacent-shift.md)
- [Managing availability types](Settings/Scheduling%20Reference%20Data/Managing%20availability%20types.md)
- [Setting up tag types and tags](Settings/Tags%20%26%20Notifications/Setting%20up%20tag%20types%20and%20tags.md)
- [Setting up notification groups and recipients](Settings/Tags%20%26%20Notifications/Setting%20up%20notification%20groups%20and%20recipients.md)
- [Building a field set with field groups and field types](Settings/Workspace%20Builder/Building%20a%20field%20set%20with%20field%20groups%20and%20field%20types.md)
- [Configuring a check-type field's pass/fail (RAG) scoring](Settings/Workspace%20Builder/Configuring%20a%20check-type%20field%27s%20pass-fail%20%28RAG%29%20scoring.md)
- [Configuring records-type field columns and auto-titles](Settings/Workspace%20Builder/Configuring%20records-type%20field%20columns%20and%20auto-titles.md)
- [Attaching a field set to a type](Settings/Workspace%20Builder/Attaching%20a%20field%20set%20to%20a%20type.md)
- [Building a custom form](Settings/Workspace%20Builder/Building%20a%20custom%20form.md)
- [Adding elements to a form page](Settings/Workspace%20Builder/Adding%20elements%20to%20a%20form%20page.md)
- [Managing job types and task types](Settings/Type%20Management/Managing%20job%20types%20and%20task%20types.md)
- [Building job task pipelines and sub-statuses](Settings/Type%20Management/Building%20job%20task%20pipelines%20and%20sub-statuses.md)
- [Configuring project types, record types, and record groups](Settings/Type%20Management/Configuring%20project%20types%2C%20record%20types%2C%20and%20record%20groups.md)
- [Pinning related record types to a record type](Settings/Type%20Management/Pinning%20related%20record%20types%20to%20a%20record%20type.md)
- [Managing ticket types and ticket groups](Settings/Type%20Management/Managing%20ticket%20types%20and%20ticket%20groups.md)
- [Configuring asset, visit, and issue types](Settings/Type%20Management/Configuring%20asset%2C%20visit%2C%20and%20issue%20types.md)
- [Configuring estimate, invoice, and variation types](Settings/Type%20Management/Configuring%20estimate%2C%20invoice%2C%20and%20variation%20types.md)
- [Managing todo types, event types, warning types, and lead sources](Settings/Type%20Management/Managing%20todo%20types%2C%20event%20types%2C%20warning%20types%2C%20and%20lead%20sources.md)
- [Building an automation rule](Settings/Automation/Building%20an%20automation%20rule.md)
- [Restricting an automation rule to specific record types](Settings/Automation/Restricting%20an%20automation%20rule%20to%20specific%20record%20types.md)
- [Common trigger types reference](Settings/Automation/Common%20trigger%20types%20reference.md)
- [Common action types reference](Settings/Automation/Common%20action%20types%20reference.md)
- [Importing data via CSV](Settings/Imports%20%26%20Integrations/Importing%20data%20via%20CSV.md)
- [Monitoring mobile and web uploads](Settings/Imports%20%26%20Integrations/Monitoring%20mobile%20and%20web%20uploads.md)
- [Managing mobile app shortcut links](Settings/Imports%20%26%20Integrations/Managing%20mobile%20app%20shortcut%20links.md)
- [Managing web dashboard links](Settings/Imports%20%26%20Integrations/Managing%20web%20dashboard%20links.md)
- [Monitoring gateway and API messages](Settings/Imports%20%26%20Integrations/Monitoring%20gateway%20and%20API%20messages.md)
- [Creating permission sets (per-module grants and per-type overrides)](Settings/Access%20Control%20%28Roles%20%26%20Permissions%29/Creating%20permission%20sets%20%28per-module%20grants%20and%20per-type%20overrides%29.md)
- [Creating roles and assigning permission sets](Settings/Access%20Control%20%28Roles%20%26%20Permissions%29/Creating%20roles%20and%20assigning%20permission%20sets.md)
- [Managing skills](Settings/Skills%20Administration/Managing%20skills.md)
- [Building skill sets](Settings/Skills%20Administration/Building%20skill%20sets.md)
- [Defining skill requirements](Settings/Skills%20Administration/Defining%20skill%20requirements.md)
- [Creating an SLA type and its escalation thresholds](Settings/SLA%20Configuration/Creating%20an%20SLA%20type%20and%20its%20escalation%20thresholds.md)
- [Defining SLA stage policies](Settings/SLA%20Configuration/Defining%20SLA%20stage%20policies.md)
- [Assigning SLA types to record, project, ticket, and user types](Settings/SLA%20Configuration/Assigning%20SLA%20types%20to%20record%2C%20project%2C%20ticket%2C%20and%20user%20types.md)
- [Configuring SLA working-hour periods](Settings/SLA%20Configuration/Configuring%20SLA%20working-hour%20periods.md)
- [Adding a new team member](Settings/Team%20%26%20Users/Adding%20a%20new%20team%20member.md)
- [Editing a team member's profile and system settings](Settings/Team%20%26%20Users/Editing%20a%20team%20member%27s%20profile%20and%20system%20settings.md)
- [Viewing a team member's overview](Settings/Team%20%26%20Users/Viewing%20a%20team%20member%27s%20overview.md)
- [Managing a user's availability entries](Settings/Team%20%26%20Users/Managing%20a%20user%27s%20availability%20entries.md)
- [Tracking a user's mobile device sessions](Settings/Team%20%26%20Users/Tracking%20a%20user%27s%20mobile%20device%20sessions.md)
- [Reviewing and resolving a mobile session's uploads](Settings/Team%20%26%20Users/Reviewing%20and%20resolving%20a%20mobile%20session%27s%20uploads.md)
- [Managing a user's skill sets](Settings/Team%20%26%20Users/Managing%20a%20user%27s%20skill%20sets.md)
- [Reviewing a user's skill evidence and todos](Settings/Team%20%26%20Users/Reviewing%20a%20user%27s%20skill%20evidence%20and%20todos.md)
- [Sending a push message to a user's mobile device](Settings/Team%20%26%20Users/Sending%20a%20push%20message%20to%20a%20user%27s%20mobile%20device.md)
- [Managing a user's tags and lifecycle status](Settings/Team%20%26%20Users/Managing%20a%20user%27s%20tags%20and%20lifecycle%20status.md)
- [Moving a user through a stage or pipeline](Settings/Team%20%26%20Users/Moving%20a%20user%20through%20a%20stage%20or%20pipeline.md)
- [Browsing team members in a table or pipeline board view](Settings/Team%20%26%20Users/Browsing%20team%20members%20in%20a%20table%20or%20pipeline%20board%20view.md)
- [Managing user types (job roles reference data)](Settings/Team%20%26%20Users/Managing%20user%20types%20%28job%20roles%20reference%20data%29.md)
- [Attaching a pipeline to user types](Settings/Team%20%26%20Users/Attaching%20a%20pipeline%20to%20user%20types.md)

### Tasks
A cross-job, cross-project view of every task assigned across the organisation — not to be confused with the tasks tab on an individual job.

- [Overview — what the Tasks landing page is for](Tasks/_Tasks%20-%20Overview.md)
- [Browsing the tasks landing page](Tasks/Browsing%20the%20tasks%20landing%20page.md)

### Job Tasks
The individual pieces of work a job is broken into, each with its own type, priority, status, RAG tracking, todos, and — for some task types — linked records. All 6 guides are now written; one is currently blocked from human verification by an open app bug (see below).

- [Overview — what a job task is](Job%20Tasks/_Job%20Tasks%20-%20Overview.md)
- [Viewing and updating a job task](Job%20Tasks/Viewing%20and%20updating%20a%20job%20task.md)
- [Deleting a job task](Job%20Tasks/Deleting%20a%20job%20task.md)
- [Updating a job task's status](Job%20Tasks/Updating%20a%20job%20task%27s%20status.md)
- [Tracking a job task's RAG status](Job%20Tasks/Tracking%20a%20job%20task%27s%20RAG%20status.md)
- [Tracking todos and records on a job task](Job%20Tasks/Tracking%20todos%20and%20records%20on%20a%20job%20task.md)
- [Downloading or previewing a job task PDF](Job%20Tasks/Downloading%20or%20previewing%20a%20job%20task%20PDF.md) — currently blocked by [a known bug](Zz%20-%20Known%20Bugs/job-task-download-button-shows-missing-translation-title.md)

### Invoice Exports
Bundling a batch of invoices together to send to payroll or finance, and tracking each invoice's generated export line.

- [Overview — what an Invoice Export is](Invoice%20Exports/_Invoice%20Exports%20-%20Overview.md)
- [Creating a batch invoice export](Invoice%20Exports/Creating%20a%20batch%20invoice%20export.md) — currently blocked by [a known bug](Zz%20-%20Known%20Bugs/creating-an-invoice-export-shows-no-selected-invoices-and-crashes-on-create.md)
- [Viewing and managing an invoice export](Invoice%20Exports/Viewing%20and%20managing%20an%20invoice%20export.md)
- [Bulk-updating invoice statuses within an export](Invoice%20Exports/Bulk-updating%20invoice%20statuses%20within%20an%20export.md)

### Hub - Surveys
Sending out a set of questions through a Hub channel, taking it from draft through approval and publishing, and reviewing the results.

- [Overview — what a Hub survey is](Hub%20-%20Surveys/_Hub%20-%20Surveys%20-%20Overview.md)
- [Creating a survey (announcement) and setting up its questions](Hub%20-%20Surveys/Creating%20a%20survey%20%28announcement%29%20and%20setting%20up%20its%20questions.md)
- [Submitting, approving, and publishing a survey request](Hub%20-%20Surveys/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request.md)
- [Responding to a survey](Hub%20-%20Surveys/Responding%20to%20a%20survey.md)
- [Viewing survey results and individual responses](Hub%20-%20Surveys/Viewing%20survey%20results%20and%20individual%20responses.md) — currently blocked by [a known bug](Zz%20-%20Known%20Bugs/survey-response-drilldown-link-goes-to-wrong-page-and-crashes.md)

### Hub - Pages
OCU One's built-in intranet — reference material like handbooks and policies, nested into a tree of pages with their own review-and-publish workflow.

- [Overview — what a Hub Page is](Hub%20-%20Pages/_Hub%20-%20Pages%20-%20Overview.md)
- [Creating and organizing Hub pages (intranet CMS pages)](Hub%20-%20Pages/Creating%20and%20organizing%20Hub%20pages%20%28intranet%20CMS%20pages%29.md)
- [Editing a Hub page's hero image, featured media, and settings](Hub%20-%20Pages/Editing%20a%20Hub%20page%27s%20hero%20image%2C%20featured%20media%2C%20and%20settings.md)
- [Writing and updating a Hub page's body content inline](Hub%20-%20Pages/Writing%20and%20updating%20a%20Hub%20page%27s%20body%20content%20inline.md)
- [Submitting, approving, rejecting, and publishing a Hub page](Hub%20-%20Pages/Submitting%2C%20approving%2C%20rejecting%2C%20and%20publishing%20a%20Hub%20page.md)
- [Accepting a Hub page (policy/document acknowledgment)](Hub%20-%20Pages/Accepting%20a%20Hub%20page.md)

### Hub - Channels
Topic-based feeds in the Hub for sharing posts and articles, each moving through the same draft → review → publish workflow as a Hub page.

- [Overview — what a Hub Channel is](Hub%20-%20Channels/_Hub%20-%20Channels%20-%20Overview.md)
- [Browsing Hub channels and viewing a channel's feed](Hub%20-%20Channels/Browsing%20Hub%20channels%20and%20viewing%20a%20channel%27s%20feed.md)
- [Creating and configuring a Hub channel](Hub%20-%20Channels/Creating%20and%20configuring%20a%20Hub%20channel.md)
- [Writing and publishing a quick post in a channel](Hub%20-%20Channels/Writing%20and%20publishing%20a%20quick%20post%20in%20a%20channel.md)
- [Writing and publishing a full article in a channel](Hub%20-%20Channels/Writing%20and%20publishing%20a%20full%20article%20in%20a%20channel.md)
- [Acknowledging (marking as read) a post or article](Hub%20-%20Channels/Acknowledging%20%28marking%20as%20read%29%20a%20post%20or%20article.md)

### Estimates & Quotes
Scoping out proposed work and cost on an estimate, then turning it into a quote to send to a client.

- [Overview — what an estimate and a quote are, and how they fit together](Estimates%20%26%20Quotes/_Estimates%20%26%20Quotes%20-%20Overview.md)
- [Viewing and filtering estimates and the estimates pipeline](Estimates%20%26%20Quotes/Viewing%20and%20filtering%20estimates%20and%20the%20estimates%20pipeline.md)
- [Creating a new estimate](Estimates%20%26%20Quotes/Creating%20a%20new%20estimate.md)
- [Viewing an estimate overview and updating status/RAG](Estimates%20%26%20Quotes/Viewing%20an%20estimate%20overview%20and%20updating%20status%20RAG.md)
- [Editing, activating/deactivating, or deleting an estimate](Estimates%20%26%20Quotes/Editing%2C%20activating%20deactivating%2C%20or%20deleting%20an%20estimate.md)
- [Managing products/materials on an estimate](Estimates%20%26%20Quotes/Managing%20products%20materials%20on%20an%20estimate.md) — currently blocked by [a known bug](Zz%20-%20Known%20Bugs/adding-a-product-to-an-estimate-crashes-with-template-is-missing.md)
- [Attaching or detaching jobs on an estimate](Estimates%20%26%20Quotes/Attaching%20or%20detaching%20jobs%20on%20an%20estimate.md)
- [Viewing records attached to an estimate](Estimates%20%26%20Quotes/Viewing%20records%20attached%20to%20an%20estimate.md)
- [Creating and sending a quote (PDF) to a client](Estimates%20%26%20Quotes/Creating%20and%20sending%20a%20quote%20%28PDF%29%20to%20a%20client.md)

### SLAs
Timers attached to a record, project, ticket, or user, tracking how long a piece of work has been outstanding and warning as it gets close to breaching. All 5 guides are now written; one is currently blocked from human verification by an open app bug (see below).

- [Overview — how creating, monitoring, controlling, and browsing SLAs fit together](SLAs/_SLAs%20-%20Overview.md)
- [Creating an SLA on a job or other record](SLAs/Creating%20an%20SLA%20on%20a%20job%20or%20other%20record.md)
- [Monitoring and editing an SLA's progress](SLAs/Monitoring%20and%20editing%20an%20SLA's%20progress.md)
- [Pausing, resuming, restarting, cancelling, or satisfying an SLA](SLAs/Pausing%2C%20resuming%2C%20restarting%2C%20cancelling%2C%20or%20satisfying%20an%20SLA.md)
- [Activating or deactivating an SLA](SLAs/Activating%20or%20deactivating%20an%20SLA.md) — currently blocked by [a known bug](Zz%20-%20Known%20Bugs/sla-activate-deactivate-has-no-ui-entry-point.md)
- [Browsing and filtering all SLAs](SLAs/Browsing%20and%20filtering%20all%20SLAs.md)

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
├── Jobs/                   Jobs guides
│   ├── _Jobs - Overview.md
│   ├── _VERIFICATION.md    verification status for Jobs guides
│   ├── ...guide files
│   └── attachments/        
├── Scheduling/             Scheduling guides (the drag-and-drop scheduler board)
│   ├── _Scheduling - Overview.md
│   ├── _VERIFICATION.md    verification status for Scheduling guides
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
├── Contacts & Addresses/   Contacts & Addresses guides
│   ├── _Contacts & Addresses - Overview.md
│   ├── _VERIFICATION.md    verification status for Contacts & Addresses guides
│   ├── ...guide files
│   └── attachments/        
├── Client Portal/          Client Portal guides
│   ├── _Client Portal - Overview.md
│   ├── _VERIFICATION.md    verification status for Client Portal guides
│   ├── ...guide files
│   └── attachments/        
├── Clients/                Clients guides
│   ├── _Clients - Overview.md
│   ├── _VERIFICATION.md    verification status for Clients guides
│   ├── ...guide files
│   └── attachments/        
├── Public Share Links/     Public Share Links guides
│   ├── _Public Share Links - Overview.md
│   ├── _VERIFICATION.md    verification status for Public Share Links guides
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
│   ├── Journeys/
│   ├── Pipelines & Stages/
│   ├── Groups & Hierarchy/
│   ├── Hub Administration/
│   ├── Visit Scheduling/
│   ├── Scheduling Reference Data/
│   ├── Tags & Notifications/
│   ├── Type Management/
│   ├── Automation/
│   ├── Imports & Integrations/
│   ├── Access Control (Roles & Permissions)/
│   ├── Team & Users/
│   └── Workspace Builder/
├── Tasks/                  Tasks guides
│   ├── _Tasks - Overview.md
│   ├── _VERIFICATION.md    verification status for Tasks guides
│   ├── ...guide files
│   └── attachments/        
├── Job Tasks/              Job Tasks guides
│   ├── _Job Tasks - Overview.md
│   ├── _VERIFICATION.md    verification status for Job Tasks guides
│   ├── ...guide files
│   └── attachments/        
├── Invoice Exports/        Invoice Exports guides
│   ├── _Invoice Exports - Overview.md
│   ├── _VERIFICATION.md    verification status for Invoice Exports guides
│   ├── ...guide files
│   └── attachments/        
├── Hub - Surveys/          Hub - Surveys guides
│   ├── _Hub - Surveys - Overview.md
│   ├── _VERIFICATION.md    verification status for Hub - Surveys guides
│   ├── ...guide files
│   └── attachments/        
├── Hub - Pages/            Hub - Pages guides
│   ├── _Hub - Pages - Overview.md
│   ├── _VERIFICATION.md    verification status for Hub - Pages guides
│   ├── ...guide files
│   └── attachments/        
├── Hub - Channels/         Hub - Channels guides
│   ├── _Hub - Channels - Overview.md
│   ├── _VERIFICATION.md    verification status for Hub - Channels guides
│   ├── ...guide files
│   └── attachments/        
├── Leads/                  Leads guides
│   ├── _Leads - Overview.md
│   ├── _VERIFICATION.md    verification status for Leads guides
│   ├── ...guide files
│   └── attachments/        
├── Permits/                Permits guides (permits and the defects raised against them)
│   ├── _Permits - Overview.md
│   ├── _VERIFICATION.md    verification status for Permits guides
│   ├── ...guide files
│   └── attachments/        
├── Variations (Change Projects)/   Variations guides
│   ├── _Variations (Change Projects) - Overview.md
│   ├── _VERIFICATION.md    verification status for Variations guides
│   ├── ...guide files
│   └── attachments/        
├── Visits/                 Visits guides
│   ├── _Visits - Overview.md
│   ├── _VERIFICATION.md    verification status for Visits guides
│   ├── ...guide files
│   └── attachments/        
├── Estimates & Quotes/     Estimates & Quotes guides
│   ├── _Estimates & Quotes - Overview.md
│   ├── _VERIFICATION.md    verification status for Estimates & Quotes guides
│   ├── ...guide files
│   └── attachments/        
├── SLAs/                   SLAs guides
│   ├── _SLAs - Overview.md
│   ├── _VERIFICATION.md    verification status for SLAs guides
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

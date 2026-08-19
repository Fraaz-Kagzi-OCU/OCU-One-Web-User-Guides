# User Guide Documentation Progress

Tracks every end-user-facing feature/workflow in ocu-one-web (OCU One / Jobstra) that needs a how-to guide. Seeded by walking the actual controllers/views/routes, cross-referenced against `FraazNotes/codebase/` where available. Status starts `todo` for every row; `documented_at` is filled with the actual date (YYYY-MM-DD) the guide was written once it's done, and `Release` with the release version of the codebase at that time (`git describe --tags <sha>`, e.g. `v2026.08.02`) — so at a glance you can tell both when a guide was last written and how many releases old (and how possibly stale) it now is.

**Audience key:** `FE` = Field Engineer (mobile, on-site) · `Ops` = Office/Operations staff · `Sales` = Sales/BD · `Fin` = Finance/Commercial · `Mgr` = Manager/Approver · `Admin` = Tenant system admin (Settings) · `Ext` = External (client portal / public share links) · `All` = any authenticated user · `OCU` = OCU's own internal platform team, not a customer persona. Rows can list more than one where a workflow spans roles.

## List Views & Filtering

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
| ----------------------------------------------------- |-------| -------- | ------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------- | ----------- |
| Filtering a list view by a field | Views | Ops, FE | FiltersController#new/#autocomplete; filters/*_filter_component | done | Jobs list filtered by "Status = Booked" (no "Scheduled" status exists in the app; "Booked" is the closest real status) and a created-date range of the last 7 days | 4 | 2026-08-16 | v2026.08.02 |
| Removing or updating an active filter | Views | Ops, FE | filters/filter_component (remove/update) | done | Existing "Owner" filter chip on the Tickets list changed from Priya Nair to Marcus Webb, then removed (no "Priority" field exists on Tickets in the app) | 2 | 2026-08-16 | v2026.08.02 |
| Customizing which columns appear in a list/table view | Views | Ops | ColumnsController#new/#autocomplete; columns/column_component; scenes/view/view_options_component | done | Projects list with columns Reference, Total Price (Planned), Client Lead added then reordered (no literal "Project Number"/"Total (ex VAT)" fields exist; these are the closest real on-screen equivalents) | 4 | 2026-08-16 | v2026.08.02 |
| Saving current filters/columns as a new personal view | Views | Ops, FE | ViewsController#create; scenes/view/view_options_component | done | Filtered Jobs list ("Status = In Progress", "Assigned to = me") saved as new view "My Active Jobs" | 3 | 2026-08-16 | v2026.08.02 |
| Renaming and updating an existing saved view | Views | Ops | ViewsController#update | done | Renaming view "Overdue Tickets" to "Overdue Tickets - This Week" after adding a Created-at filter (no due-date field exists on Tickets) | 2 | 2026-08-16 | v2026.08.02 |
| Switching between saved views on a list screen | Views | Ops, FE | ViewsController#show; scenes/view_component (view tabs) | done | Jobs list with tabs "Default view", "My Active Jobs" (favourited), "Unscheduled Jobs" | 2 | 2026-08-16 | v2026.08.02 |
| Favouriting a saved view | Views | Ops, FE | ViewsController#favourite | done | Favouriting "Unscheduled Jobs" view (yellow star badge) | 1 | 2026-08-16 | v2026.08.02 |
| Managing all your saved views ("My Views") | Views | Ops | ViewsController#index/#edit/#move/#activate/#deactivate/#destroy | done | User with 5 saved views across Jobs/Tickets, one deactivated ("Old Backlog"), reordering two views | 4 | 2026-08-16 | v2026.08.02 |
| Managing saved views (admin) | Views | Admin | Settings::ViewsController#index/#filter/#edit/#update/#activate/#deactivate/#destroy | done | Admin Marcus renaming Priya Nair's "High Priority Tickets" to "High Priority Tickets - Reviewed" and deactivating her "Unscheduled Jobs" view | 7 | 2026-08-16 | v2026.08.02 |

## Media & Attachments

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Choosing which attachments appear on a PDF export |  | Ops, Fin | SelectMediaController#show/#update; select_media_controller.js | todo | Job with 4 attached site photos, 2 shown-by-default, 1 toggled off for this export only | 3 |  |  |
| Removing an uploaded file attachment |  | Ops, FE | AttachmentsController#destroy (generic ActiveStorage purge, no standalone screen) | todo | Comment draft with a mistakenly attached "old_invoice.pdf" removed before submitting | 1 |  |  |

## Labels

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing your personal labels ("My Labels") |  | Ops | LabelsController#index | todo | User with active labels "Urgent", "Follow Up", "Client VIP" and one inactive label "Old Campaign" | 2 |  |  |
| Creating a new label |  | Ops | LabelsController#new/#create | todo | New label "Follow Up", orange, in label group "Client Comms" | 2 |  |  |
| Editing, deactivating, or deleting a label |  | Ops | LabelsController#edit/#update/#deactivate/#activate/#destroy | todo | Deactivating the "Old Campaign" label so it drops out of tagging autocomplete | 2 |  |  |

## Todos & Checklists

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating, editing, and managing a standalone todo |  | Ops | TodosController#index/show/new/create/edit/update/destroy | todo | Todo Types "Safety Check" and "Follow-up Call"; todo "Replace faulty RCD on Panel 3" (High priority, due tomorrow, assigned to Dave Chen, ref "JOB-4021") | 6 |  |  |
| Changing a todo's status from its detail page |  | Ops, FE | TodosController#show/#main/#status | todo | Todo "Follow-up call with tenant re: leak" moved from "In Progress" to "Done" | 3 |  |  |
| Viewing todos as a pipeline (kanban board) |  | Ops, Mgr | Todos::PipelinesController#index/show | todo | 12 open todos spread across Pending/In Progress/On Hold/Done columns | 3 |  |  |
| Adding and managing todos on a job/project/record (Todos tab) |  | Ops, FE | TodoableTodosController#index/new/create/edit/update/status/move/destroy | todo | Job "Annual Boiler Service - 14 Elm St" with 3 todoable todos at different statuses | 6 |  |  |
| Viewing and prioritising your assigned todos |  | FE, Ops | Assignments::TodosController#show/#completed/#status/#prioritise | todo | User "Sarah Ahmed" with 4 assigned todos across 2 jobs, 1 prioritised, plus a Completed tab with 3 done items | 2 |  |  |
| Adding a checklist to a record |  | Ops, FE | ChecklistsController#create/#update/#destroy | todo | Project "Install new boiler - 22 Park Rd" checklist "Pre-Install Safety Checks" with 5 items, 2 checked (40% progress) | 3 |  |  |
| Adding, checking off, and removing checklist items |  | FE, Ops | ChecklistItemsController#create/#update/#toggle/#destroy | todo | Checklist item "Isolate mains water supply" toggled from unchecked to checked | 2 |  |  |

## Documents

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Uploading and organising documents on a record |  | Ops, FE | DocsController#index/new/create/drop_create/edit/update | todo | Job Docs tab with folder "Certificates" containing "Gas_Safety_Certificate.pdf" (expires in 11 months) plus a loose photo dropped in via drag-and-drop | 6 |  |  |
| Previewing, replacing, and annotating a document |  | Ops, FE | DocsController#show/#preview/#update/#update_notes/#toggle_eager_load | todo | "Gas_Safety_Certificate.pdf" previewed inline, note added ("Signed by engineer J. Patel on 12 Aug 2026"), then replaced with a rescanned copy | 4 |  |  |
| Viewing a document's version history |  | Ops | DocVersionsController#index | todo | "Method_Statement.pdf" with 3 versions uploaded by 3 different engineers, version 3 marked current | 2 |  |  |
| Commenting on a document |  | Ops, FE | (Comments::CommentsComponent rendered on a Doc — see Collaboration) | todo | "Risk_Assessment.pdf" with 2 comments discussing a missing signature | 1 |  |  |
| Creating and configuring a folder |  | Ops | FoldersController#new/create/edit/update/destroy | todo | Folder "Insurance Documents" (blue, warn-if-empty on, default expiry 12 months) under Asset "Van - REG123", later renamed | 3 |  |  |

## Collaboration

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Commenting on any record, with replies and internal notes |  | Ops, FE | CommentsController#create | todo | Ticket #T-889 "Boiler not igniting" with a customer comment, an engineer reply, and one internal-only note "Waiting on part delivery, ETA Friday" | 3 |  |  |
| Reacting to a comment |  | Ops, FE | ReactionsController#create | todo | Comment "Job completed and signed off" with 3 thumbs-up and 1 heart reaction | 2 |  |  |
| Viewing a record's activity feed |  | Ops, FE | ActivitiesController#index | todo | Project "Replace guttering - 8 Mill Lane" activity feed: created, status changed, document added, paginated at 10/page | 2 |  |  |

## Records

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing records by category (Record Groups hub) |  | Ops, FE | RecordGroupsController#index/show | todo | Record Group "Health & Safety Incidents" (12 record types) containing Record Type "Near Miss Report" with 24 open records | 2 |  |  |

## Assets

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing assets in the drilldown tree view |  | Ops, FE | Assets::DrilldownController#index/#filter | todo | "Street Cabinet" asset with 3 child "Pole" assets, one having its own sub-asset | 3 |  |  |
| Browsing assets in the table (list) view |  | Ops, FE | AssetsController#index/#filter | todo | 10 assets across 3 asset types, one filtered search for "Cabinet" | 2 |  |  |
| Viewing the assets board (pipeline) |  | Ops, Mgr | Assets::PipelinesController#index/show | todo | Pipeline "Cabinet Lifecycle" with stages New/In Service/Decommissioned, 2 assets each | 2 |  |  |
| Using the assets landing page |  | Ops, FE | AssetsController#landing | todo | N/A — static entry page | 1 |  |  |
| Creating an asset |  | Ops | AssetsController#new/#create | todo | New asset type "Street Cabinet" named "Cabinet 42", site "Manchester Depot" | 3 |  |  |
| Editing or deleting an asset |  | Ops | AssetsController#edit/#update/#destroy | todo | Asset "Cabinet 42" with 2 sub-assets; edit description, then cascade-delete | 2 |  |  |
| Viewing an asset's overview page |  | Ops, FE | AssetsController#show/#main | todo | Asset "Cabinet 42" with parent, 2 children, 3 activity entries, 2 comments, 1 doc | 4 |  |  |
| Viewing and adding sub-assets |  | Ops | AssetsController#sub_assets | todo | Asset "Cabinet 42" with sub-assets "Fuse Board A"/"Fuse Board B" | 2 |  |  |
| Viewing an asset's Visits tab |  | Ops, FE | AssetsController#visits | todo | Asset with 1 completed, 1 overdue, 1 scheduled future visit | 2 |  |  |
| Scheduling a maintenance visit plan for an asset |  | Ops | AssetVisitPlansController#new/#create | todo | Asset "Cabinet 42" attach visit plan "Quarterly Safety Check" starting 2026-09-01 | 3 |  |  |
| Removing a visit plan from an asset |  | Ops | AssetVisitPlansController#destroy | todo | Detach "Quarterly Safety Check" from "Cabinet 42" | 1 |  |  |
| Viewing an asset's linked jobs |  | Ops, FE | AssetsController#jobs | todo | Asset linked to 5 jobs across statuses | 1 |  |  |
| Viewing an asset's to-dos |  | Ops, FE | AssetsController#todos | todo | Asset with 2 open, 1 completed todo | 1 |  |  |
| Viewing an asset's records |  | Ops, FE | AssetsController#records | todo | Asset with 1 attached "Electrical Safety Certificate" record | 1 |  |  |
| Viewing and raising issues against an asset |  | Ops, FE | AssetsController#issues; IssuesController#new | todo | Asset with 1 open issue "Cabinet door damaged"; raise "Graffiti on cabinet" | 3 |  |  |
| Moving an asset through pipeline stages |  | Ops | AssetsController#stage | todo | Asset "Cabinet 42" moved In Service → Decommissioned | 2 |  |  |

## Visits

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing visits |  | Ops, FE | VisitsController#index/#filter | todo | 5 visits: 2 overdue pending, 2 completed, 1 in progress, across 2 visit types | 2 |  |  |
| Creating a visit |  | Ops | VisitsController#new/#create | todo | New visit type "Quarterly Safety Check" for asset "Cabinet 42" | 3 |  |  |
| Editing or deleting a visit |  | Ops | VisitsController#edit/#update/#destroy | todo | Edit description; delete a cancelled visit | 2 |  |  |
| Viewing a visit's overview page |  | Ops, FE | VisitsController#show/#main | todo | Visit "Quarterly Check - Cabinet 42", in_progress, RAG amber | 3 |  |  |
| Changing a visit's status |  | Ops, FE | VisitsController#status | todo | Unbooked visit "Annual Inspection" pending → in_progress; booked-job visit shows dropdown disabled | 2 |  |  |
| Updating a visit's RAG status |  | Ops, FE | VisitsController#rag_status | todo | RAG-enabled visit type changed green → red | 1 |  |  |
| Attaching or detaching a visit from a job |  | Ops | VisitsController#attach_job/#detach_job | todo | Visit "Annual Inspection" attached to Job #1042, then detached | 2 |  |  |
| Viewing a visit's to-dos |  | Ops, FE | VisitsController#todos | todo | Visit with 1 open todo "Take before photos" | 1 |  |  |
| Viewing and raising issues on a visit |  | Ops, FE | VisitsController#issues; IssuesController#new | todo | Visit with 1 issue "Cabinet lock broken"; raise "Missing signage" | 3 |  |  |

## Issues

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing issues |  | Ops, FE | IssuesController#index/#filter | todo | 6 issues across 3 issue types and pipeline stages | 2 |  |  |
| Viewing the issues board (pipeline) |  | Ops, Mgr | Issues::PipelinesController#index/show | todo | Pipeline "Issue Triage" with stages Open/Investigating/Resolved | 2 |  |  |
| Raising an issue |  | Ops, FE | IssuesController#new/#create | todo | Issue type "Damage" raised against asset "Cabinet 42" | 3 |  |  |
| Editing or deleting an issue |  | Ops | IssuesController#edit/#update/#destroy | todo | Edit description; delete a duplicate issue | 2 |  |  |
| Viewing an issue's overview page |  | Ops, FE | IssuesController#show/#main | todo | Issue "Cabinet door damaged" via a visit, stage "Investigating" | 3 |  |  |
| Resolving an issue (moving through pipeline stages) |  | Ops | IssuesController#stage | todo | Issue "Cabinet door damaged" moved Open → Resolved | 2 |  |  |
| Updating an issue's RAG status |  | Ops | IssuesController#rag_status | todo | RAG-enabled issue set to red (critical) | 1 |  |  |
| Viewing an issue's to-dos |  | Ops, FE | IssuesController#todos | todo | Issue with 2 open todos | 1 |  |  |
| Viewing an issue's records |  | Ops, FE | IssuesController#records | todo | Issue with 1 attached inspection record | 1 |  |  |

## Permits

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Using the permits landing page |  | Ops | PermitsController#landing | todo | N/A — static entry page | 1 |  |  |
| Browsing permits |  | Ops | PermitsController#index/#filter | todo | 5 permits: draft, submitted, approved | 2 |  |  |
| Viewing the permits board (pipeline) |  | Ops, Mgr | Permits::PipelinesController#index/show | todo | Permits across Draft/Submitted/Approved/Closed, 2 per stage | 2 |  |  |
| Creating a permit for a project |  | Ops | PermitsController#new/#create/#duration | todo | Project "Fibre Install - Oak St"; permit type "Major", start 2026-09-01, duration 5 days | 4 |  |  |
| Editing or deleting a permit |  | Ops | PermitsController#edit/#update/#destroy | todo | Edit working hours/traffic management; delete cancelled permit | 2 |  |  |
| Viewing a permit's overview page |  | Ops, FE | PermitsController#show/#main | todo | Permit "Permit for Fibre Install - Oak St", Submitted, traffic sensitive | 4 |  |  |
| Changing a permit's status |  | Ops | PermitsController#status | todo | Permit moved Draft → Submitted | 2 |  |  |
| Viewing a permit's defects tab |  | Ops | PermitsController#defects | todo | Permit with 1 existing defect "Signage missing" | 2 |  |  |
| Viewing a permit's linked project |  | Ops | PermitsController#orders | todo | Permit linked to project "Fibre Install - Oak St" | 1 |  |  |
| Viewing a permit's linked jobs |  | Ops, FE | PermitsController#jobs | todo | Permit linked to 2 jobs on the same project | 1 |  |  |
| Linking or unlinking a permit to a job |  | Ops | JobPermitsController#create/#destroy | todo | Job linked to permit "Permit for Fibre Install - Oak St", then unlinked | 1 |  |  |
| Viewing a permit's records |  | Ops | PermitsController#records | todo | Permit with 1 attached record | 1 |  |  |
| Browsing defects |  | Ops | DefectsController#index | todo | 5 defects of varying type/status across 3 permits | 2 |  |  |
| Raising a defect against a permit |  | Ops, FE | DefectsController#new/#create | todo | Permit "Permit for Fibre Install - Oak St"; defect type "D1", notice "Notice 123" | 3 |  |  |
| Editing or deleting a defect |  | Ops | DefectsController#edit/#update/#destroy | todo | Mark inspector_contacted true; delete a resolved defect | 2 |  |  |
| Viewing a defect |  | Ops, FE | DefectsController#show | todo | Defect "Signage missing", status Open | 2 |  |  |
| Changing a defect's status |  | Ops | DefectsController#status | todo | Defect "Signage missing" moved Open → Closed | 2 |  |  |

## Jobs

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating a job |  | Ops | JobsController#new/#create | todo | 3 job types with different defaults, 1 open project, 2 clients, 1 field engineer | 4 |  |  |
| Creating a job from existing visits |  | Ops | JobsController#new_with_visits/#create_with_visits | todo | 5 pending unbooked visits, 2 eligible job types | 3 |  |  |
| Viewing job details |  | Ops, FE | JobsController#show/#main | todo | 1 booked job with allocated user, project, 3 tasks, 2 todos, address, 2 activity entries | 3 |  |  |
| Editing a job |  | Ops | JobsController#edit/#update | todo | Existing job whose job type allows editing allocation/rate book | 3 |  |  |
| Deleting (archiving) a job |  | Ops | JobsController#destroy | todo | 1 unlinked job + 1 job linked to a locked project (failure path) | 2 |  |  |
| Changing a job's status |  | Ops, FE | JobsController#status | todo | Unallocated job (warning path); fully-booked job with sub-statuses "On Site"/"Delayed" | 3 |  |  |
| Unbooking a job |  | Ops | JobsController#unbook/#status | todo | Job in "booked" status with a scheduled start time | 2 |  |  |
| Tracking a job's RAG health status |  | Ops, Mgr | JobsController#rag_status | todo | 3 jobs set red/amber/green respectively | 2 |  |  |
| Managing secondary allocated users on a job |  | Ops | JobsController#promote_secondary_allocated_user | todo | Job with secondary users enabled and 2 extra crew members | 3 |  |  |
| Downloading or previewing a job PDF |  | Ops, FE | JobsController#download | todo | 1 default-template job, 1 job-type with a custom PDF template | 2 |  |  |
| Attaching or detaching an estimate to a job |  | Ops, Sales | JobsController#attach_estimate/#detach_estimate | todo | 1 approved unlinked estimate; 1 job already linked to a different estimate | 3 |  |  |
| Allocating products to a job |  | Ops | JobsController#products | todo | Job type with product allocations enabled, rate book with 5 products | 2 |  |  |
| Tracking todos on a job |  | Ops, FE | JobsController#todos | todo | Job with 4 todos, mixed complete/incomplete | 2 |  |  |
| Managing visits attached to a job |  | Ops | JobsController#visits | todo | Job with 2 attached visits, 3 unattached pending visits | 2 |  |  |
| Viewing assets linked to a job |  | Ops, FE | JobsController#assets | todo | Job whose site address has 3 registered assets | 1 |  |  |
| Viewing issues linked to a job |  | Ops, FE | JobsController#issues | todo | Job with 2 open issues (one via asset, one via visit) | 1 |  |  |
| Managing records on a job |  | Ops, FE | JobsController#records | todo | Job type with 2 custom record types ("Risk Assessment", "Completion Certificate") | 2 |  |  |
| Linking permits to a job |  | Ops | JobsController#permits; JobPermitsController#create/#destroy | todo | Job linked to a project with 2 active permits; 1 already-linked to detach | 2 |  |  |
| Browsing and filtering the jobs list |  | Ops | JobsController#index/#filter/#autocomplete | todo | 10+ jobs across statuses/types/users, 1 saved view | 2 |  |  |
| Viewing jobs on a pipeline (kanban) board |  | Ops, Mgr | Jobs::PipelinesController#show/#filter | todo | 8 jobs across 4+ status columns | 3 |  |  |

## Job Tasks

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and updating a job task |  | Ops, FE | TasksController#show/#main/#edit/#update | todo | Job with 2 tasks of different types, one allocated and booked | 3 |  |  |
| Deleting a job task |  | Ops | TasksController#destroy | todo | Task not marked required/blocking | 1 |  |  |
| Updating a job task's status |  | Ops, FE | TasksController#status | todo | Task in "new" status with 2 possible next statuses | 2 |  |  |
| Tracking a job task's RAG status |  | Ops, Mgr | TasksController#rag_status | todo | Task set amber, then changed | 1 |  |  |
| Tracking todos and records on a job task |  | Ops, FE | TasksController#todos/#records | todo | Task with 3 todos; task type with records enabled and 1 custom record type | 2 |  |  |
| Downloading or previewing a job task PDF |  | Ops, FE | TasksController#download | todo | Completed task with description and booked duration | 2 |  |  |

## Tasks

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing the tasks landing page |  | Ops | TasksLandingController#index | todo | 10+ tasks spanning multiple jobs/projects, task types, statuses | 2 |  |  |

## Scheduling

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Using the scheduling board (navigation, zoom, time span, user search) |  | Ops | SchedulerController#show; Scheduler::UsersController#index/#availability | todo | 5 field users with varied availability over a 3-day range, each with a job on their row | 4 |  |  |
| Booking a job on the scheduler |  | Ops | Scheduler::JobsController#book/#unallocated | todo | 3 "ready" unbooked jobs of different types, 2 users with free slots | 4 |  |  |
| Creating a job directly on the scheduler |  | Ops | Scheduler::JobsController (drag-create) | todo | 1 user with an open slot; 2 job types to pick from | 3 |  |  |
| Unbooking a job from the scheduler |  | Ops | Scheduler::JobsController#unbook | todo | 1 job in "booked" status assigned to a user | 2 |  |  |
| Unallocating a job from a user on the scheduler |  | Ops | Scheduler::JobsController#unallocate | todo | 1 booked job + 1 in-progress job, each allocated (to see the confirm-dialog path) | 3 |  |  |
| Editing a job from the scheduler |  | Ops | Scheduler::JobsController#edit/#update | todo | 1 job in "ready" status on the board | 2 |  |  |
| Bulk-booking many jobs |  | Ops | JobsController#book_many_pick/#book_many_book | todo | 6 unbooked jobs in the visible date range across 3 job types | 3 |  |  |

## Map

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing the live user map |  | Ops | MapController#show; Map::UsersController#index | todo | 4 field users with distinct GPS coordinates, 1 user with no location set | 3 |  |  |

## Assignments (My Work Inbox)

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing my assigned jobs |  | FE, Ops | AssignmentsController#jobs | todo | 3 jobs of different types assigned to the current user, 1 non-default status | 1 |  |  |

## Projects

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing and filtering the projects list |  | Ops | OrdersController#index | todo | Project type "Civils Installation" with 15 projects across 3 stages, 1 red-RAG project with 2 open warnings | 3 |  |  |
| Exploring projects as a relationship graph |  | Ops | Orders::ExploresController#index/#filter | todo | Parent project "Framework Contract #500" with children "Store #12 Refit"/"Store #45 Refit" | 3 |  |  |
| Browsing projects in drilldown (hierarchy) view |  | Ops | Orders::DrilldownController#index/#filter | todo | Root project "Network Upgrade Phase 2" with 4 children, one with 2 grandchildren | 3 |  |  |
| Viewing and moving projects on the pipeline (kanban) board |  | Sales, Ops | Orders::PipelinesController#index/show; OrdersController#stage | todo | "Sales" pipeline: Enquiry/Quoted/Won/Lost with 8 projects; drag one Quoted → Won | 4 |  |  |
| Creating a new project |  | Sales, Ops | OrdersController#new/#create | todo | Project type "Civils Installation" for client "Anglian Water", rate book "2026 Civils Rates" v3 | 5 |  |  |
| Creating a sub-project (child project) under an existing project |  | Ops | OrdersController#new (parent_id) | todo | Parent project "Streetworks Renewal - Zone 4" with new sub-project "Zone 4 - Section B" | 3 |  |  |
| Viewing a project's overview (main tab) |  | Ops | OrdersController#show/#main | todo | Project "123 High Street Resurfacing" with parent, 2 children, 1 SLA in jeopardy, 3 activity entries | 4 |  |  |
| Editing a project's details |  | Ops | OrdersController#edit/#update | todo | Project's rate book changed and next-action date moved | 3 |  |  |
| Deleting (archiving) a project |  | Ops | OrdersController#destroy | todo | Completed project with no open jobs, deleted | 2 |  |  |
| Managing sub-projects on the Children tab |  | Ops | OrdersController#children | todo | Project "Streetworks Renewal - Zone 4" with 3 child projects, one over budget | 2 |  |  |
| Viewing key fields rolled up from jobs and tasks |  | Ops, Mgr | OrdersController#key_fields/#key_fields_job | todo | Project with 3 jobs each having a "Cable Length Installed (m)" key field | 3 |  |  |
| Managing the project plan (project groups / checklist tab) |  | Ops, FE | OrdersController#order_groups; OrderGroupsController CRUD | todo | Project with groups "Pre-Start Checks" and "Snagging Items" | 3 |  |  |
| Adding a new checklist item (job or record) to a project group |  | Ops | OrderGroupTodosController#new/#create (mode=new) | todo | Group "Pre-Start Checks" gets blank to-do or new linked Job "Site Induction - Riverside" | 3 |  |  |
| Attaching an existing job or record to a project group checklist |  | Ops | OrderGroupTodosController#jobs/#records/#create (mode=existing) | todo | Search "Boiler" → attach existing Job "JOB-8842" to group "Snagging Items" | 3 |  |  |
| Completing, editing, reordering, and removing checklist items |  | Ops, FE | OrderGroupTodosController#toggle/#update/#move/#destroy | todo | Toggle and edit a checklist item's description | 3 |  |  |
| Viewing and attaching records (surveys/inspections) to a project |  | Ops, FE | OrdersController#records | todo | Project with 2 "Pre-Works Survey" records and 1 "H&S Inspection" record | 3 |  |  |
| Viewing and creating jobs from a project |  | Ops | OrdersController#jobs | todo | Project with 6 active jobs across 2 engineers, one overdue | 3 |  |  |
| Viewing and filtering tasks on a project |  | Ops | OrdersController#tasks; Orders::TasksController#filter | todo | Project filtered by Status="In Progress", Task Type="Site Survey" | 2 |  |  |
| Creating a new task under a project |  | Ops | Orders::TasksController#new/#create | todo | Task type "Site Survey" named "Initial roof survey" with product allocation | 3 |  |  |
| Viewing and working a task's overview tab |  | Ops, FE | Orders::TasksController#show/#main | todo | Task status changed Not Started → In Progress; download PDF | 4 |  |  |
| Managing a task's product allocations tab | PVA | Ops | Orders::TasksController#products | done | Task planned quantity for "Solar Panel 400W" changed 12 → 14 | 2 | 2026-08-13 | v2026.08.02 |
| Editing or deleting a task |  | Ops | Orders::TasksController#edit/#update/#destroy | todo | Rename a task; delete a duplicate task | 2 |  |  |
| Viewing and managing product allocations on a project | PVA | Ops, Fin | OrdersController#products | done | Project allocated 200m "Ducting 100mm" and 15 "Chamber Cover" | 3 | 2026-08-13 | v2026.08.02 |
| Viewing a project's commercial stats dashboard | PVA | Fin, Mgr | OrdersController#stats | done | Project with £45k planned, £38.2k actual, £30k invoiced, £2.5k pending variations | 3 | 2026-08-13 | v2026.08.03 |
| Viewing and creating estimates on a project |  | Sales, Fin | OrdersController#estimates | todo | Project with 1 draft and 1 approved estimate (£12,400) | 2 |  |  |
| Viewing and creating invoices on a project |  | Fin | OrdersController#invoices | todo | Project with 1 sent invoice (£15,000) and 1 unsent draft (£8,200) | 2 |  |  |
| Viewing and raising variations on a project |  | Fin, Ops | OrdersController#variations | todo | Project with 1 pending (£2,500) and 1 approved (£900) variation | 2 |  |  |
| Viewing and attaching permits to a project |  | Ops | OrdersController#permits | todo | Project with an active street-works permit expiring in 10 days | 2 |  |  |
| Linking related projects together |  | Ops | OrdersController#linked_orders; OrderOrderablesController | todo | Link "Project #2201" to related "Project #2202" | 2 |  |  |
| Viewing and managing to-dos on a project |  | Ops | OrdersController#todos | todo | Project with 3 open and 2 completed todos | 2 |  |  |
| Setting a project's RAG status |  | Ops, Mgr | OrdersController#rag_status | todo | Project changed Amber → Red after a missed milestone | 2 |  |  |
| Locking and unlocking jobs on a project |  | Ops | OrdersController#job_lock/#job_unlock | todo | Project with 2 booked jobs, locked (auto-unbooked), then unlocked | 3 |  |  |
| Downloading or previewing a project PDF |  | Ops, Fin | OrdersController#download | todo | Custom-PDF-template project downloaded with 2 photos hidden | 3 |  |  |

## Projects > Warnings

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Raising a warning against a project |  | Ops | WarningsController#new/#create | todo | Project #10432, warning type "Access Restricted" | 2 |  |  |
| Editing a warning's message |  | Ops | WarningsController#edit/#update | todo | Correct wording on an acknowledged warning | 1 |  |  |
| Acknowledging and closing a warning |  | Ops, Mgr | WarningsController#acknowledge/#close | todo | Acknowledge "Access Restricted", then close once resolved | 2 |  |  |

## Records

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing all record type categories (Record Groups landing page) |  | Ops, FE | RecordGroupsController#index | todo | Record Groups "H&S Inspections", "Customer Complaints", "Vehicle Checks" with counts | 2 |  |  |
| Drilling into a Record Group to pick a record type |  | Ops, FE | RecordGroupsController#show | todo | Group "Vehicle Checks" with types "Daily Vehicle Checklist"/"Defect Report" | 2 |  |  |
| Viewing the Records list/index (table view) |  | Ops | RecordsController#index | todo | Records "Substation Inspection #1042" (Green), "Near Miss - Forklift" (Amber) | 3 |  |  |
| Filtering and searching records in the list view |  | Ops | RecordsController#index (filters) | todo | Filter by Record Type "Site Audit" and RAG "Red" | 2 |  |  |
| Choosing a record type before creating a new record |  | Ops, FE | RecordsController#new (type picker) | todo | Choosing "Site Audit" under "Vehicle Checks" | 2 |  |  |
| Creating a new record |  | Ops, FE | RecordsController#new/#create | todo | Record "Q3 Substation Safety Audit", type "Site Audit", assigned "Jane Smith" | 4 |  |  |
| Viewing a record's Overview/Main tab |  | Ops, FE | RecordsController#show/#main | todo | Record "Substation Inspection #1042" with fields, RAG Green | 4 |  |  |
| Editing a record's details |  | Ops, FE | RecordsController#edit/#update | todo | Update description and next-action-due date | 2 |  |  |
| Deleting (archiving) a record |  | Ops | RecordsController#destroy | todo | Delete duplicate record | 2 |  |  |
| Setting a record's RAG status |  | Ops, FE | RecordsController#rag_status | todo | Record RAG Green → Red after failed check | 1 |  |  |
| Managing todos on a record |  | Ops, FE | RecordsController#todos | todo | Todo "Replace damaged guardrail" due 2026-08-25 | 2 |  |  |
| Managing assets linked to a record |  | Ops, FE | RecordsController#assets | todo | Link Asset "Substation Transformer T-204" | 2 |  |  |
| Managing jobs linked to a record |  | Ops | RecordsController#jobs | todo | Create Job "Repair guardrail at Substation 12" from record | 2 |  |  |
| Managing issues linked to a record |  | Ops, FE | RecordsController#issues | todo | Attach issue "Guardrail corrosion beyond tolerance" | 2 |  |  |
| Managing estimates linked to a record |  | Sales, Fin | RecordsController#estimates | todo | Estimate "EST-3391" £1,250 attached | 2 |  |  |
| Managing clients linked to a record |  | Ops, Sales | RecordsController#clients | todo | Client "Northgate Property Management Ltd" attached | 2 |  |  |
| Managing projects linked to a record |  | Ops | RecordsController#orders | todo | Project "ORD-2044" attached | 2 |  |  |
| Managing variations linked to a record |  | Fin | RecordsController#variations | todo | Variation "VAR-118" attached | 2 |  |  |
| Managing invoices linked to a record |  | Fin | RecordsController#invoices | todo | Invoice "INV-5502" £1,250 attached | 2 |  |  |
| Managing linked records (record-to-record relationships) |  | Ops, FE | RecordsController#linked_records; RecordRecordablesController | todo | Link follow-up inspection record to original | 2 |  |  |
| Managing child records of a specific type ("Records" tab) |  | Ops, FE | RecordsController#records | todo | Attach child "Checklist Item - Fire Extinguisher Check" to parent record | 2 |  |  |
| Attaching and detaching a permit on a record |  | Ops | RecordsController#attach_permit/#detach_permit | todo | Attach then detach Permit "PTW-9081" | 2 |  |  |
| Downloading a record as PDF or Word document |  | Ops, FE | RecordsController#download/#download_word_doc | todo | PDF with custom "SHEQ Inspection" template; Word doc export | 3 |  |  |
| Changing and reordering a record's pipeline stage |  | Ops | RecordsController#stage/#move | todo | Move record Scheduled → Completed; reorder within a column | 2 |  |  |
| Viewing and filtering the Records pipeline/kanban board |  | Ops, Mgr | Records::PipelinesController#index/show/#filter | todo | Pipeline "Audit Workflow": Scheduled/In Progress/Completed | 3 |  |  |

## Tickets

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing the ticket type catalog (ticket groups landing page) | Tickets | Ops | TicketGroupsController#index | done | Groups "HR", "Marketing", "Payroll", "IT Security", "Skills Hub" (matches production's real ticket groups) | 2 | 2026-08-18 | v2026.08.04 |
| Viewing ticket types within a ticket group | Tickets | Ops | TicketGroupsController#show | done | Group "HR" with types "Annual Leave"/"Absence & Sickness"/"Benefits"/"General HR Query" | 2 | 2026-08-18 | v2026.08.04 |
| Viewing the tickets list/table | Tickets | Ops | TicketsController#index/#filter | done | Ticket "Suspicious phishing email reported by employee", type "Incident", ref "INC-180826-2"; filtered by Ticket Groups = "IT Security" | 3 | 2026-08-18 | v2026.08.04 |
| Creating a new ticket | Tickets | Ops | TicketsController#new/#create | done | Ticket type "Incident" (IT Security group), title "Suspicious phishing email reported by employee", reference left blank and auto-generated as "INC-180826-2", assigned to Priya Nair, pipeline "Service Desk" | 3 | 2026-08-18 | v2026.08.04 |
| Viewing ticket details (main tab) | Tickets | Ops, FE | TicketsController#show/#main | done | Ticket "INC-180826-2" moved to stage "In Progress", with 2 notes and 1 doc ("Phishing Email Screenshot") | 4 | 2026-08-18 | v2026.08.04 |
| Editing a ticket | Tickets | Ops | TicketsController#edit/#update | done | Updated ticket "INC-180826-2" Detail to record the outcome of the incident | 2 | 2026-08-18 | v2026.08.04 |
| Deleting (archiving) a ticket | Tickets | Ops | TicketsController#destroy | done | Deleted duplicate ticket "Question about flexible working policy" (General HR Query), submitted twice by mistake | 2 | 2026-08-19 | v2026.08.04 |
| Managing ticket todos | Tickets | Ops, FE | TicketsController#todos | done | Ticket "INC-180826-2" with todos "Reset affected account password" (marked Done), "Notify IT Security lead", "Send phishing reminder to team" (both Pending), todo type "Follow-up Task" | 2 | 2026-08-18 | v2026.08.04 |
| Downloading/previewing a ticket PDF | Tickets | Ops | TicketsController#download | done | Ticket "INC-180826-2" with one "Supporting Photos" evidence photo, excluded from the PDF via "don't show this time" | 3 | 2026-08-19 | v2026.08.04 |
| Moving a ticket's pipeline stage | Tickets | Ops | TicketsController#stage | done | Moved ticket "INC-180826-2" In Progress → Resolved | 3 | 2026-08-18 | v2026.08.04 |
| Viewing the tickets pipeline (kanban) board | Tickets | Ops, Mgr | Tickets::PipelinesController#index/show/#filter | done | Pipeline "Service Desk" with one ticket in each of New/In Progress/On Hold/Resolved | 3 | 2026-08-19 | v2026.08.04 |
| Viewing "My Tickets" (personal account tab) | Tickets | Ops, FE | Accounts::TicketsController#index/#group_tab/#show | done | Priya Nair with ticket "INC-180826-2" (stage Resolved, still shows as an open request) under "IT Security" | 2 | 2026-08-18 | v2026.08.04 |

## Timesheets

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Clocking in and starting a shift | Timesheets | FE | TimesheetsController#start_shift_form/#start_shift | done | Project code "PC-2026-OFFICE", planned duration 8h | 3 | 2026-08-15 | v2026.08.02 |
| Ending a shift and confirming hours worked | Timesheets | FE | TimesheetsController#end_shift_form/#end_shift/#confirm_shift | done | Shift started 08:00 at "Riverside Substation", ended 16:30 | 3 | 2026-08-15 | v2026.08.02 |
| Viewing and editing an individual timesheet | Timesheets | FE, Mgr | TimesheetsController#show/new/edit/update/destroy | done | Timesheet "Week 32 – J. Smith", project #ORD-1042, 8h15m | 4 | 2026-08-15 | v2026.08.02 |
| Logging a break or other shift event | Timesheets | FE | Timesheets::EventsController CRUD | done | Event "Lunch Break" 12:00, 30 min | 3 | 2026-08-15 | v2026.08.02 |
| Browsing all timesheets in the table view | Timesheets | Mgr, Fin | TimesheetsController#index/#filter | done | Filter status=pending, group="North Region Engineers" | 3 | 2026-08-15 | v2026.08.02 |
| Approving or denying timesheets for your team (weekly review grid) | Timesheets | Mgr | TimesheetsController#review/#status/#bulk_status | done | Week of 2026-08-10, cover approver, 5 pending entries | 4 | 2026-08-15 | v2026.08.02 |
| Adding or editing a timesheet entry from the review grid | Timesheets | Mgr | TimesheetsController#review_new/#review_create/#review_edit/#review_update/#review_entry_status | done | User "A. Fieldworker", date 2026-08-11, category "Overtime", 2h | 4 | 2026-08-15 | v2026.08.02 |
| Rounding or splitting a timesheet entry during review | Timesheets | Mgr | TimesheetsController#round/#split | done | Split shift 22:00–06:00 at midnight; round start to nearest 15 min | 3 | 2026-08-15 | v2026.08.02 |

## Timesheet Timeline

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing the company shift timeline (Gantt/scheduler) | Timesheets | Mgr, Ops | Timesheets::TimelineController#show; Timeline::UsersController/EventsController#index | done | Date range 2026-08-10 to 16, 2 users' shifts shown | 3 | 2026-08-15 | v2026.08.02 |
| Inspecting and updating a shift event from the timeline | Timesheets | Mgr, Ops | Timesheets::Timeline::EventsController#tooltip/#status/#update | done | Event "Travel" 09:00–09:30 linked to Job #JOB-5521 | 3 | 2026-08-15 | v2026.08.02 |

## Timesheet Groups

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating and managing a timesheet group | Timesheets | Mgr | TimesheetGroupsController CRUD | done | Group "Bank Holiday Cover – Aug 2026", 2 owners, 2 nested rows | 4 | 2026-08-15 | v2026.08.02 |
| Reviewing a timesheet group and approving/denying its timesheets | Timesheets | Mgr | TimesheetGroupsController#show/#status | done | Group status change to "approved" | 3 | 2026-08-15 | v2026.08.02 |
| Browsing and filtering timesheet groups | Timesheets | Mgr | TimesheetGroupsController#index/#filter | done | Filter title contains "Bank Holiday" | 2 | 2026-08-15 | v2026.08.02 |

## Timesheet Exports

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating a timesheet export for payroll | Timesheets | Fin, Admin | TimesheetExportsController#new/#select_timesheets/#create | done | Export "Payroll Run – Aug 2026 Week 32", CSV, 42 timesheets | 4 | 2026-08-15 | v2026.08.02 |
| Reviewing an export and bulk-updating its timesheet statuses | Timesheets | Fin, Admin | TimesheetExportsController#show/#bulk_status | done | Bulk status "exported" | 3 | 2026-08-15 | v2026.08.02 |
| Browsing and filtering timesheet exports | Timesheets | Fin, Admin | TimesheetExportsController#index/#filter | done | Filter by created_at this month | 2 | 2026-08-15 | v2026.08.02 |

## Skills & Compliance

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Finding your way around Skills & Compliance |  | FE, Ops | SkillsController#landing | todo | N/A — navigation hub | 1 |  |  |
| Viewing the Skills Matrix |  | Mgr | SkillsController#matrix/#filter_matrix | todo | Skill set "Electrical Safety", group "North Region Engineers" | 3 |  |  |
| Viewing the compliance dashboard and drilling into missing evidence |  | Mgr | SkillsController#compliance/#filter_compliance/#compliance_evidences | todo | User with status "expires_soon" on "First Aid Certificate" | 3 |  |  |
| Uploading skill evidence (e.g. a certificate) |  | FE | SkillEvidencesController#new/#create | todo | Requirement "First Aid Certificate", valid 2026–2029, file uploaded | 4 |  |  |
| Reviewing, editing, or approving/rejecting skill evidence |  | Mgr | SkillEvidencesController#show/#edit/#update/#status/#destroy | todo | Evidence status pending → approved | 3 |  |  |
| Viewing your personal skills wallet |  | FE | WalletController#index/#dashboard/#skill_sets/#skill_evidences | todo | N/A (detailed under Home/Account) | 1 |  |  |

## SLAs

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating an SLA on a job or other record |  | Ops | SlasController#new/#create | todo | SLA type "Response Time SLA" on Job #JOB-5521 | 3 |  |  |
| Monitoring and editing an SLA's progress |  | Ops, Mgr | SlasController#show/#edit/#update | todo | SLA jeopardy "amber", breach_at set | 3 |  |  |
| Pausing, resuming, restarting, cancelling, or satisfying an SLA |  | Ops | SlasController#pause/#resume/#restart/#cancel/#satisfy | todo | SLA paused with confirm dialog | 3 |  |  |
| Activating or deactivating an SLA |  | Ops | SlasController#activate/#deactivate | todo | SLA deactivated then reactivated | 2 |  |  |
| Browsing and filtering all SLAs |  | Ops, Mgr | SlasController#index/#filter | todo | Filter jeopardy=red, status=active | 2 |  |  |

## Hub - Pages

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating and organizing Hub pages (intranet CMS pages) |  | Admin | Hub::PagesController#new/#create/#index/#show | todo | Page "Health & Safety Policy" nested under "Company Handbook" | 5 |  |  |
| Editing a Hub page's hero image, featured media, and settings |  | Admin | Hub::PagesController#edit/#update/#delete_hero_image/#delete_featured_media | todo | Hero image + featured media + acceptance_type "policy" | 4 |  |  |
| Writing and updating a Hub page's body content inline |  | Admin | Hub::PagesController#inline_show/#inline_edit/#inline_update | todo | Inline body edit on "Health & Safety Policy" | 3 |  |  |
| Submitting, approving, rejecting, and publishing a Hub page |  | Admin, Mgr | Hub::PagesController#submit_for_review/#approve/#send_to_draft/#publish | todo | Page draft → in_review → ready_to_publish, scheduled publish_at | 4 |  |  |
| Accepting a Hub page (policy/document acknowledgment) |  | All | Hub::PagesController#accept | todo | Page "Code of Conduct 2026" accepted by user | 3 |  |  |

## Hub - Channels

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing Hub channels and viewing a channel's feed |  | All | Hub::ChannelsController#index/#show; Hub::Channels::FeedsController#index | todo | Channel "Operations Updates" feed filtered to "posts" | 4 |  |  |
| Creating and configuring a Hub channel |  | Admin | Hub::ChannelsController#new/#create/#edit/#update/#destroy | todo | Channel "Fleet & Vehicles", allow_comments true | 4 |  |  |
| Writing and publishing a quick post in a channel |  | Admin, Ops | Hub::Channels::PostsController CRUD + workflow actions | todo | Post "Reminder: toolbox talk at 8am tomorrow", needs_acknowledging_until set | 5 |  |  |
| Writing and publishing a full article in a channel |  | Admin, Ops | Hub::Channels::ArticlesController CRUD + workflow actions | todo | Article "New PPE Requirements for Q3" with featured media | 5 |  |  |
| Acknowledging (marking as read) a post or article |  | All | Hub::Channels::AcknowledgmentsController#create | todo | User acknowledging a "toolbox talk" post | 2 |  |  |

## Hub - Surveys

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating a survey (announcement) and setting up its questions |  | Admin | Hub::Channels::SurveyRequestsController#new/#create/#edit/#update | todo | Survey request "Q3 Site Safety Feedback", survey type "Site Safety Checklist" | 4 |  |  |
| Submitting, approving, and publishing a survey request |  | Admin, Mgr | Hub::Channels::SurveyRequestsController workflow actions | todo | Survey moved draft → in_review → ready_to_publish → archived | 4 |  |  |
| Responding to a survey |  | All | Hub::Channels::SurveyRequestResultController#new/#create | todo | Response to "Q3 Site Safety Feedback" | 4 |  |  |
| Viewing survey results and individual responses |  | Mgr, Admin | Hub::Channels::SurveyRequestResultController#show; SurveysController | todo | Survey with 42 responses, drilling into 1 respondent | 4 |  |  |

## Client Portal

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Approving or rejecting a quote via a client portal link |  | Ext | ClientPortal::ApprovalsController#show/#approve/#reject | todo | Quote #Q-10452 for "Roof Leak Repair", client contact "Jane Whitfield" | 4 |  |  |

## Public Share Links

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Enabling a public intake link for a project type or record type |  | Admin | Settings::OrderTypesController#edit/update; Settings::RecordTypesController#edit/update | todo | Project Type "Street Light Fault Report" with public_slug, passcode, domain whitelist | 2 |  |  |
| Accessing a shared intake link and identifying yourself |  | Ext | ShareController#new/#create | todo | Reference "street-light-fault", visitor name/email/passcode | 2 |  |  |
| Submitting a new project through a public share link |  | Ext | Share::OrdersController#new/#create/#show | todo | Project "Pole #42 not illuminating" via public form | 3 |  |  |
| Submitting a new record through a public share link |  | Ext | Share::RecordsController#new/#create/#show | todo | Record "Loose paving slab reported" via public form | 3 |  |  |

## Clients

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and filtering the client list |  | Sales, Ops | ClientsController#index/#filter | todo | 15 active clients, e.g. "Northgate Retail Park Ltd" (VIP label), "Meridian Logistics" (Overdue tag) | 3 |  |  |
| Creating and editing a client |  | Sales, Ops | ClientsController#new/#create/#edit/#update | todo | New client "Bellhaven Construction Group", rate book "Standard Commercial 2026" v3 | 4 |  |  |
| Client overview, todos, jobs, and linked records tabs |  | Sales, Ops | ClientsController#main/#todos/#jobs/#records | todo | Client with 3 open todos, 5 active jobs, 2 linked records | 5 |  |  |
| Viewing a client's invoices |  | Fin | ClientsController#invoices | todo | Client with 4 invoices, one overdue | 2 |  |  |
| Downloading a client PDF summary |  | Sales, Ops | ClientsController#pdf | todo | Client PDF export | 1 |  |  |
| Managing a client's sites |  | Sales, Ops | ClientsController#sites; SitesController CRUD | todo | Client "Meridian Logistics" with 2 sites | 5 |  |  |
| Site detail — overview and linked assets |  | Sales, Ops | SitesController#main/#assets | todo | Site "Meridian Depot North" with 4 registered assets | 4 |  |  |
| Archiving a client |  | Sales, Ops | ClientsController#destroy | todo | Client with no open jobs, archived | 2 |  |  |

## Leads

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and filtering the sales lead list |  | Sales | LeadsController#index/#filter | todo | 8 open leads, e.g. "Ashcroft Property Group" (Referral) | 3 |  |  |
| Creating and editing a sales lead |  | Sales | LeadsController#new/#create/#edit/#update | todo | New lead "Riverside Warehousing Co.", source "Trade Show — BuildExpo 2026" | 4 |  |  |
| Lead overview, todos, sites, and records tabs |  | Sales | LeadsController#main/#todos/#sites/#records | todo | Lead with 2 todos, 1 prospective site, 1 linked record | 5 |  |  |
| Converting a lead into a client |  | Sales | LeadsController#convert_to_client | todo | Signed lead "Fenwick Estates" converted to client | 3 |  |  |
| Archiving a lead |  | Sales | LeadsController#destroy | todo | Disqualified lead "Coldwell Traders" archived | 2 |  |  |

## Contacts & Addresses

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing contacts on a client, lead, or other record |  | Sales, Ops | ContactsController#index/#card/#new/#create/#show/#edit/#update/#destroy | todo | Contact "Priya Shah, Facilities Director" set as primary on "Northgate Retail Park Ltd" | 5 |  |  |
| Viewing an address on a map |  | Ops, FE | AddressesController#show | todo | Site address "12 Harbour Way, Southampton" opened from its address card | 2 |  |  |

## Invoicing

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and filtering the invoices list and pipeline |  | Fin | InvoicesController#index/#landing/#autocomplete; Invoices::PipelinesController | todo | 15 invoices across statuses for 5 clients | 3 |  |  |
| Creating a new invoice |  | Fin | InvoicesController#new/#create | todo | Project "Substation Refurbishment - Project #4021", invoice type "Standard Invoice" | 3 |  |  |
| Viewing an invoice overview |  | Fin | InvoicesController#show/#main | todo | Invoice "INV-1042" with 1 bill sent, 2 todos, 3 activity entries | 2 |  |  |
| Editing or deleting an invoice |  | Fin | InvoicesController#edit/#update/#destroy | todo | Draft invoice "INV-1050" with PO "PO-8834" | 3 |  |  |
| Managing invoice lines |  | Fin | InvoicesController#lines; Invoices::LinesController#bulk_new/#bulk/#destroy | todo | Invoice with 6 lines across 3 products, 1 modifier line | 4 |  |  |
| Updating invoice status and RAG rating |  | Fin | InvoicesController#status/#status_unsent/#rag_status | todo | Invoice "unsent" with RAG thresholds configured | 2 |  |  |
| Activating or deactivating an invoice |  | Fin | InvoicesController#activate/#deactivate | todo | Active invoice toggled inactive | 1 |  |  |
| Creating and sending an invoice bill (PDF) to a client |  | Fin | Invoices::BillsController#new/#create/#edit/#update/#preview/#show | todo | Invoice with contact and custom PDF template | 5 |  |  |
| Viewing an invoice's export history |  | Fin | InvoicesController#exports | todo | Invoice included in export "August Xero Export" | 1 |  |  |

## Invoice Exports

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating a batch invoice export |  | Fin | InvoiceExportsController#new/#select_invoices/#create | todo | 8 unsent invoices totalling £42,500 across 4 clients, CSV format | 4 |  |  |
| Viewing and managing an invoice export |  | Fin | InvoiceExportsController#show/#main/#invoices/#todos/#edit/#update/#destroy | todo | Export with 8 bills, one rejected | 3 |  |  |
| Bulk-updating invoice statuses within an export |  | Fin | InvoiceExportsController#bulk_status/#invoice_status | todo | 8 invoices bulk-set from unsent to valid | 2 |  |  |

## Estimates & Quotes

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and filtering estimates and the estimates pipeline |  | Sales, Fin | EstimatesController#index/#autocomplete; Estimates::PipelinesController | todo | 10 estimates across draft/sent/accepted/rejected | 3 |  |  |
| Creating a new estimate |  | Sales | EstimatesController#new/#create | todo | Project "Turbine Blade Inspection - Project #5510", type "Site Survey Estimate" | 3 |  |  |
| Viewing an estimate overview and updating status/RAG |  | Sales, Fin | EstimatesController#show/#main/#status/#status_unsent/#rag_status | todo | Estimate "EST-330" status "ready", RAG amber | 3 |  |  |
| Editing, activating/deactivating, or deleting an estimate |  | Sales | EstimatesController#edit/#update/#activate/#deactivate/#destroy | todo | Draft estimate "EST-341" with no jobs/quotes | 3 |  |  |
| Managing products/materials on an estimate |  | Sales | EstimatesController#products | todo | Estimate with 4 allocated products | 2 |  |  |
| Attaching or detaching jobs on an estimate |  | Sales, Ops | EstimatesController#jobs/#attach_job/#detach_job | todo | Estimate linked to job "Blade Inspection Visit - Job #9012" | 3 |  |  |
| Viewing records attached to an estimate |  | Sales | EstimatesController#records | todo | Estimate with pinned "Site Survey" record type, 2 completed surveys | 2 |  |  |
| Creating and sending a quote (PDF) to a client |  | Sales | QuotesController#new/#create/#edit/#update/#preview/#show | todo | Estimate with contact and custom PDF template "rfq" | 5 |  |  |

## Variations (Change Projects)

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and filtering variations and the variations pipeline |  | Fin, Ops | VariationsController#index/#autocomplete; Variations::PipelinesController | todo | 6 variations against a project, 2 pending approval | 3 |  |  |
| Creating a new variation |  | Fin, Ops | VariationsController#new/#create | todo | Project "Substation Refurbishment - Project #4021", type "Additional Works Instruction" | 3 |  |  |
| Viewing a variation overview and updating status/RAG |  | Fin, Mgr | VariationsController#show/#main/#status/#rag_status | todo | Variation "VAR-22" status "pending", RAG red | 3 |  |  |
| Editing, activating/deactivating, or deleting a variation |  | Fin, Ops | VariationsController#edit/#update/#activate/#deactivate/#destroy | todo | Variation "VAR-22" description edited | 3 |  |  |
| Managing products on a variation |  | Fin, Ops | VariationsController#products | todo | Variation with 2 added products | 2 |  |  |
| Applying an approved variation to a job or project |  | Fin, Ops | VariationsController#apply_new/#apply | todo | Approved variation applied to job "Substation Panel Swap - Job #9101" | 4 |  |  |
| Downloading or previewing a variation PDF |  | Fin, Ops | VariationsController#download | todo | Variation with custom template, one attachment hidden | 2 |  |  |
| Sending a variation for client approval |  | Fin | VariationsController#send_variation_form/#send_variation | todo | Variation emailed to "Priya Shah" for sign-off | 3 |  |  |
| Toggling attachment visibility on a variation PDF |  | Fin | VariationsController#toggle_attachment_show_on_pdf | todo | Internal cost-breakdown attachment excluded from client PDF | 1 |  |  |

## Products & Rates

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing the product catalog and drilldown hierarchy |  | Admin, Fin | ProductsController#index; Products::DrilldownController | todo | Parent "Cabling" with children "LV Cable"/"HV Cable per metre" | 3 |  |  |
| Creating a product or sub-product |  | Admin, Fin | ProductsController#new/#create | todo | Sub-product "Cable Trench Excavation per metre" under "Groundworks" | 3 |  |  |
| Viewing and editing a product |  | Admin, Fin | ProductsController#show/#main/#edit/#update/#delete_photo | todo | Product "HV Cable per metre" with photo and ref code | 3 |  |  |
| Deleting a product |  | Admin, Fin | ProductsController#destroy | todo | Parent product with 3 sub-products, cascade-delete | 2 |  |  |
| Managing sell rates on a product | PVA | Fin, Admin | ProductsController#rates; RatesController (as :rates) | done | Sell rate £14.50/m for "HV Cable per metre" under "2026 Wind Rates" v1 | 4 | 2026-08-13 | v2026.08.03 |
| Managing cost rates on a product | PVA | Fin, Admin | ProductsController#costs; RatesController (as :costs) | done | Cost rate £9.20/m for "HV Cable per metre" under "Internal Costs 2026" v1 | 4 | 2026-08-13 | v2026.08.03 |
| Viewing a product's sub-products |  | Admin, Fin | ProductsController#sub_products | todo | Parent "Groundworks" with 2 sub-products | 2 |  |  |

## Product Allocations

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Allocating products/materials to a job, project, estimate, or variation | PVA | Ops, Fin | ProductAllocationsController#new/#create/#index | done | Job allocated 25m of "HV Cable per metre" | 4 | 2026-08-13 | v2026.08.03 |
| Copying/transferring allocated products between records | PVA | Ops, Fin | ProductAllocationsController#allocate_new/#allocate/#allocatable_products | done | Accepted estimate's allocations transferred onto new project | 4 | 2026-08-13 | v2026.08.03 |
| Editing or removing a product allocation | PVA | Ops, Fin | ProductAllocationsController#edit/#update/#destroy/#show | done | Allocation title typo corrected and category set; accidental duplicate allocation removed | 3 | 2026-08-13 | v2026.08.03 |
| Bulk-applying a rate modifier to all allocated products | PVA | Fin | ProductAllocationsController#bulk_modifier/#bulk_update_modifier | done | 12 allocations with a "+15% Out of Hours" modifier applied | 2 | 2026-08-13 | v2026.08.03 |
| Raising a planned quantity change on an allocation | PVA | Ops, FE | PlannedQuantityChangesController#new/#create/#show | done | Allocation changed 40m → 55m with reason and attached sketch | 3 | 2026-08-13 | v2026.08.03 |
| Viewing planned quantity change history | PVA | Ops, Fin | ProductAllocationsController#quantity_history | done | Allocation with 2 recorded changes (40→55→60m) | 1 | 2026-08-13 | v2026.08.03 |
| Recording actual product usage against an allocation | PVA | FE, Ops | ProductRecordingsController#new/#create/#edit/#update/#show/#destroy | done | Allocation (planned 30m) recorded at 28m with 2 photos | 4 | 2026-08-13 | v2026.08.03 |

## Settings: Workspace Builder

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Building a field set with field groups and field types |  | Admin | Settings::FieldSetsController, FieldGroupsController, FieldTypesController, FieldOptionsController | todo | Field Set "Fibre Install Details" > group "Site Info" > types "Cable Length" (numeric), "Fibre Type" (single_option) | 10 |  |  |
| Configuring a check-type field's pass/fail (RAG) scoring |  | Admin | Settings::FieldTypesController (data_type=check) | todo | Check field "Signal Strength OK?" pass/fail/resolved labels, auto-created Issue Type "Signal Fault" | 4 |  |  |
| Configuring records-type field columns and auto-titles |  | Admin | Settings::FieldTypeRecordColumnsController#move; FieldTypeRecordTitlesController#move | todo | Records-field "Cable Reels Used" with columns and auto-title template | 3 |  |  |
| Attaching a field set to a type |  | Admin | Settings::FieldableFieldSetsController#move | todo | Field Set "Fibre Install Details" attached to Asset Type "ONT Router" | 3 |  |  |
| Building a custom form |  | Admin | Settings::FormsController, PagesController | todo | Form "Fibre Install Site Survey" with 2 pages, one live-video variant | 5 |  |  |
| Adding elements to a form page |  | Admin | Settings::ElementsController, ElementRecordFieldTypesController#move | todo | Page with Photo, Signature, Dropdown, and linked-Records elements | 6 |  |  |

## Settings: Pipelines & Stages

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Building a pipeline with stages |  | Admin | Settings::PipelinesController, StagesController | todo | Pipeline "Fibre Rollout" with 5 stages, ageing thresholds, close_members flag | 6 |  |  |
| Attaching a pipeline to a type (Assets, Issues, Projects, Records, Tickets, Users) |  | Admin | Settings::*TypePipelinesController#create/#move | todo | Pipeline "Fibre Rollout" attached to Project Types "Fibre Build"/"Fibre Repair" | 4 |  |  |

## Settings: Type Management

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing job types and task types |  | Admin | Settings::JobTypesController, TaskTypesController | todo | Job Type "Fibre Install" with RAG mode, product allocations; Task Type "Site Survey" | 6 |  |  |
| Building job task pipelines and sub-statuses |  | Admin | Settings::JobTypeTaskTypesController, SubStatusesController | todo | Task pipeline Survey→Cable Pull→Test&Commission; sub-statuses under "On Hold" | 5 |  |  |
| Configuring project types, record types, and record groups |  | Admin | Settings::OrderTypesController, RecordTypesController, RecordGroupsController | todo | Project Type "Fibre Build" with public creation slug; Record Type under group "Field Records" | 8 |  |  |
| Pinning related record types to a record type |  | Admin | Settings::PinnedRecordTypesController | todo | Pin Ticket Type "Fault Ticket" onto Record Type "Site Visit Report" | 4 |  |  |
| Managing ticket types and ticket groups |  | Admin | Settings::TicketTypesController, TicketGroupsController | todo | Ticket Group "Customer Support" with types "Fault Report"/"Billing Query" | 4 |  |  |
| Configuring asset, visit, and issue types |  | Admin | Settings::AssetTypesController, VisitTypesController, IssueTypesController | todo | Asset Type "ONT Router" linked to Visit Plan "Annual Maintenance" | 5 |  |  |
| Configuring estimate, invoice, and variation types |  | Admin | Settings::EstimateTypesController, InvoiceTypesController, VariationTypesController | todo | Estimate Type with approval-limit thresholds; Invoice Type with custom PDF template | 5 |  |  |
| Managing todo types, event types, warning types, and lead sources |  | Admin | Settings::TodoTypesController, EventTypesController, WarningTypesController, LeadSourcesController | todo | Warning Type "Access Restricted" (locks_jobs=true); Lead Source "Google Ads" | 5 |  |  |

## Settings: Automation

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Building an automation rule |  | Admin | Settings::Rules::WebRulesController, OperatorsController | todo | Rule "Auto-flag overdue fibre jobs": trigger + condition group + action | 8 |  |  |
| Restricting an automation rule to specific record types |  | Admin | Settings::Rules::RuleTargetTypesController | todo | Rule restricted to Job Types "Fibre Install"/"Fibre Repair" | 3 |  |  |
| Common trigger types reference |  | Admin | Settings::Rules::Triggers::* controllers | todo | Status Updated, Move Stage, Time In Stage trigger examples | 5 |  |  |
| Common action types reference |  | Admin | Settings::Rules::Actions::* controllers | todo | Add Warning, Move To Stage, Create Notification action examples | 5 |  |  |

## Settings: Journeys

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Building a notification journey |  | Admin | Settings::JourneysController, StepsController | todo | Journey "New Engineer Onboarding" with 3 scheduled steps | 6 |  |  |

## Settings: Imports & Integrations

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Importing data via CSV |  | Admin | Settings::ImportsController, ImportRecordsController | todo | Import "August ASM Work Projects" with 40 projects, 1 warning row | 5 |  |  |
| Monitoring mobile & web uploads |  | Admin | Settings::UploadsController#index/#filter/#show/#status | todo | Failed upload "file too large"; a mobile crash log upload | 3 |  |  |
| Managing mobile app shortcut links |  | Admin | Settings::MobileLinksController | todo | Mobile Link "Health & Safety Portal" (web-embed) | 3 |  |  |
| Managing web dashboard links |  | Admin | Settings::WebLinksController | todo | Web Link "Regional Performance Dashboard" (Power BI) | 3 |  |  |
| Monitoring gateway/API messages |  | Admin | Settings::ApiMessagesController#index/#filter/#show/#status | todo | Failed eBusiness message, admin resets to pending for retry | 4 |  |  |

## Settings: Views & Organization

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing saved views (admin) | Views | Admin | Settings::ViewsController | done | Admin renames/deactivates other users' saved views | 4 | 2026-08-16 | v2026.08.02 |
| Managing folder sets (document folder templates) |  | Admin | Settings::FolderSetsController | todo | Folder Set "Standard Job Compliance Docs" with 3 child folders | 5 |  |  |

## Home Dashboard

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing your activity feed |  | All | HomeController#show/#personal_feed/#global_feed | todo | Channel "North Region Crew" feed item on Job JOB-10432 | 3 |  |  |
| Using the Home overview widget dashboard |  | Mgr, Ops | HomeController#overview | todo | Tags "Region: North", "Team: Electrical" filtering widgets | 2 |  |  |
| Reading the Today snapshot widget |  | Mgr, Ops | Home::TodayController#today | todo | 4 new invoices, 12 active bookable jobs, 18 created/15 done/1 failed | 1 |  |  |
| Reading the Timesheets Today widget |  | Mgr | Home::TimesheetsController#today | todo | Draft 3, Submitted 9, Approved 22, Rejected 1 | 1 |  |  |
| Reading the Jobs Today widget |  | Mgr, Ops | Home::JobsController#today | todo | Booked 8, In Progress 3, Completed 20, Failed 2 | 1 |  |  |
| Browsing upcoming jobs on the Coming Up widget |  | Ops, Mgr | Home::JobsController#coming_up | todo | Job "Annual Gas Safety Check" starting in 3 hours | 1 |  |  |
| Filtering the Jobs by Status chart |  | Mgr, Ops | Home::JobsController#total_by_status | todo | This Month, statuses Booked/Completed/Failed over daily buckets | 2 |  |  |
| Filtering the Jobs by Type chart |  | Mgr, Ops | Home::JobsController#top_by_type | todo | Job types by % share, time range This Quarter | 2 |  |  |
| Filtering the Projects by Stage chart |  | Mgr, Sales | Home::OrdersController#total_by_stage | todo | Pipeline "Sales Project Pipeline" stages | 2 |  |  |
| Filtering the Projects by Type chart |  | Mgr, Sales | Home::OrdersController#top_by_type | todo | Project types by % share, This Month | 2 |  |  |
| Filtering the Records by Stage chart |  | Mgr, Ops | Home::RecordsController#total_by_stage | todo | Pipeline "Permit Applications" stages | 2 |  |  |
| Filtering the Records by Type chart |  | Mgr, Ops | Home::RecordsController#top_by_type | todo | Record types by % share | 2 |  |  |
| Reviewing the Recent Activity widget |  | Mgr, Ops | Home::ActivityController#recent | todo | "Dana Reyes updated Project ORD-3341" timeline entry | 1 |  |  |
| Monitoring the Uploads status widget (Admin) |  | Admin | Home::UploadsController#total | todo | 2 pending, 1 failed upload | 1 |  |  |
| Monitoring the Weekly Imports status widget (Admin) |  | Admin | Home::ImportsController#weekly_total | todo | 3 pending, 1 failed import this week | 1 |  |  |

## Account

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Updating your account profile |  | All | AccountsController#edit/#update | todo | DOB, default home page "Jobs", profile picture upload | 3 |  |  |
| Collapsing/expanding the sidebar |  | All | AccountsController#toggle_sidebar | todo | Sidebar toggled collapsed vs expanded | 2 |  |  |
| Dismissing an onboarding tip |  | All | AccountsController#dismiss_tip | todo | Tip "new_launcher_menu" dismissed | 1 |  |  |

## Authentication

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Signing in with email and password |  | All | SessionsController#create | todo | Email/password sign-in; error case for SSO-only account | 2 |  |  |
| Signing in with Microsoft (Azure AD SSO) |  | All | OmniauthCallbacksController#create/#failure | todo | Azure AD tenant "acmefieldservices.onmicrosoft.com" | 3 |  |  |
| Requesting and resetting a forgotten password |  | All | clearance/passwords#new/#create/#edit/#update | todo | Reset link requested, new password set | 3 |  |  |

## Search & Navigation

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Using global search / command palette |  | All | SearchesController#index; app/views/application/_command.html.erb | todo | Query "ORD-3341", category filter "Projects", Deep Search toggle | 4 |  |  |
| Launching connected apps from the App Launcher |  | All | app/views/application/_launcher.html.erb; LauncherApp model | todo | Apps "Power BI Dashboards", "Fleet Tracker", search "fleet" | 2 |  |  |

## Notifications

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing and managing notifications |  | All | NotificationsController#index/#show/#destroy/#mark_all_as_read | todo | Notification "You were assigned to Job JOB-20567", 5 pending | 3 |  |  |

## Announcements

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Browsing company announcements |  | All | AnnouncementsController#index/#show | todo | Announcement "New PPE Policy Effective September 2026" | 3 |  |  |
| Creating and editing an announcement (Admin) |  | Admin | AnnouncementsController#new/#create/#edit/#update/#destroy | todo | Announcement "Q3 Safety Briefing" | 3 |  |  |
| Sending an announcement as a notification (Admin) |  | Admin | AnnouncementsController#send_notification_to/#send_notification | todo | Sent to group "All Field Engineers" | 2 |  |  |

## Watches

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing your watches |  | All | WatchesController#index/#create/#destroy | todo | Watching Project "ORD-3341" and Job "JOB-20567" | 2 |  |  |

## Assignments Inbox

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Viewing assigned records in your Assignments inbox |  | Ops, FE | AssignmentsController#index/#records | todo | Record "PERMIT-1042" assigned to "Dana Reyes" | 2 |  |  |
| Viewing assigned projects in your Assignments inbox |  | Ops, Sales | AssignmentsController#index/#orders | todo | Project "ORD-3341" assigned to "Sam Ortiz" | 2 |  |  |

## Settings: Team & Users

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Adding a new team member |  | Admin | Settings::UsersController#new/#create | todo | User "Priya Nakamura", type "Field Engineer", roles, groups | 4 |  |  |
| Editing a team member's profile and system settings |  | Admin | Settings::UsersController#edit/#update/#delete_profile_picture | todo | Approver, cover authority, timesheet defaults, booking toggles | 4 |  |  |
| Viewing a team member's overview |  | Admin | Settings::UsersController#show/#main | todo | User with tag, group, SLAs, docs, activity feed | 3 |  |  |
| Managing a user's availability entries |  | Admin | Settings::AvailabilitiesController; Settings::UsersController#availability | todo | Availability type "Annual Leave", dated range, authorised | 3 |  |  |
| Tracking a user's mobile device sessions |  | Admin | Settings::UsersController#mobile_sessions | todo | Sessions with statuses current/inactive/conflict | 2 |  |  |
| Reviewing and resolving a mobile session's uploads |  | Admin | Settings::Users::MobileSessions::UploadsController | todo | Upload "job_status" payload, status overridden | 4 |  |  |
| Managing a user's skill sets |  | Admin | Settings::UserSkillSetsController; Settings::UsersController#skill_sets | todo | Skill set "High Voltage Authorised Person" linked/deactivated | 3 |  |  |
| Reviewing a user's skill evidence and todos |  | Admin | Settings::UsersController#skill_evidence/#todos | todo | Evidence "First Aid at Work" cert, todo due date | 3 |  |  |
| Sending a push message to a user's mobile device |  | Admin | Settings::UsersController#send_fcm_message | todo | Message type "request_logs" sent | 2 |  |  |
| Managing a user's tags and lifecycle status |  | Admin | Settings::UsersController#tags/#activate/#deactivate/#destroy | todo | Tags added; leaver deactivated | 3 |  |  |
| Moving a user through a stage/pipeline |  | Admin | Settings::UsersController#stage; Settings::Users::PipelinesController | todo | Onboarding pipeline stage move | 3 |  |  |
| Browsing team members in a table or pipeline board view |  | Admin | Settings::UsersController#index/#filter/#autocomplete | todo | Filter by user type and tag | 3 |  |  |
| Managing user types (job roles reference data) |  | Admin | Settings::UserTypesController | todo | User type "Field Engineer" with default stage, field set | 3 |  |  |
| Attaching a pipeline to user types |  | Admin | Settings::UserTypePipelinesController#create/#move | todo | Onboarding pipeline toggled per user type | 2 |  |  |

## Settings: Groups & Hierarchy

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating and editing team groups |  | Admin | Settings::GroupsController#new/#create/#edit/#update/#destroy | todo | Group "North Region Field Team" under "UK Operations" | 4 |  |  |
| Browsing the group hierarchy (table and org chart) |  | Admin | Settings::Groups::DrilldownController; Settings::GroupsController#chart/#children | todo | 4-level group hierarchy rendered as org chart | 4 |  |  |
| Managing group membership (members, leads, admin leads) |  | Admin | Settings::UserGroupsController | todo | User added as lead of "North Region Field Team" | 3 |  |  |

## Settings: Access Control (Roles & Permissions)

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating permission sets (per-module grants and per-type overrides) |  | Admin | Settings::PermissionSetsController | todo | Permission set "Field Engineer - Jobs" with per-type override | 4 |  |  |
| Creating roles and assigning permission sets |  | Admin | Settings::RolesController#new/#create/#edit/#update/#destroy/#show/#users | todo | Role "Field Engineer" with per-module permission sets | 4 |  |  |

## Settings: Tags & Notifications

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Setting up tag types and tags |  | Admin | Settings::TagTypesController; Settings::TagsController | todo | Tag type "Certifications" with 3 tags | 6 |  |  |
| Setting up notification groups and recipients |  | Admin | Settings::NotificationGroupsController | todo | Group "North Region Site Managers" built from users+tags | 6 |  |  |

## Settings: Labels

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Configuring label groups |  | Admin | Settings::LabelGroupsController | todo | Label group "Job Priority" with 3 labels | 4 |  |  |

## Settings: Scheduling Reference Data

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating and managing rotating shift patterns |  | Admin | Settings::PatternsController; Settings::ShiftsController | todo | Pattern "4-on 4-off Rotation" with 2 shifts | 6 |  |  |
| Managing availability types |  | Admin | Settings::AvailabilityTypesController | todo | "Annual Leave" (unavailable, requires authorisation) | 3 |  |  |

## Settings: Visit Scheduling

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating a shared visit plan and its recurring visit schedules |  | Admin | Settings::VisitPlansController; Settings::VisitSchedulesController | todo | Plan "Quarterly Fire Safety Servicing" with recurrence rule | 6 |  |  |
| Attaching a custom (asset-specific) visit plan |  | Admin | Settings::VisitPlansController#new_visit_plan (asset_id) | todo | One-off plan scoped to asset "Generator Unit GEN-014" | 3 |  |  |

## Settings: Finance Reference Data

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing rate categories | PVA | Admin, Fin | Settings::RateCategoriesController | done | "Callout Charge" (Income), "Materials Waste" (Expenditure) | 4 | 2026-08-13 | v2026.08.03 |
| Creating a rate book and its versions | PVA | Admin, Fin | Settings::RateBooksController; Settings::RateBookVersionsController | done | Rate book "2026 Wind Rates" (Price) with versions v1/v2, plus cost book "Internal Costs 2026" | 6 | 2026-08-13 | v2026.08.03 |
| Setting product rates within a rate book version | PVA | Admin, Fin | Settings::RateBookVersionRatesController | done | Product "Duct Rod 50mm" rate £4.20/£2.60 under "2026 Wind Rates" v2 | 5 | 2026-08-13 | v2026.08.03 |
| Managing product allocation types | PVA | Admin, Fin | Settings::ProductAllocationTypesController | done | "Emergency Repair Parts" allocation type | 4 | 2026-08-13 | v2026.08.03 |
| Managing project codes, timesheet categories, and timesheet addition types |  | Admin, Fin | Settings::ProjectCodesController; TimesheetCategoriesController; TimesheetAdditionTypesController | todo | Project code "PC-2026-014", category "Travel Time" | 5 |  |  |

## Settings: SLA Configuration

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Creating an SLA type and its escalation thresholds |  | Admin | Settings::SlaTypesController | todo | "Priority 1 - Critical Fault" with amber/red/breach thresholds | 4 |  |  |
| Defining SLA stage policies |  | Admin | Settings::SlaStagePoliciesController | todo | Stage-enter/leave clock actions (pause/resume) | 3 |  |  |
| Assigning SLA types to record, project, ticket, and user types |  | Admin | Settings::SlaTypesController#record_types/etc; SlaTypeAssignmentsController | todo | SLA type auto-created on Ticket Type "Emergency Callout" | 4 |  |  |
| Configuring SLA working-hour periods |  | Admin | Settings::SlaPeriodsController | todo | Periods Mon-Fri 09:00-17:00 | 3 |  |  |

## Settings: Skills Administration

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Managing skills |  | Admin | Settings::SkillsController | todo | Skills "MEWP Operation", "Confined Space Entry" | 5 |  |  |
| Building skill sets |  | Admin | Settings::SkillSetsController; SkillSkillSetsController | todo | Skill set "Electrical Engineer - Level 2" with 2 skills | 5 |  |  |
| Defining skill requirements |  | Admin | Settings::SkillRequirementsController; SkillSkillRequirementsController | todo | "Gas Safe Card - Category 1" mandatory requirement | 5 |  |  |

## Settings: Hub Administration

| Guide | Feature | Audience | Maps to (controllers/views) | Status | Test data needed | Screenshot steps (est.) | documented_at | Release |
|-------|-------|----------|------------------------------|--------|-------------------|--------------------------|----------------|-------|
| Configuring Hub survey types |  | Admin | Settings::Hub::SurveyTypesController | todo | Survey type "Site Safety Walkaround" with form and default tags | 6 |  |  |
| Configuring app-launcher shortcuts |  | Admin | Settings::LauncherAppsController | todo | Launcher app "Fleet Tracker" with URL and logo | 4 |  |  |

## Platform Administration

| Guide                               | Feature | Audience | Maps to (controllers/views)                              | Status | Test data needed                                    | Screenshot steps (est.) | documented_at | Release |
| ----------------------------------- | ------- | -------- | -------------------------------------------------------- | ------ | --------------------------------------------------- | ----------------------- | ------------- | ------- |
| Managing customer tenants           |         | OCU      | TenantsController#index/new/create/show/edit/update/main | todo   | Tenant "Acme Utilities Ltd" with initial admin user | 5                       |               |         |
| Reviewing a tenant's mobile uploads |         | OCU      | TenantsController#uploads                                | todo   | Upload row status "Completed" for a tenant user     | 3                       |               |         |

## Summary

Completed: 54 / 394

PVA (Planned vs Actual / product allocations) guides completed: 16 / 16

Timesheets guides completed: 16 / 16

Views guides completed: 9 / 9

Tickets guides completed: 12 / 12

Release breakdown (current version only, for `done` rows):

- v2026.08.02: 28
- v2026.08.03: 14
- v2026.08.04: 12

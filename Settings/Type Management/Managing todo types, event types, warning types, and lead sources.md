# Managing todo types, event types, warning types, and lead sources

These four smaller type screens round out the categories used across jobs, leads, and general activity tracking: **Warning Types** flag problems on a job, **Lead Sources** track where a lead came from, **Todo Types** categorise to-dos, and **Event Types** categorise calendar events.

## Creating a warning type

1. From **Settings > Warning Types**, click **+ Warning Type** and give it a **Name** (for example **Access Restricted**).
2. Tick **Locks Jobs?** to put a job into a "Job Locked" state whenever a warning of this type is present on it. **Closable?** controls whether a person can manually close the warning, and **Show on mobile?** / **Show on jobs?** control where it's visible.

   ![New Warning Type form with Locks Jobs? and Show on jobs? checked](attachments/managing-todo-event-warning-types-and-lead-sources/01-new-warning-type-form-annotated.jpg)

3. Click **Create Warning Type**. Its **Locks Jobs?** value shows directly in the list.

   ![Warning Types list showing Access Restricted with Locks Jobs? = Yes](attachments/managing-todo-event-warning-types-and-lead-sources/02-warning-type-created-annotated.jpg)

## Adding a lead source

1. From **Settings > Lead Sources**, click **+ Lead Source** and give it a **Name** (for example **Google Ads**, alongside the existing **Google** entry to track paid traffic separately from organic).

   ![New Lead Source dialog with Name "Google Ads"](attachments/managing-todo-event-warning-types-and-lead-sources/03-new-lead-source-form-annotated.jpg)

2. Click **Create Lead Source**. It's now available to pick when logging a new lead.

   ![Lead Sources list with Google Ads added alongside the existing sources](attachments/managing-todo-event-warning-types-and-lead-sources/04-lead-source-created.jpg)

## Creating a todo type

1. From **Settings > Todo Types**, click **+ Todo Type**, give it a **Name** (for example **Follow-up Call**), and set its **Priority**.

   ![New Todo Type form with Name "Follow-up Call" and Priority Normal](attachments/managing-todo-event-warning-types-and-lead-sources/05-new-todo-type-form-annotated.jpg)

2. Click **Create Todo Type**. Opening the new type shows a **Checklists** section, where reusable checklist templates can be attached so every to-do of this type starts with the same steps.

   ![Follow-up Call's overview page showing an empty Checklists section](attachments/managing-todo-event-warning-types-and-lead-sources/06-todo-type-created-checklists.jpg)

## Creating an event type

1. From **Settings > Event Types**, click **+ Event Type**. This is the simplest type in Settings — just a **Name** and optional **Description**.

   ![New Event Type dialog with Name "Site Inspection"](attachments/managing-todo-event-warning-types-and-lead-sources/07-new-event-type-form-annotated.jpg)

2. Click **Create Event Type**. It's now available when scheduling a calendar event.

   ![Event Types list showing the new Site Inspection type](attachments/managing-todo-event-warning-types-and-lead-sources/08-event-type-created.jpg)

## Things to know

- A warning with **Locks Jobs?** enabled affects every job it's added to immediately — there's no way to attach it without triggering the lock.
- Lead Sources and Event Types are deliberately minimal — neither supports field sets, forms, or RAG scoring the way most other types in Settings do.
- A Todo Type's Checklists are templates only — editing one after to-dos already exist doesn't retroactively change checklists already created on those to-dos.

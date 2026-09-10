# Configuring Hub survey types

A **survey type** defines a kind of survey your organisation can send out through the Hub — for example a safety walkaround checklist or a staff feedback survey. It controls what form people fill in, what tags get applied automatically, and how the survey type appears in lists. This screen lives under **Settings > Hub**.

## Creating a survey type

1. From the Settings landing page, find **Survey Types** under the **Hub** section, then click **+ Survey Type** on that list.

   ![Settings landing page with the Hub section expanded, showing Journeys, Survey Types, and Launcher Apps](attachments/Configuring%20Hub%20survey%20types/00-settings-hub-section.jpg)

2. Fill in the survey type's details:
   - **Name** — for example **Site Safety Walkaround**.
   - **Field Sets** — optional field sets to inherit, be inherited by children, or store directly on the survey type.
   - **Forms** — the form (or forms) used when someone fills in a survey created from this type. Only active forms already set up for your organisation appear here.
   - **Description** — an optional longer explanation, hidden behind an **Add description** link until needed.
   - **Icon** and **Colour** — how the survey type is represented visually in lists.
   - **Default tags** — tags that are automatically applied to anything created from this survey type. Start typing to search existing tags.

   ![New Survey Type form filled in with name, attached form, description, and a default tag](attachments/Configuring%20Hub%20survey%20types/02-new-survey-type-form.jpg)

3. Click **Create Survey Type**. It's added to the list, owned by whoever created it:

   ![Survey Types list filtered to "Site Safety Walkaround", showing its owner and active state](attachments/Configuring%20Hub%20survey%20types/07-survey-types-list-filtered.jpg)

## Viewing and editing a survey type

Click a survey type's name to open it in the same form used to create it, with its current values filled in. Change any field and click **Update Survey Type** to save.

![Site Safety Walkaround survey type open for editing, showing its saved form, description, and default tag](attachments/Configuring%20Hub%20survey%20types/03-survey-type-edit-view.jpg)

Two icons sit at the bottom-right of this panel:
- A **lock** icon showing the survey type's access.
- An **eye** icon for deactivating (or an eye with a line through it for reactivating) the survey type.

## Deactivating and reactivating a survey type

Click the eye icon to deactivate a survey type that's no longer in use. You'll be asked to confirm:

![Confirm dialog asking "Are you sure you want to deactivate this?"](attachments/Configuring%20Hub%20survey%20types/04-deactivate-confirm.jpg)

Once deactivated, the icon changes to an eye with a line through it, and the survey type's **Lifecycle Status** shows as inactive in the list:

![Survey type panel showing the deactivated state, with the eye-slash icon highlighted](attachments/Configuring%20Hub%20survey%20types/05-deactivated-state.jpg)

Click the same icon again to reactivate it — you'll get a matching confirmation first:

![Confirm dialog asking "Are you sure you want to activate this?"](attachments/Configuring%20Hub%20survey%20types/06-activate-confirm.jpg)

## Things to know

- The list shows **Name**, **Owner**, **Lifecycle Status**, **Access**, **Created at**, and **Updated at** for every survey type. Use the **Include closed?** toggle, or the **Name**/**State** filters, to narrow it down.
- You can attach more than one form to a survey type — click the **+** next to Forms to add another row.
- Default tags apply automatically wherever a survey is created from this type, so they're a good place to pre-set things like a region or department tag instead of relying on people to add it themselves each time.

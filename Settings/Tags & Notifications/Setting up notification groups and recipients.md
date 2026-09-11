# Setting up notification groups and recipients

A notification group is a named set of people who should all receive the same notifications — for example everyone responsible for a region, or a particular team. This screen, under **Settings > Notification Groups**, is where an admin creates a group and decides who's in it.

## Creating a notification group

1. From the Notification Groups list, click **+ Notification Group**.

   ![Notification Groups list showing two existing groups, Dispatchers and Technicians, and the + Notification Group button](attachments/setting-up-notification-groups-and-recipients/01-notification-groups-list-annotated.jpg)

2. Give it a **Name** — for example **North Region Site Managers** — and an optional **Description**. Leave **Everyone** unchecked unless the group really should include every user in the organisation.

   ![New Notification Group form with Name "North Region Site Managers" and a Description filled in](attachments/setting-up-notification-groups-and-recipients/02-new-notification-group-form-annotated.jpg)

3. Click **Create Notification Group**. The group's page opens with empty **Tags** and **Users** sections, ready for recipients to be added.

   ![North Region Site Managers page with empty Tags and Users sections](attachments/setting-up-notification-groups-and-recipients/03-group-created-empty.jpg)

## Adding recipients

A notification group's recipients come from two places, not from an "add recipient" button on the group itself:

- **By tag** — go to **Settings > Tag Types**, open the relevant tag type, and edit the tag. Its **Notification groups** field is where you link it to one or more groups; everyone carrying that tag then becomes a recipient.

  ![Editing the North East tag with the Notification groups field searched for "North Region"](attachments/setting-up-notification-groups-and-recipients/04-tag-linked-to-group-annotated.jpg)

- **By named user** — go to **Settings > Users**, edit the person, and use the **Notification groups** field on their profile to add them directly.

  ![Editing Tom Fletcher's user profile with "North Region" typed into the Notification groups field](attachments/setting-up-notification-groups-and-recipients/05-user-added-to-group-annotated.jpg)

Once both are in place, the group's page lists everyone it now reaches — the tagged group plus the named individual:

![North Region Site Managers page showing the North East tag under Tags and Tom Fletcher under Users](attachments/setting-up-notification-groups-and-recipients/06-group-with-recipients.jpg)

## Things to know

- A group's recipients are the union of its tagged users and its directly-added users — someone only needs to match one of the two to receive notifications.
- Checking **Everyone** on a group overrides its tags and users entirely — notifications go to every user in the organisation regardless of what else is set up.
- A tag can be linked to more than one notification group at once, so the same "North East" tag could feed several different groups if needed.

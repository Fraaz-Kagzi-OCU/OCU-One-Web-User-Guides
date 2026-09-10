# Configuring app-launcher shortcuts

**Launcher apps** are shortcuts to other tools your organisation uses — dashboards, external systems, anything with a URL — that show up in the App Launcher menu next to the Search bar so people can jump to them from anywhere in OCU One. This screen lives under **Settings > Hub**.

## Creating a launcher app

1. From the Settings landing page, find **Launcher Apps** under the **Hub** section.

   ![Settings landing page with the Hub section expanded, showing Journeys, Survey Types, and Launcher Apps](attachments/Configuring%20app-launcher%20shortcuts/00-settings-hub-section.jpg)

2. From the Launcher Apps list, click **+ Launcher App**.

   ![Launcher Apps list, empty, with the + Launcher App button](attachments/Configuring%20app-launcher%20shortcuts/01-launcher-apps-empty.jpg)

3. Fill in its details:
   - **Name** — for example **Fleet Tracker**.
   - **Description** — an optional longer explanation, hidden behind an **Add description** link until needed.
   - **URL** — where the app lives, e.g. `https://fleet-tracker.example.com`.
   - **Logo** — upload an image file to represent the app in the launcher menu.

   ![New Launcher App form filled in with name, description, URL, and an uploaded logo file](attachments/Configuring%20app-launcher%20shortcuts/02-new-launcher-app-form.jpg)

4. Click **Create Launcher App**. It's added to the list with its logo shown as a coloured square:

   ![Launcher Apps list showing Fleet Tracker with its logo, owner, and access](attachments/Configuring%20app-launcher%20shortcuts/03-launcher-apps-list.jpg)

Once created, the app appears for everyone in the App Launcher menu (the grid icon near the top-right of the screen):

![App Launcher dropdown menu showing Fleet Tracker as an available shortcut](attachments/Configuring%20app-launcher%20shortcuts/04-app-launcher-menu.jpg)

## Viewing and editing a launcher app

Click a launcher app's name to open it in the same form used to create it, with its current values and uploaded logo filled in. Change any field and click **Update Launcher App** to save.

![Fleet Tracker open for editing, showing its saved name, description, URL, and logo file](attachments/Configuring%20app-launcher%20shortcuts/05-launcher-app-edit-view.jpg)

Two icons sit at the bottom-right of this panel: a **lock** icon showing the launcher app's access, and an **eye** icon for deactivating (or an eye with a line through it for reactivating) it.

## Deactivating a launcher app

Click the eye icon to deactivate a launcher app that's no longer needed. You'll be asked to confirm ("Are you sure you want to deactivate this?"). Once deactivated, it drops off the App Launcher menu for everyone and off the Launcher Apps list.

## Things to know

- The list shows **Name**, **Logo**, **Owner**, **Lifecycle**, **Access**, **Created at**, and **Updated at** for every launcher app. Use the **Name** or **State** filters to narrow it down.
- Turning on **Include closed?** does not currently bring a deactivated launcher app back into the list — once deactivated, a launcher app stops showing here regardless of that toggle.
- Name, URL, and Logo are all required — a launcher app can't be created without a working link and an image.

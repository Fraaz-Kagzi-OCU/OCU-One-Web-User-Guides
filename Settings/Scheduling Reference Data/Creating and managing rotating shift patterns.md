# Creating and managing rotating shift patterns

A **Pattern** defines a rotating work schedule — for example, a "4 days on, 4 days off" rota — made up of one or more **Shifts** that describe exactly which hours are worked on which day of the cycle. This screen lives under **Settings > Assets > Patterns**.

## Creating a pattern

1. From the Patterns list, click **+ Pattern**.

   ![Patterns list, empty, with the + Pattern button](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/01-patterns-list-empty.jpg)

2. Fill in:
   - **Name** — for example **4-on 4-off Rotation**.
   - **Description** — an optional longer explanation, hidden behind an **Add description** link until needed.
   - **Duration** — how many days the whole cycle covers before it repeats. For a "4 on, 4 off" rota that's **8** days.
   - **Start Date** — the date the cycle begins.

   ![New Pattern form filled in with name, description, 8-day duration, and a start date](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/02-new-pattern-form.jpg)

3. Click **Create Pattern**. It's added to the list, showing its **Days Duration**, **Start Date**, and **State**:

   ![Patterns list showing "4-on 4-off Rotation", 8 days, starting October 01, 2026](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/03-patterns-list-with-pattern.jpg)

## Adding shifts to a pattern

Click the pattern's name to open it. This page is where you build up the actual working hours for the cycle.

![Newly created pattern's page, with no shifts yet and the + New Shift / Add new Shift buttons](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/04-pattern-page-empty-shifts.jpg)

Click **Add new Shift** (or **New Shift** in the empty state) and fill in:
- **Start Time** and **Start Day** — when the shift begins. The Start Day dropdown lists every day in the pattern's cycle by name (e.g. "Thursday", "Friday" ... "2nd Thursday" once the cycle wraps around).
- **End Time** and **End Day** — when the shift ends.

![New Shift form set to Thursday 07:00 through Thursday 19:00](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/05-new-shift-form.jpg)

Click **Create Shift**. Repeat for each shift the pattern needs — here, a day shift on Thursday and another on Friday:

![Pattern page showing two shifts: "Thursday 07:00 - Thursday 19:00" and "Friday 07:00 - Friday 19:00", both active](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/06-two-shifts-created.jpg)

## Editing or deactivating a shift

Click a shift's name (e.g. "Thursday 07:00 - Thursday 19:00") to reopen it in the same form, with its values filled in — change anything and click **Update Shift** to save.

![Edit Shift form pre-filled with the existing start/end times and days](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/08-edit-shift-form.jpg)

Use the toggle next to a shift to deactivate it. It moves down into an **Inactive Shifts** section instead of being deleted:

![Friday shift toggled off and moved into the Inactive Shifts section](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/07-shift-deactivated.jpg)

Toggling it back on returns it to the active **Shifts** section.

## Editing a pattern's details

Click **Edit** at the top of the pattern's page to change its **Name**, **Description**, **Duration**, or **Start Date** in the same form used to create it.

![Edit Pattern form pre-filled with the pattern's saved name, description, duration, and start date](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/09-edit-pattern-form.jpg)

## Deactivating a pattern

From the Patterns list, click the eye icon in a pattern's **State** column to deactivate it. You'll be asked to confirm:

![Confirm dialog asking "Are you sure you want to deactivate this?"](attachments/Creating%20and%20managing%20rotating%20shift%20patterns/10-deactivate-pattern-confirm.jpg)

Once deactivated, the pattern drops off the default Patterns list. Turning on **Include closed?** does not currently bring it back into the list — once deactivated, a pattern stops showing here regardless of that toggle.

## Things to know

- A shift's start and end day are picked from the same list of cycle days, so a shift can span from one day into the next (for example, an overnight shift running from Thursday evening into Friday morning) as long as it doesn't overlap another shift already on the pattern.
- The app rejects a new shift if its hours overlap another shift already on the pattern — this includes a shift that starts at the exact moment another one ends, so back-to-back shifts need at least a minute's gap between them to save successfully.
- Deactivating a shift keeps it on the pattern (just excluded from Inactive Shifts) rather than deleting it, so it can be reactivated later without having to re-enter its times.

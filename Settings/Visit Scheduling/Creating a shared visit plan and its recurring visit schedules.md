# Creating a shared visit plan and its recurring visit schedules

A **Visit Plan** is a reusable schedule for recurring maintenance visits — for example, servicing every three months. Once created, a Visit Plan can be attached to any number of assets, and each Visit Plan can define one or more recurring **Visit Schedules** describing exactly when a visit should be made. This screen lives under **Settings > Assets > Visit Plans**.

## Creating a visit plan

1. From the Visit Plans list, click **+ Visit Plan**.

   ![Visit Plans list, empty, with the + Visit Plan button](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/01-visit-plans-empty-filtered.jpg)

2. Enter a **Name** — for example **Quarterly Fire Safety Servicing** — and click **Create Visit Plan**.

   ![New Visit Plan form with the Name field filled in](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/02-new-visit-plan-form.jpg)

3. You're taken straight to the new plan's page, on its **Visit Schedules** tab — empty until you add a schedule.

   ![Newly created "Quarterly Fire Safety Servicing" plan with an empty Visit Schedules tab and the + Visit Schedule button](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/03-visit-plan-created-empty-schedules.jpg)

## Adding a recurring visit schedule

Click **+ Visit Schedule** and fill in:
- **Repeat every** — a number and a unit (Day, Week, Month, or Year). For a quarterly visit, that's **3** **Month**.
- The row of day letters (M T W T F S S) — pick at least one day; this is required even when repeating monthly or yearly.
- **Make [Visit Type] visit [X] days in advance** — which type of visit to create, and how many days ahead of the due date it should be raised.

![New Visit Schedule form: repeat every 3 Month, Monday selected, Battery Checkup visit type, 7 days in advance](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/04-new-visit-schedule-form.jpg)

Click **Create Visit Schedule**. It's added to the plan's Visit Schedules tab, described in plain English:

![Visit Schedules tab showing "Every 3 months — Make Battery Checkup visit 7 days in advance"](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/05-visit-schedule-created.jpg)

## Editing or removing a schedule

Click a schedule's description (e.g. "Every 3 months") to reopen it in the same form, with its values filled in — change anything and click **Update Visit Schedule** to save.

To remove a schedule entirely, click the trash icon on its row. You'll be asked to confirm:

![Confirm dialog asking "Are you sure you want to delete this?"](attachments/Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules/06-delete-schedule-confirm.jpg)

## Things to know

- A Visit Plan created here can be attached to as many assets as needed, from that asset's own Visit Plans tab — it's designed to be reused, not tied to a single asset.
- A plan can have more than one Visit Schedule — for example, a plan could raise both a quarterly safety check and an annual deep inspection.
- Every schedule needs at least one day of the week selected, even if it only repeats monthly or yearly — the app uses the selected day(s) to work out exactly when in that period the visit falls due.

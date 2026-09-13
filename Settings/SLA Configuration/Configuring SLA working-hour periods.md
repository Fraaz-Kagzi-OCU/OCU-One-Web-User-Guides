# Configuring SLA working-hour periods

An SLA Period defines the working hours an SLA type's clock actually counts against — outside these windows, time doesn't count towards the amber/red/breach thresholds. This is the **SLA Periods** tab on an SLA type's detail page, under **Settings > SLA Types**.

## Adding a period

1. Open an SLA type and go to the **SLA Periods** tab, then click **+ New SLA Period**.

   ![SLA Periods tab, empty, with a "No SLA Periods" message and a + New SLA Period button](attachments/configuring-sla-working-hour-periods/00-periods-empty.jpg)

2. Set the **Start time**, **Day**, and **End time** (for example **09:00**, **Monday**, **17:00**), then click **Create SLA Period**.

   ![New SLA Period form with Start time 09:00, Day Monday, End time 17:00, with the Create SLA Period button highlighted](attachments/configuring-sla-working-hour-periods/01-new-period-monday-annotated.jpg)

3. Repeat for each day that should count towards the SLA clock — here, a full working week of **09:00–17:00** on Monday through Friday.

   ![SLA Periods tab listing five periods: Monday through Friday, all 09:00 - 17:00, each with an active toggle](attachments/configuring-sla-working-hour-periods/02-mon-fri-periods.jpg)

## Deactivating a period

Switching a period's toggle off moves it into the **Inactive SLA Periods** section below, without deleting it — useful for a temporary change like a bank holiday closure.

![Friday 09:00 - 17:00 period moved into the Inactive SLA Periods section, its toggle switched off](attachments/configuring-sla-working-hour-periods/03-friday-deactivated-annotated.jpg)

Click the toggle again to move it back to the active list.

## Things to know

- A day can't have two overlapping periods — the app blocks saving a period whose time range overlaps an existing one on the same day.
- No periods at all means the SLA clock runs continuously (24/7) — periods are what narrow it down to specific working hours.
- These periods work alongside the **Exclude public holidays** setting on the SLA type itself (see **Creating an SLA type and its escalation thresholds**) for a complete picture of when the clock is actually running.

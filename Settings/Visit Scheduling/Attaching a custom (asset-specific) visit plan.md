# Attaching a custom (asset-specific) visit plan

Besides the reusable visit plans found under Settings, you can also create a one-off visit plan directly from a single asset — useful when a visit only ever applies to that one asset and doesn't need to be reused anywhere else. This is done from the asset's own **Visit Plans** tab.

## Creating a custom visit plan on an asset

1. Open the asset and go to its **Visit Plans** tab.

   ![Asset's Visit Plans tab, empty, with the Attach button](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/01-asset-visit-plans-tab-empty.jpg)

2. Click **Attach**, then choose **New** (as opposed to **Existing**, which picks a visit plan already set up elsewhere).

   ![Attach dropdown showing New and Existing options](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/02-attach-dropdown-new-existing.jpg)

3. Fill in:
   - **Name** — for example **Generator Load Test - GEN-014**.
   - **Starts at** and **Ends at** — the date range this plan covers for this asset.

   ![New custom visit plan form filled in with a name, start date, and end date](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/03-new-custom-plan-form.jpg)

4. Click **Save**. The plan appears on the asset's Visit Plans tab, with its **Name**, **Starts at**, and **Ends at**:

   ![Asset's Visit Plans tab now showing the new custom plan with its start and end dates](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/04-visit-plans-tab-with-plan.jpg)

## Adding recurring schedules to a custom plan

Click the plan's name to open its own page — the same page and **Visit Schedules** tab used by plans created under Settings. From here you can add recurring visit schedules to it exactly the same way (see [Creating a shared visit plan and its recurring visit schedules](Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules.md) for the full walkthrough of that form).

![Custom plan's own page, with an empty Visit Schedules tab and + Visit Schedule button](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/05-custom-plan-own-page.jpg)

## Removing a custom visit plan from an asset

Click the trash icon on the plan's row in the asset's Visit Plans tab. You'll be asked to confirm:

![Confirm dialog asking "Are you sure you want to delete this?"](attachments/Attaching%20a%20custom%20%28asset-specific%29%20visit%20plan/06-delete-confirm.jpg)

## Things to know

- A custom visit plan created this way is tied to the asset it was created from — it does **not** appear in the main Settings > Visit Plans list, and can't be attached to any other asset. If you need the same plan across several assets, create it as a normal (shared) visit plan under Settings instead (see [Creating a shared visit plan and its recurring visit schedules](Creating%20a%20shared%20visit%20plan%20and%20its%20recurring%20visit%20schedules.md)), then use **Attach > Existing** to add it to each asset that needs it.

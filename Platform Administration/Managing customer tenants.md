# Managing customer tenants

This screen is only available to OCU's own platform team — it lists every customer organisation ("tenant") using OCU One, and lets you create a new one, view or edit its details, and enable or disable its access.

## Where to find it

Open **Tenants** from the platform navigation. Every existing tenant is listed here, one row per organisation:

![The Tenants list showing Acme Utilities Ltd and Insiris, with the + Tenant button highlighted](attachments/managing-customer-tenants/01-tenants-list-annotated.jpg)

## Creating a new tenant

Click **+ Tenant**. A form opens asking for:

- **Name** — the organisation's name, e.g. "Acme Utilities Ltd".
- **Timezone** — the default timezone new users in this tenant will get.
- **Default Timesheet Project** and **Default Project Code** — optional defaults used elsewhere once the tenant is up and running; these can be left blank and set later.
- **Admin user email address** and **Admin user password** — the very first login for this tenant. Both are required, and only appear when creating a brand-new tenant — you can't add or change them afterwards from this form.

![The New Tenant form filled in for Acme Utilities Ltd, with the Admin user email address field highlighted](attachments/managing-customer-tenants/02-new-tenant-form-annotated.jpg)

Click **Create Tenant** to save. The new tenant's own admin account is created automatically from the email and password you entered — that's the account whoever runs the organisation will use to sign in for the first time.

![The newly created Acme Utilities Ltd tenant's overview page](attachments/managing-customer-tenants/03-tenant-overview.jpg)

## Viewing and editing a tenant

Click a tenant's name from the list to open its overview, showing its **Name** and **Timezone**. From here, click **Edit** to change the name, timezone, or default timesheet project/project code.

![The Edit Tenant form, with the Disabled checkbox highlighted](attachments/managing-customer-tenants/04-edit-tenant-form-annotated.jpg)

**Good to know:** the **Admin user email address** and **Admin user password** fields only show up when creating a *new* tenant — editing an existing one never lets you change or re-set its admin account from here.

## Disabling a tenant

Tick **Disabled?** on the Edit form and save to revoke that tenant's access to OCU One entirely. The tenant's overview page immediately reflects this with a red **Disabled** badge in place of the green **Enabled** one:

![The tenant's overview page showing the red Disabled badge](attachments/managing-customer-tenants/05-tenant-disabled-annotated.jpg)

Unticking **Disabled?** and saving again restores access.

## Other things to know

- This whole area is gated to OCU's own platform team — it isn't something any customer's own users, even admins, can see or reach.
- There's no way to delete a tenant from here once created — disabling it is the only way to revoke its access.

# Managing contacts on a client, lead, or other record

A **Contacts** card appears in the sidebar of a client, lead, and most other kinds of record (records, tickets, jobs, and more) — anywhere you might need to keep track of a real person associated with that item, separately from the OCU One users who work on it. Each contact has a name, position, and contact details of their own.

## Where to find it

Open any client (or lead, record, ticket, job, etc.) and look at the sidebar. If a record has no contacts yet, the Contacts card shows an empty state:

![The Contacts card in a client's sidebar, showing the empty "Add contacts" state](attachments/managing-contacts-on-a-client-lead-or-other-record/01-contacts-card-empty.png)

## Adding a contact

Click the **+** button on the Contacts card. A form opens with:

- **First name** and **Last name** (both required)
- **Give this contact a label** — an optional expander that reveals a **Name** field, for giving the contact a label like "Billing Contact" or "Sales Contact", separate from their actual name
- **Position** — their job title
- **Primary** — a checkbox. Marking a contact as primary means it will then receive notifications and other actions for this record
- **Primary email** / **Secondary email**
- **Primary telephone** / **Secondary telephone**

![Filling in a new contact's details, with Primary checked, about to click Create Contact](attachments/managing-contacts-on-a-client-lead-or-other-record/02-new-contact-form.jpg)

Once saved, the contact appears in the card. A primary contact shows a blue check-badge next to their name:

![The Contacts card showing Priya Shah as the primary contact, with a blue badge and her position](attachments/managing-contacts-on-a-client-lead-or-other-record/03-contacts-card-with-primary.png)

## Viewing a contact's details

Click **View** on any contact to open their full details — full name, position, both email addresses, and both phone numbers, with quick **Email** and **Phone** action buttons next to whichever ones are filled in:

![A contact's detail view, showing Priya Shah's full name, position, primary email with an Email button, and primary telephone with a Phone button](attachments/managing-contacts-on-a-client-lead-or-other-record/04-contact-detail-view.jpg)

## Editing a contact

From the detail view, click **Edit** to update any of the same fields used when creating the contact:

![Editing a contact and adding a secondary telephone number](attachments/managing-contacts-on-a-client-lead-or-other-record/05-edit-contact.jpg)

## Changing who's primary

Only one contact on a record can be primary at a time. Marking a different contact as primary automatically un-marks whichever contact had it before — their badge disappears and moves to the new one:

![After marking Tom Reilly as primary instead, his row now shows the blue badge and Priya Shah's no longer does](attachments/managing-contacts-on-a-client-lead-or-other-record/09-primary-swapped.jpg)

## Viewing all contacts

If a record has more than one contact, the Contacts card shows a **View all** button underneath the list. This opens the full contacts list as a table, with columns for email, phone, the optional label, and which contact is primary:

![The full Contacts list for a record, shown as a table with Full name, Email, Phone, Name (label), and Primary columns](attachments/managing-contacts-on-a-client-lead-or-other-record/06-contacts-full-list-table.jpg)

**Note:** at the time of writing, this "View all" button doesn't appear the very first time you add a contact to a record that previously had none — it only shows up after the page has been reloaded. See `Zz - Known Bugs/view-all-contacts-button-missing-until-page-reload.md` for details. It appears normally for every contact added after that.

## Deleting a contact

From a contact's detail view, click the trash icon next to Edit, then confirm:

![Confirming deletion of the contact "Tom Reilly"](attachments/managing-contacts-on-a-client-lead-or-other-record/07-delete-confirm.jpg)

The contact is removed from the list immediately.

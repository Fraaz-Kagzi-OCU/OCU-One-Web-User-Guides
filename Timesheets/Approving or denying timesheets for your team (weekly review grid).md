# Approving or denying timesheets for your team (weekly review grid)

The review grid is where a manager works through a whole team's timesheets for a week at once — one row per person, one column per day — approving or denying entries without opening each one individually.

## Reading the grid

The grid shows one row per team member, one column per day of the selected week, and a running total on the right. Each coloured cell is a timesheet entry — pink for pending, green for approved, red for denied — showing the hours logged and its status:

![Weekly review grid showing two team members with pending timesheets, 5 Pending / 0 Approved](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/01-review-grid-baseline.jpg)

Across the top:
- **Pending / Approved** counts for the currently selected week and team
- A **date picker** to jump to a different week, and a **Weekend** checkbox to show or hide Saturday/Sunday
- An **Approver** dropdown — if you're set up to approve timesheets on behalf of another manager (as a "cover" approver), this lets you switch between your own team and theirs. It only appears when you have more than one team available to approve for.

Clicking a cell (a left click, not right-click) opens that entry's full detail instead of a menu — useful if you want to check what was logged before deciding:

![Individual timesheet entry detail panel showing 09:00 to 17:00, 8h, Pending](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/02-single-entry-detail.jpg)

## Approving or denying a single entry

The quick way, without opening the entry, is to **right-click** its cell to bring up its actions:

![Right-click context menu on a single cell with Approve and Deny options](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/03-right-click-approve-deny-menu-annotated.jpg)

Choosing **Approve** updates that entry immediately — no confirmation needed — and the pending/approved counts at the top update to match:

![Cell showing Approved status in green after approving](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/05-approved-result.jpg)

**Deny** works the same way, from the same right-click menu:

![Right-click context menu with Deny option highlighted](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/06-deny-context-menu-annotated.jpg)

A denied entry is shown in red, and the Pending count drops to match:

![Cell showing Denied status in red after denying](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/07-denied-result.jpg)

## Approving or denying a whole week at once

Rather than going cell by cell, you can act on everything a person logged that week in one go. Click their **Total** cell on the right of their row:

![Clicking a user's weekly Total cell brings up Approve and Deny options](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/08-week-total-menu-annotated.jpg)

Because this affects every entry that person logged that week, you're asked to confirm first — "Are you sure you want to approve all of this user's timesheets for this week?" (or the equivalent wording for Deny). Confirming updates every entry in one step and the grid refreshes to show the new totals.

## Things to know

- Right-clicking a day's column header (rather than an individual cell or a person's total) approves or denies that day for everyone shown in the grid — useful for clearing a single day across the whole team. It asks for confirmation the same way a whole-week action does.
- Whole-week and whole-day actions can fail partway through — for example if one of the entries involved has since been put on hold, closed, or is otherwise not in a state that can be changed. When that happens, the grid shows an error explaining how many entries couldn't be updated instead of silently skipping them, so you know to go back and check those ones individually:

  ![Error banner: "1 timesheet(s) were not updated because they are on hold, closed or live"](attachments/approving-or-denying-timesheets-for-your-team-weekly-review-grid/04-bulk-update-error.jpg)

- If you can't find someone's timesheet, check the **Approver** dropdown in the top right — you may be looking at your own team rather than the one you need to approve for.

# Pausing, resuming, restarting, cancelling, or satisfying an SLA

While an SLA is running, a row of command buttons on its overview page let you control its timer. Which buttons show depends on the SLA's current status.

![An SLA's command buttons — Pause, Restart, a status badge, Cancel, and Satisfy](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/01-command-buttons-annotated.jpg)

## Pausing and resuming

Click the **Pause** button to stop the SLA's clock — useful if work is on hold waiting on something outside your control. You'll be asked to confirm ("Are you sure you want to pause this SLA?").

Once paused, the SLA's status badge changes to **Paused**, the Pause button becomes a **Play** (resume) button, and the pause is logged in the Pauses list with a start time.

![The SLA showing a "Paused" status badge and a pause logged with a start time but no end time yet](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/02-paused-state-annotated.jpg)

Click **Play** to resume it (confirming "Are you sure you want to resume this SLA?"). The status returns to **Running**, the breach date is pushed back by however long it was paused, and the pause entry now shows both a start and end time.

![The SLA back to "Running", with the pause entry now showing both a start and end time](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/03-resumed-state.jpg)

## Restarting

Click the circular arrow (**Restart**) icon to reset the SLA back to a fresh timer — clearing all its pauses and recalculating the breach date from now. Confirm the prompt ("Are you sure you want to restart this SLA?") to go ahead.

![The SLA after restarting, showing "0m elapsed" and "No pauses yet" again, with the restart annotated](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/03-resumed-state-annotated.jpg)

![The SLA's overview page confirming the reset: 0m elapsed and no pauses](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/04-restarted-state.jpg)

## Cancelling

Click the no-entry (**Cancel**) icon to stop the SLA without marking it as satisfied — for example, if the underlying record is closed or no longer relevant. Confirm the prompt ("Are you sure you want to cancel this SLA?").

![The SLA's overview page annotated with the Cancel icon](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/04-restarted-state-annotated.jpg)

Once cancelled, the status badge reads **Cancelled**, and only the Restart and Satisfy actions remain available.

![The SLA showing a "Cancelled" status badge, with only Restart and Satisfy buttons left](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/05-cancelled-state.jpg)

## Satisfying

Click the tick (**Satisfy**) icon once the work the SLA is tracking is actually done. Confirm the prompt ("Are you sure you want to satisfy this SLA?").

![An SLA's command buttons with the Satisfy (tick) icon annotated](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/06-satisfy-command-annotated.jpg)

The status badge changes to **Satisfied**, and the **Satisfied at** field on the left is filled in with the time it was marked done.

![The SLA showing a "Satisfied" status badge and a filled-in Satisfied at time](attachments/pausing-resuming-restarting-cancelling-or-satisfying-an-sla/07-satisfied-state.jpg)

## Things to know

- Every one of these actions asks you to confirm first — there's no undo once you click through, other than using Restart to reset a cancelled or satisfied SLA back to running.
- Which buttons are available depends on the SLA's current status: a running SLA can be paused, restarted, cancelled, or satisfied; a paused one shows Play instead of Pause; a cancelled or satisfied SLA only shows Restart and Satisfy (or just Restart, if already satisfied).
- Pausing and resuming doesn't lose any progress — the time already spent still counts, and only the breach date shifts to account for the pause.

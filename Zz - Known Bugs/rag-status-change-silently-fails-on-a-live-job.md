# RAG status change silently fails on a live (booked/in progress) job

**Status:** Open
**Found in:** [Tracking a job's RAG health status](../Jobs/Tracking%20a%20job's%20RAG%20health%20status.md)
**Area:** Jobs

## Description

On a job's Overview tab, the **RAG Status** field has a dropdown (Green/Amber/Red) that's supposed to update the job's RAG status immediately. On a job that's currently "live" (status Booked, In Progress, or Incomplete), picking a new colour appears to work — the badge changes straight away — but the change is never actually saved. Reloading the page shows the RAG status back to whatever it was before. No error message, warning, or any other feedback is shown at any point, so there's nothing to tell the user the change didn't take.

## Preconditions

- A job with status Booked, In Progress, or Incomplete (any "live" status).

## Steps to Reproduce

1. Open a booked job and note its current RAG Status (e.g. "Amber").
2. Click the RAG Status dropdown and pick a different colour (e.g. "Red").
3. Reload the page.

## Expected Result

Either the RAG status change is saved and persists after reload, or — if RAG can't be changed on a live job by design — the dropdown is disabled or a clear error is shown explaining why.

## Actual Result

The badge visually updates to the new colour right after picking it, but the change silently fails to save. After a reload, the RAG status has reverted to its original value, with no error or warning shown at any point.

## Screenshot or Video

![Picking "Red" on a booked job's RAG Status dropdown, then reloading to reveal it silently reverted to "Amber"](attachments/tracking-a-jobs-rag-health-status/02-rag-status-silent-failure.gif)

![The job's RAG Status back to "Amber" after reload, despite having just picked "Red"](attachments/tracking-a-jobs-rag-health-status/03-reverted-to-amber-after-reload.jpg)

## Root cause (brief)

`JobsController#rag_status` (`app/controllers/jobs_controller.rb`) calls `@job.update(rag_status: params[:rag_status])` and does nothing with the return value — no flash, no re-render on failure. `Job`'s `ATTRIBUTES_EDITABLE_WHEN_LIVE` list (`app/models/job.rb`) doesn't include `rag_status`, so a `restricted_fields_update`-style validation rejects the change whenever `job.live?` is true (Booked/In Progress/Incomplete), and `update` simply returns `false` with an error on the model — which the controller never surfaces.

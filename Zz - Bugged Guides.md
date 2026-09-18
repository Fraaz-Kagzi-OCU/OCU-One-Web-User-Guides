# Bugged Guides

Guides whose own documented behavior is affected by a real, open app bug —
not a documentation gap, an actual feature that's broken. Each row here has
a matching `Blocked` cell set on that guide's row in its topic's
`_VERIFICATION.md`, which is what actually hides it from the verification
site (`scripts/generate-verification-site.js`) — this file is the
human-readable index of the same thing, kept so you can see at a glance
what's affected and why, without opening every `_VERIFICATION.md`.

See `WORKFLOW.md` for how a guide gets onto this list, stays hidden from
reviewers, and comes back once the bug is fixed (`/recheck-bugs` →
`/update-guide`).

## How to use this

- A guide lands here the moment `/write-guide` or `/update-guide` finds a
  genuine app bug that makes the guide's own documented behavior wrong (not
  a bug filed for unrelated reasons while building the guide — see
  `Zz - Known Bugs/` for the full bug write-up either way).
- **Guide currently mentions bug?** — whether the guide's own text still has
  an inline caveat about it. Going forward, new/updated guides don't get one
  (the guide is hidden from reviewers anyway while blocked, so there's
  nothing for an in-guide caveat to protect against) — existing caveats get
  stripped the next time that guide is rewritten via `/update-guide`, not
  edited in place just to remove the note.
- **Status** — `Open` (bug not yet fixed), `Fix shipped — needs rewrite`
  (confirmed fixed via `/recheck-bugs`, guide's `_progress.md` row flipped
  to `needs update`, waiting on `/update-guide`), or `Resolved` (guide
  rewritten, `Blocked` cleared, back in the normal verification cycle).
- When a row moves to `Resolved`, leave it in this file (struck through or
  just left as-is with the date) rather than deleting it — it's useful
  history of what's been fixed and when.
- **Defect logged?** — whether this bug has actually been logged on our
  defects page (the external tracker), as opposed to just having a write-up
  here and in `Zz - Known Bugs/`. `Yes` once it's been entered there, blank
  otherwise. This is tracked separately because a bug can be fully
  documented in this repo well before anyone logs it externally.

## Status

| Guide | Topic | Bug | Guide currently mentions bug? | Status | Defect logged? |
| ----- | ----- | --- | ------------------------------ | ------ | -------------- |
| [Managing contacts on a client, lead, or other record](Contacts%20%26%20Addresses/Managing%20contacts%20on%20a%20client%2C%20lead%2C%20or%20other%20record.md) | Contacts & Addresses | [view-all-contacts-button-missing-until-page-reload](Zz%20-%20Known%20Bugs/view-all-contacts-button-missing-until-page-reload.md) | Yes | Open | |
| [Viewing assigned records in your Assignments inbox](Assignments/Viewing%20assigned%20records%20in%20your%20Assignments%20inbox.md) | Assignments | [assigned-by-me-tab-always-shows-nothing-here](Zz%20-%20Known%20Bugs/assigned-by-me-tab-always-shows-nothing-here.md) | Yes | Open | |
| [Viewing assigned projects in your Assignments inbox](Assignments/Viewing%20assigned%20projects%20in%20your%20Assignments%20inbox.md) | Assignments | [assigned-by-me-tab-always-shows-nothing-here](Zz%20-%20Known%20Bugs/assigned-by-me-tab-always-shows-nothing-here.md) | Yes | Open | |
| [Deleting a product](Products%20%26%20Rates/Deleting%20a%20product.md) | Products & Rates | [deleting-a-product-does-not-cascade-to-sub-products](Zz%20-%20Known%20Bugs/deleting-a-product-does-not-cascade-to-sub-products.md) | Yes | Open | |
| [Managing cost rates on a product](Products%20%26%20Rates/Managing%20cost%20rates%20on%20a%20product.md) | Products & Rates | [cancelling-a-new-cost-rate-lands-on-the-rates-tab-not-costs](Zz%20-%20Known%20Bugs/cancelling-a-new-cost-rate-lands-on-the-rates-tab-not-costs.md) | Yes | Open | Yes |
| [Editing or removing a product allocation](Product%20Allocations/Editing%20or%20removing%20a%20product%20allocation.md) | Product Allocations | [product-recordings-table-columns-misaligned](Zz%20-%20Known%20Bugs/product-recordings-table-columns-misaligned.md) | Yes | Open | |
| [Exploring projects as a relationship graph](Projects/Exploring%20projects%20as%20a%20relationship%20graph.md) | Projects | [projects-explore-graph-never-loads](Zz%20-%20Known%20Bugs/projects-explore-graph-never-loads.md) | Yes | Open | |
| [Setting a project's RAG status](Projects/Setting%20a%20project%27s%20RAG%20status.md) | Projects | [rag-status-and-job-unlock-silently-fail-to-save](Zz%20-%20Known%20Bugs/rag-status-and-job-unlock-silently-fail-to-save.md) | No | Open | |
| [Locking and unlocking jobs on a project](Projects/Locking%20and%20unlocking%20jobs%20on%20a%20project.md) | Projects | [rag-status-and-job-unlock-silently-fail-to-save](Zz%20-%20Known%20Bugs/rag-status-and-job-unlock-silently-fail-to-save.md) | No | Open | |
| [Viewing a record's Access panel (visibility & ownership)](Access%20%26%20Visibility/Viewing%20a%20record's%20Access%20panel%20%28visibility%20%26%20ownership%29.md) | Access & Visibility | [visibility-set-to-private-shows-broken-activity-message](Zz%20-%20Known%20Bugs/visibility-set-to-private-shows-broken-activity-message.md) | Yes | Open | |
| [Creating an asset](Assets/Creating%20an%20asset.md) | Assets | [site-autocomplete-ignores-role-permission-scoped-by-access-only](Zz%20-%20Known%20Bugs/site-autocomplete-ignores-role-permission-scoped-by-access-only.md) | No | Open | |
| [Filling in and editing custom field values on a record](Custom%20Fields/Filling%20in%20and%20editing%20custom%20field%20values%20on%20a%20record.md) | Custom Fields | [first-time-filling-a-custom-field-group-crashes](Zz%20-%20Known%20Bugs/first-time-filling-a-custom-field-group-crashes.md) | No | Open | |
| [Creating and managing rotating shift patterns](Settings/Scheduling%20Reference%20Data/Creating%20and%20managing%20rotating%20shift%20patterns.md) | Settings: Scheduling Reference Data | [shift-cannot-be-created-back-to-back-with-adjacent-shift](Zz%20-%20Known%20Bugs/shift-cannot-be-created-back-to-back-with-adjacent-shift.md) | No | Open | |
| [Creating a batch invoice export](Invoice%20Exports/Creating%20a%20batch%20invoice%20export.md) | Invoice Exports | [creating-an-invoice-export-shows-no-selected-invoices-and-crashes-on-create](Zz%20-%20Known%20Bugs/creating-an-invoice-export-shows-no-selected-invoices-and-crashes-on-create.md) | No | Open | |
| [Viewing survey results and individual responses](Hub%20-%20Surveys/Viewing%20survey%20results%20and%20individual%20responses.md) | Hub - Surveys | [survey-response-drilldown-link-goes-to-wrong-page-and-crashes](Zz%20-%20Known%20Bugs/survey-response-drilldown-link-goes-to-wrong-page-and-crashes.md) | No | Open | |
| [Managing jobs linked to a record](Records/Managing%20jobs%20linked%20to%20a%20record.md) | Records | [job-created-with-nil-client-crashes-project-jobs-tab](Zz%20-%20Known%20Bugs/job-created-with-nil-client-crashes-project-jobs-tab.md) | No | Open | |
| [Attaching and detaching a permit on a record](Records/Attaching%20and%20detaching%20a%20permit%20on%20a%20record.md) | Records | [draft-permit-unsearchable-in-attach-picker](Zz%20-%20Known%20Bugs/draft-permit-unsearchable-in-attach-picker.md) | No | Open | |
| [Tracking a job's RAG health status](Jobs/Tracking%20a%20job's%20RAG%20health%20status.md) | Jobs | [rag-status-change-silently-fails-on-a-live-job](Zz%20-%20Known%20Bugs/rag-status-change-silently-fails-on-a-live-job.md) | No | Open | |
| [Accessing a Shared Intake Link and Identifying Yourself](Public%20Share%20Links/Accessing%20a%20Shared%20Intake%20Link%20and%20Identifying%20Yourself.md) | Public Share Links | [csrf-token-leaked-into-public-share-redirect-url](Zz%20-%20Known%20Bugs/csrf-token-leaked-into-public-share-redirect-url.md) | No | Open | |
| [Changing a visit's status](Visits/Changing%20a%20visit's%20status.md) | Visits | [no-way-to-change-a-visits-status-from-the-ui](Zz%20-%20Known%20Bugs/no-way-to-change-a-visits-status-from-the-ui.md) | No | Open | |
| [Updating an issue's RAG status](Issues/Updating%20an%20issue's%20RAG%20status.md) | Issues | [rag-status-badge-does-not-refresh-after-update](Zz%20-%20Known%20Bugs/rag-status-badge-does-not-refresh-after-update.md) | No | Open | |
| [Updating invoice status and RAG rating](Invoicing/Updating%20invoice%20status%20and%20RAG%20rating.md) | Invoicing | [activity-feed-says-created-sent-a-bill-for-a-pending-status-change](Zz%20-%20Known%20Bugs/activity-feed-says-created-sent-a-bill-for-a-pending-status-change.md) | No | Open | |
| [Creating and sending an invoice bill (PDF) to a client](Invoicing/Creating%20and%20sending%20an%20invoice%20bill%20%28PDF%29%20to%20a%20client.md) | Invoicing | [creating-or-previewing-an-invoice-bill-crashes-missing-template](Zz%20-%20Known%20Bugs/creating-or-previewing-an-invoice-bill-crashes-missing-template.md) | No | Open | |
| [Managing products/materials on an estimate](Estimates%20%26%20Quotes/Managing%20products%20materials%20on%20an%20estimate.md) | Estimates & Quotes | [adding-a-product-to-an-estimate-crashes-with-template-is-missing](Zz%20-%20Known%20Bugs/adding-a-product-to-an-estimate-crashes-with-template-is-missing.md) | No | Open | |
| [Viewing a client's invoices](Clients/Viewing%20a%20client%27s%20invoices.md) | Clients | [clients-invoices-tab-route-has-no-controller-action-or-ui-link](Zz%20-%20Known%20Bugs/clients-invoices-tab-route-has-no-controller-action-or-ui-link.md) | No | Open | |
| [Downloading a client PDF summary](Clients/Downloading%20a%20client%20PDF%20summary.md) | Clients | [clients-pdf-download-route-has-no-controller-action-or-ui-link](Zz%20-%20Known%20Bugs/clients-pdf-download-route-has-no-controller-action-or-ui-link.md) | No | Open | |
| [Activating or deactivating an SLA](SLAs/Activating%20or%20deactivating%20an%20SLA.md) | SLAs | [sla-activate-deactivate-has-no-ui-entry-point](Zz%20-%20Known%20Bugs/sla-activate-deactivate-has-no-ui-entry-point.md) | No | Open | |
| [Downloading or previewing a job task PDF](Job%20Tasks/Downloading%20or%20previewing%20a%20job%20task%20PDF.md) | Job Tasks | [job-task-download-button-shows-missing-translation-title](Zz%20-%20Known%20Bugs/job-task-download-button-shows-missing-translation-title.md) | No | Open | |
| [Viewing your personal skills wallet](Skills%20%26%20Compliance/Viewing%20your%20personal%20skills%20wallet.md) | Skills & Compliance | [wallet-dashboard-double-counts-missing-skill-requirements](Zz%20-%20Known%20Bugs/wallet-dashboard-double-counts-missing-skill-requirements.md) | No | Open | |
| [Reviewing, editing, or approving/rejecting skill evidence](Skills%20%26%20Compliance/Reviewing%2C%20editing%2C%20or%20approving%20rejecting%20skill%20evidence.md) | Skills & Compliance | [field-engineer-can-self-approve-skill-evidence](Zz%20-%20Known%20Bugs/field-engineer-can-self-approve-skill-evidence.md) | No | Open | |

## Summary

Bugged: 30 (0 resolved)

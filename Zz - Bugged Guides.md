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

## Status

| Guide | Topic | Bug | Guide currently mentions bug? | Status |
| ----- | ----- | --- | ------------------------------ | ------ |
| [Viewing assigned records in your Assignments inbox](Assignments/Viewing%20assigned%20records%20in%20your%20Assignments%20inbox.md) | Assignments | [assigned-by-me-tab-always-shows-nothing-here](Zz%20-%20Known%20Bugs/assigned-by-me-tab-always-shows-nothing-here.md) | Yes | Open |
| [Viewing assigned projects in your Assignments inbox](Assignments/Viewing%20assigned%20projects%20in%20your%20Assignments%20inbox.md) | Assignments | [assigned-by-me-tab-always-shows-nothing-here](Zz%20-%20Known%20Bugs/assigned-by-me-tab-always-shows-nothing-here.md) | Yes | Open |
| [Deleting a product](Products%20%26%20Rates/Deleting%20a%20product.md) | Products & Rates | [deleting-a-product-does-not-cascade-to-sub-products](Zz%20-%20Known%20Bugs/deleting-a-product-does-not-cascade-to-sub-products.md) | Yes | Open |
| [Managing cost rates on a product](Products%20%26%20Rates/Managing%20cost%20rates%20on%20a%20product.md) | Products & Rates | [cancelling-a-new-cost-rate-lands-on-the-rates-tab-not-costs](Zz%20-%20Known%20Bugs/cancelling-a-new-cost-rate-lands-on-the-rates-tab-not-costs.md) | Yes | Open |
| [Editing or removing a product allocation](Product%20Allocations/Editing%20or%20removing%20a%20product%20allocation.md) | Product Allocations | [product-recordings-table-columns-misaligned](Zz%20-%20Known%20Bugs/product-recordings-table-columns-misaligned.md) | Yes | Open |
| [Exploring projects as a relationship graph](Projects/Exploring%20projects%20as%20a%20relationship%20graph.md) | Projects | [projects-explore-graph-never-loads](Zz%20-%20Known%20Bugs/projects-explore-graph-never-loads.md) | Yes | Open |
| [Setting a project's RAG status](Projects/Setting%20a%20project%27s%20RAG%20status.md) | Projects | [rag-status-and-job-unlock-silently-fail-to-save](Zz%20-%20Known%20Bugs/rag-status-and-job-unlock-silently-fail-to-save.md) | No | Open |
| [Locking and unlocking jobs on a project](Projects/Locking%20and%20unlocking%20jobs%20on%20a%20project.md) | Projects | [rag-status-and-job-unlock-silently-fail-to-save](Zz%20-%20Known%20Bugs/rag-status-and-job-unlock-silently-fail-to-save.md) | No | Open |
| [Viewing a record's Access panel (visibility & ownership)](Access%20%26%20Visibility/Viewing%20a%20record's%20Access%20panel%20%28visibility%20%26%20ownership%29.md) | Access & Visibility | [visibility-set-to-private-shows-broken-activity-message](Zz%20-%20Known%20Bugs/visibility-set-to-private-shows-broken-activity-message.md) | Yes | Open |
| [Creating an asset](Assets/Creating%20an%20asset.md) | Assets | [site-autocomplete-ignores-role-permission-scoped-by-access-only](Zz%20-%20Known%20Bugs/site-autocomplete-ignores-role-permission-scoped-by-access-only.md) | No | Open |
| [Filling in and editing custom field values on a record](Custom%20Fields/Filling%20in%20and%20editing%20custom%20field%20values%20on%20a%20record.md) | Custom Fields | [first-time-filling-a-custom-field-group-crashes](Zz%20-%20Known%20Bugs/first-time-filling-a-custom-field-group-crashes.md) | No | Open |
| [Configuring app-launcher shortcuts](Settings/Hub%20Administration/Configuring%20app-launcher%20shortcuts.md) | Settings: Hub Administration | [launcher-apps-include-closed-does-not-show-deactivated-apps](Zz%20-%20Known%20Bugs/launcher-apps-include-closed-does-not-show-deactivated-apps.md) | No | Open |
| [Creating and managing rotating shift patterns](Settings/Scheduling%20Reference%20Data/Creating%20and%20managing%20rotating%20shift%20patterns.md) | Settings: Scheduling Reference Data | [launcher-apps-include-closed-does-not-show-deactivated-apps](Zz%20-%20Known%20Bugs/launcher-apps-include-closed-does-not-show-deactivated-apps.md) | No | Open |
| [Creating and managing rotating shift patterns](Settings/Scheduling%20Reference%20Data/Creating%20and%20managing%20rotating%20shift%20patterns.md) | Settings: Scheduling Reference Data | [shift-cannot-be-created-back-to-back-with-adjacent-shift](Zz%20-%20Known%20Bugs/shift-cannot-be-created-back-to-back-with-adjacent-shift.md) | No | Open |
| [Managing availability types](Settings/Scheduling%20Reference%20Data/Managing%20availability%20types.md) | Settings: Scheduling Reference Data | [launcher-apps-include-closed-does-not-show-deactivated-apps](Zz%20-%20Known%20Bugs/launcher-apps-include-closed-does-not-show-deactivated-apps.md) | No | Open |

## Summary

Bugged: 15 (0 resolved)

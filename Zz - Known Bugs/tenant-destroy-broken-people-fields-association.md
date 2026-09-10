# Deleting a tenant crashes due to a dangling model association

**Status:** Open (not reachable through any documented guide flow — no delete control exists in the UI; `TenantPolicy#destroy?` is hardcoded false)

## Description

`Tenant` declares `has_many :people_fields, dependent: :destroy` (`app/models/tenant.rb:110`), but no `PeopleField` model exists anywhere in the codebase. Calling `destroy` (or `destroy!`) on any `Tenant` record raises immediately. This isn't reachable through the app's own UI today — the **Managing customer tenants** screen has no delete control, and `TenantPolicy#destroy?` is hardcoded to `false` — so no user can trigger it. It only surfaces if something calls `Tenant#destroy` directly (console, a future feature, a script). Given there's no working way to delete a tenant at all, this is very likely *why* the policy disables it, rather than a deliberate design choice with its own working path underneath.

## Preconditions

- Console/backend access, since no UI delete control exists.
- Any `Tenant` record.

## Steps to Reproduce

1. In a Rails console: `Tenant.find(<any id>).destroy!`

## Expected Result

The tenant record (and its tenant-scoped data) is deleted.

## Actual Result

Raises immediately:
```
NameError: uninitialized constant Tenant::PeopleField
```
from inside the `dependent: :destroy` callback for the `people_fields` association.

## Screenshot or Video

Not applicable — no GIF: this bug has no UI manifestation to record, it only fires on a direct model-level `destroy` call, which nothing in the running app currently makes. Reproduced against a throwaway test tenant ("Acme Utilities Ltd", id 2) created and torn down in this session — see `Platform Administration/Managing customer tenants.md` for context.

## Root cause

`app/models/tenant.rb:110`:
```ruby
has_many :people_fields, dependent: :destroy
```
No `PeopleField` class exists under `app/models/` (or anywhere else in the codebase) as of this session, 2026-09-06.

Full console error trace, captured while cleaning up this session's test tenant:

```
NameError: Missing model class PeopleField for the Tenant#people_fields association. You can specify a different model class with the :class_name option.
  ...
  from app/models/tenant.rb:110:in association builder for Tenant#people_fields
  from .../active_record/associations/builder/association.rb:142:in 'block in add_destroy_callbacks'
  from .../active_record/callbacks.rb:423:in 'ActiveRecord::Callbacks#destroy'
  from .../active_record/persistence.rb:470:in 'ActiveRecord::Persistence#destroy!'
```

## Impact

Currently low — nothing in the product calls this path. But it means tenant deletion is completely non-functional at the code level, not just hidden by policy. Tearing down this session's own test tenant required deleting its ~70 tables' worth of tenant-scoped rows by hand (bypassing `Tenant#destroy` entirely) rather than a single `destroy` call.

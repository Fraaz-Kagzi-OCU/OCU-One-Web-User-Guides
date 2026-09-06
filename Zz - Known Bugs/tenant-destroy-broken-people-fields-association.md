# Deleting a tenant crashes due to a dangling model association

## What happens

`Tenant` declares `has_many :people_fields, dependent: :destroy` (`app/models/tenant.rb:110`), but no `PeopleField` model exists anywhere in the codebase. Calling `destroy` (or `destroy!`) on any `Tenant` record raises immediately:

```
NameError: uninitialized constant Tenant::PeopleField
```

This isn't reachable through the app's own UI today — the **Managing customer tenants** screen has no delete control, and `TenantPolicy#destroy?` is hardcoded to `false` — so no user can trigger it. It only surfaces if something calls `Tenant#destroy` directly (console, a future feature, a script). Given there's no working way to delete a tenant at all, this is very likely *why* the policy disables it, rather than a deliberate design choice with its own working path underneath.

## Reproduction

1. In a Rails console: `Tenant.find(<any id>).destroy!`
2. Raises `NameError: uninitialized constant Tenant::PeopleField` from inside the `dependent: :destroy` callback for the `people_fields` association.

Reproduced against a throwaway test tenant ("Acme Utilities Ltd", id 2) created and torn down in this session — see `Platform Administration/Managing customer tenants.md` for context. No GIF: this bug has no UI manifestation to record — it only fires on a direct model-level `destroy` call, which nothing in the running app currently makes.

## Impact

Currently low — nothing in the product calls this path. But it means tenant deletion is completely non-functional at the code level, not just hidden by policy. Tearing down this session's own test tenant required deleting its ~70 tables' worth of tenant-scoped rows by hand (bypassing `Tenant#destroy` entirely) rather than a single `destroy` call.

## Evidence

Full console error trace, captured while cleaning up this session's test tenant:

```
NameError: Missing model class PeopleField for the Tenant#people_fields association. You can specify a different model class with the :class_name option.
  ...
  from app/models/tenant.rb:110:in association builder for Tenant#people_fields
  from .../active_record/associations/builder/association.rb:142:in 'block in add_destroy_callbacks'
  from .../active_record/callbacks.rb:423:in 'ActiveRecord::Callbacks#destroy'
  from .../active_record/persistence.rb:470:in 'ActiveRecord::Persistence#destroy!'
```

`app/models/tenant.rb:110`:
```ruby
has_many :people_fields, dependent: :destroy
```

No `PeopleField` class exists under `app/models/` (or anywhere else in the codebase) as of this session, 2026-09-06.

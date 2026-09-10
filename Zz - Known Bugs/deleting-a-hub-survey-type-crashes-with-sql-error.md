# Deleting a Hub survey type crashes with a SQL error

**Status:** Open

## What happens

Destroying a `Hub::SurveyType` record (via Rails' `destroy`, not through any UI screen currently built — there is no delete button in the Settings > Hub > Survey Types screen itself) raises a database error instead of deleting the record:

```
PG::UndefinedColumn: ERROR:  column hub_survey_requests.survey_type_id does not exist
LINE 1: ...rvey_requests".* FROM "hub_survey_requests" WHERE "hub_surve...
```

Reproduced live while tearing down test data created for `Settings/Hub Administration/Configuring Hub survey types.md`:
1. Call `.destroy` on a `Hub::SurveyType` with no associated survey requests at all.
2. Rails still tries to load its (empty) `survey_requests` association as part of the `dependent: :destroy` cascade, and generates SQL filtering on `hub_survey_requests.survey_type_id` — a column that doesn't exist on that table (the real column is `hub_survey_type_id`).
3. The query fails immediately with `PG::UndefinedColumn`, regardless of whether any survey requests actually exist for that survey type.

## Root cause

`app/models/hub/survey_type.rb`:
```ruby
has_many :survey_requests, class_name: "Hub::SurveyRequest", dependent: :destroy
```

This association doesn't specify `foreign_key:`. Rails infers the foreign key from the declaring class's demodulized name (`Hub::SurveyType` → `survey_type_id`), but the actual column on `hub_survey_requests` (confirmed via `Hub::SurveyRequest.column_names`) is `hub_survey_type_id`. The association is missing `foreign_key: "hub_survey_type_id"`.

## Impact

Any code path that destroys a `Hub::SurveyType` — a rake task, a console cleanup, a future admin "delete" button — fails outright, even for a survey type with zero survey requests against it. There's currently no delete action wired up in the Settings UI for survey types (only activate/deactivate), so this doesn't block any documented end-user workflow today, but it will break the moment a delete action is added, and it already breaks any backend/console cleanup of a mistakenly-created survey type.

## Evidence

Reproduced live in this session's local dev environment, 2026-09-10, while deleting a disposable test survey type ("Site Safety Walkaround") built for `Settings/Hub Administration/Configuring Hub survey types.md`. Worked around by using `.delete` (skips callbacks, safe since the record had zero survey requests) instead of `.destroy` to complete cleanup.

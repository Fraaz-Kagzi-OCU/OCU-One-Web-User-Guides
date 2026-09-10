# Deleting a Hub survey type crashes with a SQL error

**Status:** Open

## Description

Destroying a `Hub::SurveyType` record (via Rails' `destroy` — there is no delete button in the Settings > Hub > Survey Types UI itself) raises a database error instead of deleting the record, even when the survey type has zero associated survey requests.

## Preconditions

- A `Hub::SurveyType` record (with or without associated survey requests — reproduces either way).
- Console/backend access, since no UI delete control currently exists.

## Steps to Reproduce

1. In a Rails console, call `.destroy` on a `Hub::SurveyType` record.

## Expected Result

The survey type is deleted (or, if it has associated survey requests, deleted along with them per `dependent: :destroy`).

## Actual Result

The query fails immediately with:
```
PG::UndefinedColumn: ERROR:  column hub_survey_requests.survey_type_id does not exist
LINE 1: ...rvey_requests".* FROM "hub_survey_requests" WHERE "hub_surve...
```
Rails tries to load the (possibly empty) `survey_requests` association as part of the `dependent: :destroy` cascade, generating SQL that filters on `hub_survey_requests.survey_type_id` — a column that doesn't exist on that table — regardless of whether any survey requests actually exist for that survey type.

## Screenshot or Video

Not applicable — console-only bug, no UI manifestation to capture. Reproduced live in this session's local dev environment, 2026-09-10, while deleting a disposable test survey type ("Site Safety Walkaround") built for `Settings/Hub Administration/Configuring Hub survey types.md`. Worked around by using `.delete` (skips callbacks, safe since the record had zero survey requests) instead of `.destroy` to complete cleanup.

## Root cause

`app/models/hub/survey_type.rb`:
```ruby
has_many :survey_requests, class_name: "Hub::SurveyRequest", dependent: :destroy
```

This association doesn't specify `foreign_key:`. Rails infers the foreign key from the declaring class's demodulized name (`Hub::SurveyType` → `survey_type_id`), but the actual column on `hub_survey_requests` (confirmed via `Hub::SurveyRequest.column_names`) is `hub_survey_type_id`. The association is missing `foreign_key: "hub_survey_type_id"`.

## Impact

Any code path that destroys a `Hub::SurveyType` — a rake task, a console cleanup, a future admin "delete" button — fails outright, even for a survey type with zero survey requests against it. There's currently no delete action wired up in the Settings UI for survey types (only activate/deactivate), so this doesn't block any documented end-user workflow today, but it will break the moment a delete action is added, and it already breaks any backend/console cleanup of a mistakenly-created survey type.


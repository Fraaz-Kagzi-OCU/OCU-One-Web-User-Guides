# Building a pipeline with stages

A pipeline is a named sequence of **stages** that a record moves through — for example a sales process or a fibre install workflow. Pipelines are built under **Settings > Pipelines**, then attached to whichever types should use them (see [Attaching a pipeline to a type](Attaching%20a%20pipeline%20to%20a%20type.md)).

## Creating a pipeline

1. From the Pipelines list, click **+ Pipeline**.

   ![Pipelines list with four existing pipelines and the + Pipeline button](attachments/building-a-pipeline-with-stages/01-pipelines-list-annotated.jpg)

2. Give it a **Name** (for example **Fibre Rollout**), an **Icon**, a **Colour**, how often it should **Refresh** on-screen (in seconds), and whether to **Hide closed stages** by default.

   ![New Pipeline form with Name "Fibre Rollout"](attachments/building-a-pipeline-with-stages/02-new-pipeline-form-annotated.jpg)

3. Click **Create Pipeline**. The pipeline's page opens with a row of tabs for every type it can be attached to (Stages, Asset Types, Issue Types, Project Types, Record Types, Ticket Types, User Types), starting on **Stages**.

   ![Fibre Rollout pipeline page with tabs for Stages, Asset Types, Issue Types, Project Types, Record Types, Ticket Types, and User Types](attachments/building-a-pipeline-with-stages/03-pipeline-created-tabs-annotated.jpg)

## Adding stages

1. Click **New Stage**, then give it a **Name** (for example **Survey**).
2. Set **Warning when older than** and **Critical when older than** — how long an item can sit in this stage before it's flagged amber, then red, on any board showing this pipeline.

   ![New Stage form for "Survey" with Warning set to 3 days and Critical set to 7 days](attachments/building-a-pipeline-with-stages/04-new-stage-form-annotated.jpg)

3. Pick whether the stage counts as **Open** or **Closed** overall, and tick **Close members?** if reaching this stage should automatically close whatever object lands in it (typical for a final stage).

   ![New Stage form for "Complete" with Close members? checked and Closed selected](attachments/building-a-pipeline-with-stages/05-closed-stage-close-members-annotated.jpg)

4. Click **Create Stage**, then repeat for each stage the pipeline needs. Stages appear in the order created and can be dragged to reorder:

   ![Fibre Rollout pipeline with five stages: Survey, Design, Installation, Testing (all Open) and Complete (Closed)](attachments/building-a-pipeline-with-stages/06-five-stages-final.jpg)

## Things to know

- **Locked?** on a stage prevents anything in it from being edited or deleted — useful for a stage representing finalised, signed-off work.
- Ageing thresholds (Warning/Critical) can be set in days, hours, and minutes together, for pipelines that need finer-grained SLA-style tracking than whole days.
- A stage's Open/Closed status feeds into reporting and dashboards elsewhere in the app — it's not just cosmetic.

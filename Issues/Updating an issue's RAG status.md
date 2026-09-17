# Updating an issue's RAG status

Where an issue's type has RAG (Red/Amber/Green) tracking turned on, its
Overview tab shows a **RAG Status** and **RAG Score** alongside its other
fields.

## Where to find it

Look for **RAG Status** among the issue's main details, shown as a
coloured dot and label with a dropdown arrow.

![RAG Status field showing "Amber" with a dropdown arrow](attachments/updating-an-issues-rag-status/01-before-amber.png)

*RAG Score reads "N/A (score does not impact status)" here, since this
issue type doesn't use automatic scoring.*

## Changing it

Click the RAG Status label to open the dropdown of Green / Amber / Red.

![RAG Status dropdown open, showing Green, Amber, and Red options](attachments/updating-an-issues-rag-status/02-rag-dropdown-open.png)

Pick whichever reflects the issue right now — for example, **Red**.

![RAG Status field still showing "Amber" straight after clicking Red](attachments/updating-an-issues-rag-status/03-after-clicking-red-still-shows-amber.png)

The field on screen doesn't update straight away — it keeps showing the
previous colour and label. Reload the page to see the change take effect.

![RAG Status correctly showing "Red" after reloading the page](attachments/updating-an-issues-rag-status/04-rag-red-after-reload.png)

## Things to know

- The RAG Status field only appears at all if the issue's **Issue Type**
  has RAG tracking enabled — set up in Settings, not something you can
  turn on from the issue itself.
- RAG status is a manual judgement call unless the issue type has
  automatic scoring configured, in which case the score drives the colour
  instead.

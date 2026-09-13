# Submitting, approving, and publishing a survey request

A newly created survey request starts life as a **Draft**, visible only to admins. Before anyone else can respond to it, it has to be submitted for review, approved by someone other than the person who created it, and then published. All of this happens from the survey request's **Survey Results** page — open it by clicking **Results** on its card in the channel feed.

## Submitting a draft for review

On a draft survey request's Survey Results page, click **Submit For Review** and confirm.

![Draft survey request's Results page, showing a "Submit For Review" button](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/01-draft-submit-for-review.jpg)

Once submitted, the page shows a **Move to Draft** button instead — anyone with access can pull it back to draft if it needs more changes.

![Same page after submitting for review, now showing a "Move to Draft" button](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/02-in-review-move-to-draft.jpg)

## Approving (or rejecting)

A survey request can't be approved by the same person who created it — someone else with access to the channel needs to review it. When a different admin or manager opens the same Results page while it's In Review, they see **Approve?** with a thumbs-up/thumbs-down instead of the submit/draft controls.

![Survey Results page viewed by a different manager, showing "Approve?" with green thumbs-up and red thumbs-down buttons](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/03-approve-reject-as-manager.jpg)

- Thumbs-up moves it to **Ready to Publish**.
- Thumbs-down sends it back to Draft, the same as Move to Draft.

## Publishing

Once approved, the Results page shows a **Publish** button.

![Results page in "Ready to Publish" status, showing a "Publish" button](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/04-ready-to-publish-publish-button.jpg)

Clicking it opens a dialog to choose when it goes live:

- **As soon as possible** — publishes it the next time the system processes scheduled publications.
- **Scheduled** — pick a future date and time instead.

![Publish confirmation dialog with "As soon as possible" and "Scheduled" options and a date/time field](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/05-publish-modal.jpg)

Confirming shows a "Survey Request was successfully published" notice. The survey shows as **Published** in the feed once the scheduled time is reached, and only then does its card become clickable for people to respond to it (see *Responding to a survey*).

## Archiving

The trash icon next to **Publish**/**View Responses** on the Results page deletes a still-draft request outright, or archives one that has already moved further along. Archived survey requests disappear from the channel feed entirely — they're no longer editable or visible to anyone browsing the channel.

![Results page for an archived survey request — no Submit/Approve/Publish controls remain, just the trash icon and View Responses](attachments/Submitting%2C%20approving%2C%20and%20publishing%20a%20survey%20request/06-archived-state.jpg)

## Things to know

- These same controls (Submit For Review, Approve/Reject, Publish, archive) only appear on the survey request's **Results** page — not on the "Edit" screen used to change its title. A known bug means the delete icon on that separate Edit screen doesn't work; always manage a survey request's status from its Results page instead.
- Approval is deliberately blocked for the request's own creator, so a second admin or manager always has to review it before it goes live.

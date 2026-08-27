# Exploring projects as a relationship graph

Alongside the list, drilldown, and pipeline board views, Projects offers an **Explore** view — intended to show projects as a node graph, with a line drawn between each project and its sub-projects, so you can see how a family of related projects connects at a glance rather than stepping through them one level at a time.

## Opening it

From the main Projects list, click the **Explore** icon (the leftmost icon above the list, next to Drilldown and Pipeline) to switch to this view.

![The Explore view, permanently stuck on a blank loading canvas](attachments/exploring-projects-as-a-relationship-graph/01-blank-broken-state.jpg)
*The Explore view as it currently appears — an empty canvas that never populates.*

## This view isn't working right now

**In this environment, the Explore view never actually draws anything** — it stays on a blank canvas indefinitely, with no error shown on screen. This isn't a data problem (there were 15 real, connected projects available to show, including two multi-level hierarchies) — it's a genuine fault in the feature itself: the page's request for graph data is being sent in a way the server doesn't accept, so the request fails silently and the graph never loads.

Because of this, the rest of this guide describes how the view is *intended* to work, based on its underlying design, rather than a live walkthrough — there was nothing on screen to show. Treat this as a heads-up for a known issue rather than a step-by-step guide until it's fixed.

**What it's meant to do**, based on how it's built:
- Every project you have access to appears as a small square node.
- A line is drawn connecting each project to its parent, so a hierarchy like "Network Upgrade Phase 2" and its children would appear as a connected cluster, while unrelated standalone projects would sit apart as single, unconnected nodes.
- The same filter and search tools available on the other project views should apply here too, letting you narrow down which projects are plotted before exploring their connections.

**Worth flagging to engineering:** this looks like a genuine bug, not a one-off — the Explore view's underlying request is sent as a GET, but the server route behind it only accepts POST, so every request fails before any graph data comes back. Until that's fixed, this view can't be used at all, by anyone, regardless of what data exists.

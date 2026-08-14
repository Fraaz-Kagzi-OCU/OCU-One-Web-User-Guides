# User Guides

End-user-facing how-to guides — written for the people who use the app day to day, not for developers. Each guide is a single self-contained `.md` file with numbered steps and screenshots stored alongside it under `attachments/<guide-slug>/`.

## Contents

### Planned vs Actual (PVA) — Commercial / Product Allocations
Start with the overview, then follow the flow: set up rates → allocate → adjust the plan → record what happened → view the results.

- [Overview — what Planned vs Actual means and how it all fits together](PVA/_Planned%20vs%20Actual%20-%20Overview.md)

**Setting up rates & categories**
- [Creating a rate book and its versions](PVA/Creating%20a%20rate%20book%20and%20its%20versions.md)
- [Setting product rates within a rate book version](PVA/Setting%20product%20rates%20within%20a%20rate%20book%20version.md)
- [Managing sell rates on a product](PVA/Managing%20sell%20rates%20on%20a%20product.md)
- [Managing cost rates on a product](PVA/Managing%20cost%20rates%20on%20a%20product.md)
- [Managing product allocation types](PVA/Managing%20product%20allocation%20types.md)
- [Managing rate categories](PVA/Managing%20rate%20categories.md)

**Allocating**
- [Allocating products or materials to a job, project, estimate, or variation](PVA/Allocating%20products%20or%20materials%20to%20a%20job%2C%20project%2C%20estimate%2C%20or%20variation.md)

**Adjusting the plan**
- [Raising a planned quantity change on an allocation](PVA/Raising%20a%20planned%20quantity%20change%20on%20an%20allocation.md)
- [Viewing planned quantity change history](PVA/Viewing%20planned%20quantity%20change%20history.md)
- [Editing or removing a product allocation](PVA/Editing%20or%20removing%20a%20product%20allocation.md)
- [Copying or transferring allocated products between records](PVA/Copying%20or%20transferring%20allocated%20products%20between%20records.md)
- [Bulk-applying a rate modifier to all allocated products](PVA/Bulk-applying%20a%20rate%20modifier%20to%20all%20allocated%20products.md)

**Recording what happened**
- [Recording actual product usage against an allocation](PVA/Recording%20actual%20product%20usage%20against%20an%20allocation.md)

**Seeing the results**
- [Viewing and managing product allocations on a project](PVA/Viewing%20and%20managing%20product%20allocations%20on%20a%20project.md)
- [Managing a task's product allocations tab](PVA/Managing%20a%20task%27s%20product%20allocations%20tab.md)
- [Viewing a project's commercial stats dashboard](PVA/Viewing%20an%20projects%20commercial%20stats%20dashboard.md)

## Folder layout

```
user guides/
├── README.md              this file
├── images/                 shared/misc images
└── PVA/                    Planned vs Actual guides
    ├── _Planned vs Actual - Overview.md
    ├── ...guide files
    └── attachments/         screenshots for PVA guides, one subfolder per guide
```

## Conventions

- **Naming**: guide filenames are the plain-English title of the workflow (e.g. `Raising a planned quantity change on an allocation.md`).
- **Screenshots**: live under `attachments/<slugified-guide-name>/`, numbered in the order they're referenced (`01-...`, `02-...`).
- **Cross-links**: guides link to each other with `[[Guide Name]]` wiki-style links (see the PVA overview for examples).

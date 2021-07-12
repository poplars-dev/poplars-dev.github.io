---
layout: customization
order: 5
name: Bank Entry Approval Workflow
package_name: poplar_bkenwf
apps:
  - BK
views:
  - BK0460
  - BK0450
screens:
workflows:
  - Bank Entry Approval
format: packaged
monthly_cost: 0
# presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
# demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
# docs: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---
Workflow to force approval for posting Bank Entries in the Sage 300 Bank
Services module.
<!--more-->

## How does it work?
Each Bank entry gets submitted for approval through Extender’s
workflow engine. Approver or Approvers are notified by email that
an entry has been submitted and requires approval.  Approver(s) can review and
approve/reject the entry from their Extender Workflow Console.

If approved, Bank Entry is automatically posted to Bank Services.
If rejected, Bank Entry is available to be updated and re-submitted to the
workflow for approval.

Also included is a custom workflow action to allow approver(s) to approve and
post multiple entries with one click. One entry is highlighted in the workflow
console. Approver(s) select the **Approve All** button, which
posts all entries that were submitted by the same user and on the same date as
the highlighted entry.

The following components are included:

- Bank Entry Approval Workflow Template
- Script to prevent users from updating Bank Entry that has been submitted for
  approval
- Relevant Email Message Templates
- Custom workflow action to approve multiple entries

---
**NOTE**

We recommend removing the "Post" button from Bank Entry using Sage
User Authorizations to ensure Bank Entries can only be posted through the
workflow.

---


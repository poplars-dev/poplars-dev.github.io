---
layout: customization
order: 1
name: Unique PO Numbers in A/P Invoices
package_name: poplar_uniqappo
monthly_cost: 0
perpetual_cost: 0
excerpt_separator: <!--more-->
screens:
    - AP2100
apps:
    - A/P
format: packaged
---

{{page.name}} is a simple customization that enforces the use of a unique PO
Number in the A/P Invoice entry screen.
<!--more-->

## How does it work?

This customization connects to the A/P Invoice Entry screen and monitors
the PO Number field.  When the field is changed, if a value is set, the 
customization checks whether it has been used in any other A/P Invoice Entry.
If so, the user is notified that the PO is a duplicate.

In the event that a duplicate PO Number is in place when the entry is saved,
the save will be stopped and a warning issued to the user.

{% include pricing.html %}

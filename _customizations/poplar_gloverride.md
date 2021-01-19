---
layout: customization
order: 5
name: Override G/L Account for Job Related Invoices
package_name: poplar_gloverride
excerpt_separator: <!--more-->
apps: 
    - A/R
    - G/L
views:
    - AR0033
format: tailored
monthly_cost: 37.50
perpertual_cost: 858
---

The G/L override account dynamically changes the Item Revenue
G/L Account for Job related A/R items.  It was originally developed
to automatically change G/L accounts based on the location a particular job 
was performed.

The customization derives a new account code based on the Item number,
default G/L account segment, and optional field information
but any logic can be applied to derive the updated G/L account.
<!--more-->

## How does it work?

The Override G/L Account customization connects to the A/R batch header.
Before an A/R invoice batch is posted, the customization updates the
G/L account for all entries in the batch based on the item, job location, and
default G/L account.

{% include pricing.html %}

---
layout: customization
order: 5
name: Regional Bottle Deposits
package_name: poplar_btldep
apps:
    - O/E
views:
    - OE0520
screens:
    - OE1100
format: packaged
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Automatically add deposits to O/E Orders based on the Item selected and the
ship-to destination for the order.

<!--more-->

## How does it work?

When a new line is added to an order, the Regional Bottle Deposits 
customization checks whether or not a deposit is defined for the item and 
ship-to state or region.

If a deposit does apply, a new line is automatically added to the order
with the correct deposit and amount.

When an order is updated, the customization verifies that all deposits are
set correctly.  For any that are not, they are automatically added, removed,
or updated to reflect new quantities.

{% include pricing.html %}

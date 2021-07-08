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
docs: 
excerpt_separator: <!--more-->
---

Automatically add a bottle deposit to O/E Orders based on the Item selected and
the ship-to destination for the order. The bottle deposit is applied as a 
miscellaneous charge.

<!--more-->

## How does it work?

Bottle deposits are configured for all applicable items using the Custom Table
Edit.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_btldep/bottle_deposit_entry.png" 
                      description="Entering the bottle deposite for B1-100/0, a large bottle of Cola, in New York." %}

Bottle deposits for all items can be imported and exported to Excel or other
file formats.  

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_btldep/bottle_deposits_by_item_state.png" 
                      description="Bottle deposits for California and New York." %}

Whenever an order is posted, the Regional Bottle Deposits 
customization checks whether or not a deposit is defined for the items and 
ship-to state or region.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_btldep/order_pre_post.png" 
                      description="Order for both bottle types, destined for California, before initial post." %}

If a deposit does apply, a new line is automatically added to the order
with the correct deposit and amount.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_btldep/order_with_deposits.png" 
                      description="Deposits added immediately after triggering item, with details in description." %}

When an order is updated, the customization verifies that all deposits are
set correctly.  For any that are not, they are automatically added, removed,
or updated to reflect new quantities.

{% include pricing.html %}

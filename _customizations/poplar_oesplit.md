---
layout: customization
order: 5
name: O/E Order Split
package_name: poplar_oesplit
integrations:
    - I/M
apps:
    - O/E
screens:
    - OE1100
views: 
format: packaged
monthly_cost: 75
presentation: 2145
excerpt_separator: <!--more-->
---

The O/E Order Split customization adds a button to the O/E Order Entry
screen that, when clicked, splits the order into child orders.  Each child
order contains all items with matching Location, Ship-Via, and Expected
Ship Date.

The parent order is marked as complete when split and optional fields are
used to track the splitting heirarchy.  For sites with Information Manager
Notes, related orders are displayed in an accompanying note with drill down 
on click.
<!--more-->
## Business Case

Developed to match an existing business process, this customization makes
it easy to split one O/E Order into many child orders based on when and 
where the items in the order will ship from.

## How does it work?

The O/E Order Split customization adds a button to the O/E Order Entry screen.
When clicked, the customization analyzes the order and identifies groupings
or items that are expected to ship from the same place on the same day.

For each grouping, a new child order is created with the same properties as the
parent order.  Once all the items have been added to child orders, the 
quantities on the parent order are reduced to zero and all order lines marked 
complete. 

Finally, optional fields are set on both the parent and the child 
orders so the hierarchy is easily viewed and audited.

If the Information Manager Notes integration is enabled a note is displayed
showing all related orders, parents and siblings, with drill-down.

## Features

O/E Order Splitting:

- create new child orders containing similar items at the click of a button;
- auditable history maintained in optional fields;
- related orders are easily identified and opened using the accompanying I/M Note.

{% include pricing.html %}

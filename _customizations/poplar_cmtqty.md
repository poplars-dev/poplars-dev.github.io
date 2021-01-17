---
layout: customization
order: 5
name: Committed Quantity Notification
package_name: poplar_cmtqty
apps:
    - O/E
views:
    - OE0520
    - OE0692
screens:
format: tailored
monthly_cost: 37.50
perpetual_cost: 858
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

The Committed Quantities Notification customization notifies the user
when an order is posted and any line has a committed quantity
less than the quantity ordered.

If this is the case, the Order Reference is optionally updated
to contain a string that stops it from being selected for shipping
by an external program.
<!--more-->

## Business Case

This customization was originally developed to notify both the operator
and an external shipping program that an order has items on back order and is
not eligible to be shipped.  

By setting the reference field on the order to include "Do Not Ship", the
external shipping software ignores the order until all items are committed.

## How does it work?

When an order is posted, the customization checks each order line.  If any
line has a quantity ordered greater than the quantity committed, 
a notification is displayed to the operator and the reference field updated.

{% include pricing.html %}

---
layout: customization
order: 5
name: Item Ship-To Restrictions
package_name: poplar_iccompliance
apps:
    - O/E
views:
    - OE0500
screens:
    - OE1100
excerpt_separator: <!--more-->
format: tailored
montly_cost: 75
perpetual_cost: 2145
---

The {{page.name}} customization stops users from 
adding lines for items that cannot be shipped to the order ship-to location.

This customization provides fine-grained control, to the postal code,
of which items can be shipped where.  It contains a custom table that is 
managed by the user to define locations items are allowed to be shipped. 
<!--more-->

## Business Case

For businesses that sell products with restrictions at the state or local
level, this customization can enforce compliance rules during order entry,
prohibiting non-compliant items from being ordered.

## How does it work?

This customization is bespoke and must be tailored to the 
specific customer requirements.  This version uses a custom table
to map an optional field name to a country, state, and postal code.

When a new item is added to an order, the ship-to country, state and
postal code are used to find the name of optional fields that 
items are compliant with the destination.  

If the item has at least one such optional field set to `Yes`, the 
line is added to the order.  Otherwise, a message is displayed and 
the insert is not allowed to complete.

## Features

Item Compliance:

- fine-grained control of allowed destinations to the postal code;
- user configurable through custom table and optional fields;
- enforcement of compliance rules during order entry.

{% include pricing.html %}

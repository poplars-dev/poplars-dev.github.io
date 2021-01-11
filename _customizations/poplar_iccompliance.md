---
layout: customization
order: 5
name: Item Compliance
package_name: poplar_iccompliance
apps:
    - O/E
views:
    - OE0500
screens:
    - OE1100
excerpt_separator: <!--more-->
format: bespoke
---

The Item Compliance customization stops users from 
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

The Item Compliance customization is bespoke and must be tailored to the 
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

## Pricing

The Item Compliance customization needs to be tailored to the customer
environment.  In addition to the base costs below, there is a one time 
setup cost to create a version specific to the customer requirements.  If
you'd like a free assessment and quote, please <a
href="mailto:chris@poplars.dev">contact us</a>.

The Item Compliance customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Item Compliance: $75

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Item Compliance: $2145

Requires 21% Annual Software Assurance (SA)

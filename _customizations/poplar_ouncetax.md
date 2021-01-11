---
layout: customization
order: 5
name: Ounce Taxes (Custom Taxes by Destination)
package_name: poplar_ouncetaxes
excerpt_separator: <!--more-->
apps:
    - O/E
views:
    - OE0500
    - OE0520
    - OE0400
    - OE0420
    - OE0691
    - OE0692
screens:
format: bespoke
---

The Ounce Taxes customization automatically calculates and adds an
additional tax to items in O/E Orders, Shipments, and Credit/Debit Notes when
they are of a particular item category and destined to a particular postal
code, city, or state.  The tax is calculated based on a non-stocking Unit of
Measure for the I/C item.

Although this customization was originally built to cater for Fizzy Drinks 
taxes in a US cities, it is easily adapted to any tax that applies only
in certain locations or that is calculated using a non-stocking UOM.
<!--more-->

## Business Case

Some jurisdictions apply taxes on specific items, such as fizzy drink 
or single-use plastic taxes.  Applying these taxes consistently by hand is both
time consuming and error prone.  This can be amplified in the case where, like 
fizzy drinks, the taxes are applied to a different Unit of Measure than ordered
- fizzy drinks are ordered in cases by taxed in ounces.

This customization applies location based taxes, optionally with a
different unit of measure than the order line, automatically.

## How does it work?

The Ounce Taxes customization monitors the O/E Order header.  Before an order
is created or updated, it checks each item to see whether location based taxes 
apply to the customer and or item tax authorities. 

If so, tax calculations are set to manual and calculated for the order.

## Features

Ounce Taxes:

- add taxes or surcharges based on item and ship-to location;
- optionally calculate taxes based on a different Unit of Measure (UOM) than
  ordered.

## Pricing

The Ounce Tax customization needs to be tailored to the customer
environment.  In addition to the base costs below, there is a one time 
setup cost to create a version specific to the customer requirements.  If
you'd like a free assessment and quote, please <a
href="mailto:chris@poplars.dev">contact us</a>.

The Ounce Tax customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Ounce Tax: $75

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Ounce Tax: $2145

Requires 21% Annual Software Assurance (SA)

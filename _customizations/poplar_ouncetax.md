---
layout: customization
order: 5
name: Ounce Taxes (Custom Taxes by Destination)
package_name: poplar_ouncetaxes
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
format: tailored
monthly_cost: 75
perpetual_cost: 2145
excerpt_separator: <!--more-->
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

{% include pricing.html %}

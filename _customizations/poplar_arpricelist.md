---
layout: customization
order: 5
name: A/R Price Lists
package_name: poplar_arpricelist
presentation: https://docs.google.com/presentation/d/1b3_Azo9zlphmyBBS_ERaalot6EilAHchNRkr47HYnng/edit?usp=sharing
demo: https://s3.amazonaws.com/dev.expi/content/poplar_arpricelist/poplar_arpricelist_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_arpricelist-1.1.4/docs/index.html 
screens:
    - AR2100
apps:
    - A/R
views:
    - AR0033
monthly_cost: 0
excerpt_separator: <!--more-->
format: packaged
---
The AR Price List module enables Sage users to maintain custom per Customer,
per Item, pricing.  It can be used when Sage's price list functionality is not
available.

The customization comes with both a screen script, to automatically update
prices as items are input into the AR Invoice entry scren, and an optional 
view script to update prices when invoices are input from other sources like
import or EDI.
<!--more-->

## Business Case

Some businesses do not require the Inventory Control module to conduct their
operations.  However, the price lists available in Accounts Receivable do not
allow per customer pricing out of the box.  

This customization addresses this
gap, allowing customers that do not have I/C to create and manage customer
specific pricing.

## How does it work?

The A/R Price List customization introduces a new set of Custom Tables to the
Sage 300 installation that enable per-customer, per-item pricing to be defined.

The customization does not replace the A/R price list functionality and doesn't
require that price lists be redefined.  Instead, it is used to track exceptions
to the default price list.

When an item is added to an invoice, search for a custom price for this
customer and item.  If one is found, it is automatically applied to the line.
Otherwise, the default A/R pricing is used.

## Features

Flexible pricing for A/R Items:

- enables per-customer and item pricing without I/C or O/E;
- automatically updates pricing in the A/R Invoice Entry screen as items are added;
- supports the import of pricing information from external sources, such as Excel.

## Demo

In the demo below, a custom price of $99 is set for item `BK-360` 
when sold to customer `1200`.  When a new invoice is created for customer 
`1200`, the unit price is automatically adjusted in the line.

<video width="640" controls>
  <source src="https://s3.amazonaws.com/dev.expi/content/poplar_arpricelist/poplar_arpricelist_demo.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

## Pricing

The A/R Price List customization is included with a Customization Manager 
Standard license.  Customization Manager is offered either on a monthly 
subscription or with a perpetual license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| A/R Price Lists: $0

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| A/R Price Lists: $0

Plus 21% Annual Software Assurance

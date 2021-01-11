---
layout: customization
order: 5
name: Backorders for Ship-To Location
package_name: poplar_backorders
apps:
    - O/E
views:
    - OE0520
screens:
    - OE1100
format: packaged
presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

While an O/E Order is being input, if there are open backorders for the 
customer ship to location, notify the user and optionally display a 
grid will all backordered items and their order details.
<!--more-->

## How does it work?

When the customer and ship-to on an order are both set, the customization
uses SQL to check for any items that are on back order for the customer
and location.  If any items are found, a prompt is displayed asking whether
to display further information.

If the user chooses to see more information, a custom UI is opened with a 
grid containing the items on backorder for the customer.  Double-clicking
an item in the grid will open the order in a new window.

## Demo

The demo below shows the customization in action, including how 
the customization is triggered (changing the customer or ship to),
the content of the prompts, the custom UI that displays back order information,
and the drill-down functionality in the grid.

<video width="640" controls>
  <source src="https://s3.amazonaws.com/dev.expi/content/poplar_backorders/poplar_backorders.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

## Pricing

The Backorder Notification customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Backorder Notification: $50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Backorder Notification: $1395

Requires 21% Annual Software Assurance (SA)

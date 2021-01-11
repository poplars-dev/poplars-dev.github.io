---
layout: customization
order: 5
name: Customer Backorder Notifications
package_name: poplar_bcknotify
apps:
    - O/E
views:
    - OE0520
    - OE0692
screens:
format: packaged
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

The Customer Backorder Notifications customization sends emails
to customers when orders are shipped with the details
of any items that remain on backorder.
<!--more-->

## How does it work?

When a shipment is posted, the Customer Backorder Notification script checks
each line in the order.  If any lines have quantity on backorder,
an email notification is generated based on a user configurable template and
emailed to the customer based on the A/R Customer delivery method.

## Pricing

The Customer Backorder Notification customization is sold under both perpetual
and subscription licensing.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Customer Backorder Notification: $37.50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Customer Backorder Notification: $858

Requires 21% Annual Software Assurance (SA)

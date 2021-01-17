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
monthly_cost: 37.50
perpetual_cost: 858
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

When a shipment is posted, the Customer Backorder Notification customization
checks each line in the order.  If any lines have quantity on backorder, an
email notification is generated based on a user configurable template and
emailed to the customer based on the A/R Customer delivery method.

{% include pricing.html %}

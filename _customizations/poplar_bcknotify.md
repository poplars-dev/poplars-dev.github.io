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
docs: 
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


{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_bcknotify/shipment_entry.png" 
                      description="Both items in the shipment have quantity on backorder." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_bcknotify/backorder_email.png" 
                      description="A email is generated from a configurable template and sent to the customer and admin." %}


{% include pricing.html %}

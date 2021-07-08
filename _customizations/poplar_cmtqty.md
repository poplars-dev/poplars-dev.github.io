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
format: packaged
monthly_cost: 37.50
perpetual_cost: 858
presentation: 
demo: 
docs: https://s3.amazonaws.com/dev.expi/media/public/poplar_cmtqty-1.0.4/docs/index.html
excerpt_separator: <!--more-->
---

The Committed Quantities Notification customization checks whether
any lines in an order have a committed quantity less than the
quantity ordered.  If so, either a message is displayed,
a field updated to a fixed value, or both.

The customization can be disabled for an order by setting an optional
field on the order header.
<!--more-->

## How does it work?

When an order is posted, the customization checks each order line.  If any
line has a quantity ordered greater than the quantity committed, the script
will either notify the user, set a field on the order header, or both.

By default, the script will display a notification and set the order 
reference field to `Do not ship - Back orders not allowed`.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_cmtqty/message.png" 
                      description="The first line has a quantity ordered of 10 but only 5 committed, a message is displayed on post." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_cmtqty/reference.png" 
                      description="The reference field is updated to notify the user an an external program." %}

When sufficient quantity has been committed to all order lines, the message
written to the field is removed.

The behaviour of the script can be configured to skip either the notification
or the field update, change the notification content, or change the field
and field content.

{% include pricing.html %}

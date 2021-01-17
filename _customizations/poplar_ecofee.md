---
layout: customization
order: 5
name: Eco Fees
package_name: poplar_ecofee
apps:
    - O/E
views:
    - OE0520
    - OE0692
    - OE0220
screens:
    - OE1100
format: packaged
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_ecofee/poplar_ecofee.mp4
docs_url: 
excerpt_separator: <!--more-->
---

Automatically add and manage environmental recycling fees to O/E Orders,
Shipments, Invoices, Credit and Debit Notes, based on 
item category and order shipping destination.
<!--more-->

## How does it work?

It all begins with a custom table that is used to configure the Eco Fee for 
each item category and province combination.

When an order is posted, the {{ page.name }} customization checks each line
to see if an environmental recycling fee is required.  If so, and there is no
fee present, a new line is added for the fee.

If a line is already present, it is updated to match the triggering line.  The
a fee line is left over after the triggering line was deleted, it is removed.

{% if page.demo %}
## Demo

The demo below begins with the configuration of an eco fee for items in 
category A1 being sent to Ontario, and another for items in category A1 
destined for British Columbia.  Orders are then created for both destinations
to demonstrate the automated adding, updating, and removal of fees.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

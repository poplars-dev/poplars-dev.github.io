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

## Pricing

{% if page.format != "packaged" %}
The {{ page.name }} customization must be tailored to fit the customer 
environment. As a consequence, there is a one-time setup cost in addition 
to the base cost for the customization, laid out below. For a free assessment
and quote,  <a href="mailto:chris@poplars.dev">contact us</a>.  
{% endif %}

{% if page.monthly_cost == 0 %}
The {{ page.name }} customization is included with a Customization Manager 
Standard license.  

Customization Manager Standard is offered either on a monthly 
subscription or with a perpetual license.
{% else %}
    {% if page.perpetual_cost %}
The {{ page.name }} customization is offered either on a monthly 
subscription or a perpetual license.
    {% else %}
The {{ page.name }} customization requires regular maintainance and is only
available under a subscription license.
    {% endif %}
{% endif %}

### Monthly Subscription Costs

| Customization Manager Standard: $50
| {{ page.name }}: ${{ page.monthly_cost }}

Billed annually

{% if page.perpetual_cost %}
### Perpetual License Costs

| Customization Manager Standard: $1287
| {{ page.name }}: ${{ page.perpetual_cost }}
{% endif %}

Plus 21% Annual Software Assurance

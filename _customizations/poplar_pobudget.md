---
layout: customization
order: 5
name: P/O Budget
package_name: poplar_pobudget
apps:
    - O/E
    - P/O
views:
    - OE0520
    - OE0692
integations:
    - I/M
screens:
monthly_cost: 100
perpetual_cost: 2925
format: tailored
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Track the total value of all invoices and orders assigned to a Customer
Purchase Order.  Display the PO budget information in an Information Manager
Note and warn users when a configurable amount of the budget remains.
<!--more-->

## Business Case

Automate the tracking of customer spend against their open purchase orders to
make sure there is sufficient budget available before accepting a new
order.

## How does it work?

The {{ page.name }} customization creates a new table for storing Customer
P/O Numbers and their total value.  The O/E Order Entry screen is updated
to replace the default P/O field with a finder field that only supports the
open POs for the Order Customer.

Once a PO has been assigned to an order, the budget remaining on the PO 
is calculated by subtracting orders and invoices already issued against the PO.
If the budget remaining is below a configurable threshold, a warning is issued
to seek a new PO from the customer.

## Features

P/O Budgets:

- track customer P/Os and their value in the database;
- enforce the presence of a valid customer P/O number in orders and invoices 
  by adding a finder to the P/O field and verifying the value on post;
- calculate the remamining budget and the impact of the current order on the 
  P/O Budget when an order is posted;
- displayed detailed PO budget information in an Information Manager Note.

{% if page.demo %}
## Demo

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

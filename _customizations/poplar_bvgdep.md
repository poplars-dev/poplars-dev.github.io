---
layout: customization
order: 5
name: Beverage Deposits
package_name: poplar_bvgdep
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
presentation: 1395
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Automatically add and manage a two level deposit for bottles: the first level
for the container size and the second for the container type. Deposits are 
presented at the end of the order in a single line per applicable deposit.
<!--more-->

## How does it work?

The {{ page.name }} customization creates a new custom table that maps items
to their first and second level deposits.  When an order is posted, the 
each line is reviewed and the deposits for the line added to a running total.

Once all lines have been considered, the total quantity for each applicable 
deposit is determined and a new line added to the order.

The customization continues to manage the deposits as orders are edited and
quantities are updated or lines removed.  Whenever the order is posted the
deposits are re-computed and reconciled.

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

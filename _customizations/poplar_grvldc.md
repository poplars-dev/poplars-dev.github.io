---
layout: customization
order: 5
name: Mix and Match Volume Discounts
package_name: poplar_grvldc
apps:
    - O/E
views:
    - OE0520
screens:
    -  OE1100
format: packaged
monthly_cost: 75
perpetual_cost: 2145
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Automatically apply additional discounts to order lines when the 
total volume ordered over a user-defined group of items exceeds a 
minimum quantity.

<!--more-->

## Business Case

Some business offer promotional pricing for items sold in groups,
for example you might receive a discount when at buying at least
10 or more cans of soup regardless of the type.

This customization automatically applies group volume discounts
for user configurable groups of items.  It analyzes orders to 
identify the group total and then applies the discounts as required.

## How does it work?

When an order is posted, the {{ page.name }} customization 
analyzes all the order lines.  It identifies which items
belong together in a group and the total order volume of the
group.

If the total volume across all items in the group exceeds the 
discount threshold, a discount is applied to all items.

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

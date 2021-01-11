---
layout: customization
order: 5
name: Verify Order Quantities
package_name: poplar_vfyoeqty
apps:
    - O/E
views:
    - OE0500
screens:
format: packaged
monthly_cost: 25
presentation: 645
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Verify that all order lines are divisible by a non-stocking UOM so
they will not need to be repacked for shipping.
<!--more-->

## How does it work?

When an order is posted, the {{ page.name }} customization checks
each line in the order. If the quantity ordered is not evenly divisible
by a specific non-stocking Unit of Measure, an error is raised and the
operator notified.

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

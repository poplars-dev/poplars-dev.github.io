---
layout: customization
order: 5
name: Set Optional Field on Event
package_name: poplar_setoptfon
apps:
    - A/P
    - A/R
    - O/E
    - P/O
    - B/K
    - I/C
views:
screens:
format: tailored
monthly_cost: 0
perpetual_cost: 0
presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

Set an optional field to just about any value, derived or otherwise, when an
event occurs on the associated object.  
<!--more-->

## How does it work?

A set of highly configurable view scripts that can be connected to any view 
with associated optional fields, this configuration monitors for the 
configured event and, when it occurs, calculates and sets a the optional field
value.

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
## Demo

<video width="640" controls>
  <source src="https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

## Pricing

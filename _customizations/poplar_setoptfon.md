---
layout: customization
order: 5
name: Set Optional Field upon Event
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
presentation: 
docs: 
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

{% include pricing.html %}

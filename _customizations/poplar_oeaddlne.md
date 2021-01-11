---
layout: customization
order: 5
name: Add a Line to an O/E Order
package_name: poplar_oeaddlne
apps:
    - A/P
    - A/R
    - O/E
    - P/O
views:
    - OE0520
    - OE0692
    - AR0024
    - AR0025
screens:
format: tailored
monthly_cost: 37.50
perpetual_cost: 858
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Add a line to an O/E Order - any line you need. This customization provides
a general base that adds a line, what that line is and when it is added depends
on the specific use case.  It can be tailored to add and manage deposits, environmental fees, local
levies, etc. on O/E Orders, shipments, debit and credit notes. 
<!--more-->

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

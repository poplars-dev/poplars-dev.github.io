---
layout: customization
order: 5
name: Print Three Order Confirmations
package_name: poplar_printthree
apps:
    - O/E
views:
screens:
    - OE1100
format: tailored
monthly_cost: 25
perpetual_cost: 645
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Add a button to the O/E Order Entry screen to generate and print three
reports in one go.

<!--more-->

## How does it work?

The {{ page.name }} customization adds a new button, 'Print x3', to the
O/E Order entry screen.  When clicked, three user-configurable 
order confirmation reports are generated and either printed or send as PDFs
over email.

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

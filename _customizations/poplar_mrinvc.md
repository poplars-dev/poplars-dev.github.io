---
layout: customization
order: 5
name: Most Recent O/E Invoice
package_name: poplar_mrinvc
apps:
    - O/E
views:
    - OE0520
screens:
    - OE1100
format: packaged
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_mrvinc/poplar_mrvinc_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_mrinvc-1.1.3/docs/index.html
excerpt_separator: <!--more-->
---

Display a prompt with the most recent O/E Invoice for a customer when the 
Customer field is set in a new order, asking the user whether to open the
invoice in inquiry mode to view more details.
<!--more-->

## How does it work?

When the Customer Number is set on a new order, the {{ page.name }} 
customization uses SQL to quickly locate the most recent O/E Invoice
for the customer.  

If an invoice is found, a prompt is displayed with the invoice details
offering to open the invoice in inquiry mode.

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


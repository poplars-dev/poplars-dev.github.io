---
layout: customization
order: 5
name: A/R Receipt Miscellaneous Adjustment Optional Fields
package_name: poplar_miscadjf
apps:
    - A/R
    - G/L
views:
screens:
    - AR3100
    - GL0006
    - GL0010
format: tailored
monthly_cost: 75
perpetual_cost: 2145
presentation: 
demo: 
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_adjpromo-1.1.2/docs/index.html
excerpt_separator: <!--more-->
---

Add optional fields to the A/R Receipt Miscellaneous Adjustments, display them
in the Miscellaneous Receipts pop up screen grid, and propagate them to the G/L
when the receipts are posted and processed.
<!--more-->

## How does it work?

The {{ page.name }} customization allows optional fields to be assigned to 
A/R Receipt Miscellaneous Adjustments.  Configure an optional field like any
other, along with default values and validation lists, and use the 
customization to assign them to Miscellaneous Adjustments.

All configured optional fields are automatically displayed in new, editable,
columns of the Miscellaneous Adjustments pop-up screen grid so they can easily
be managed in-line with the adjustment details.

When the adjustments are posted, the optional fields are propagated to the G/L
entries.

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
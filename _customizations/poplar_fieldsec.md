---
layout: customization
order: 5
name: Field Level Security
package_name: poplar_fieldsec
apps:
    - A/P
    - A/R
    - O/E 
    - P/O
    - B/K
views:
screens:
format: tailored
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Add new permissions or logic to control access to any field in Sage based on
the currently logged in user, document state (New, Posted, Processed) or field 
values, whether the user editing the document is the same as the user that
entered it, or custom permissions.  

For users that do not have permission to edit a field, the field is disabled or
removed from the screen entirely.

[A/P Tax Number Security](/customizations/poplar_apsecaud.html) is built on
this customization.
<!--more-->

## How does it work?

When the {{ page.name }} customization is installed, it monitors the
logged in user, any relevant permissions, and the document state. When
the screen is opened, the field is disabled or removed from the screen
based on these factors and your custom logic.

An additional layer of security is implemented at the View level, to enforce
the permissions even when changes are not made through a screen.

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

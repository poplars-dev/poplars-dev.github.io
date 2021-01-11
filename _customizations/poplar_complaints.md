---
layout: customization
order: 5
name: Complaint Form
package_name: poplar_complaints
apps:
    - A/R
views:
screens:
format: tailored
monthly_cost: 50
presentation: 1395
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

A custom screen to capture the details of a complaint regarding an order
and save them in a custom table in the database.  The form has well defined
input validation, allowing the complaints to be reported on reliably.
<!--more-->

## How does it work?

A custom UI has been developed to capture 12 pieces of information relevant
to the complaint, as well as the order and order lines in question.  When a new
complaint is received, the UI is opened, the related order lines selected, and
the details of the complaint filled out.  All fields are validated to ensure
consistent input.

Reports are generated to better understand which products are responsible
for the most complaints to inform Quality Assurance.  Storing the information
alongside the order allows order entry staff, already familiar with Sage, to
capture the complaint details without having to change applications.

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

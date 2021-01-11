---
layout: customization
order: 5
name: Generate EFT Receipt Batches
package_name: poplar_eftreceipt
apps:
    - E/L
screens:
    - EL1027
format: tailored
monthly_cost: 50
perpetual_cost: 1395
presentation:
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Create a standard Receipt Batch, a zero value Receipt Batch, and
a refund Receipt Batch with the click of a button.
<!--more-->

## How does it work?

The {{ page.name }} customization adds a new button to the 
Create Receipt/Refund Batch screen.  When clicked, the customization
automatically generates the three batches in order: standard receipt;
zero value receipt; and refund receipt.

Once the batches have been created a summary of the batches created and 
any errors encountered is displayed for the user.

This customization is compatible with Process Scheduler, so the creation
of the three batches can be run on a schedule without user intervention.

{% if page.demo %}
## Demo

The demo below begins with the configuration of an eco fee for items in 
category A1 being sent to Ontario, and another for items in category A1 
destined for British Columbia.  Orders are then created for both destinations
to demonstrate the automated adding, updating, and removal of fees.

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
The {{ page.name }} customization requires regular maintenance and is only
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

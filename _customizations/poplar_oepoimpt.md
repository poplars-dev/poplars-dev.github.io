---
layout: customization
order: 5
name: Import from CSV
package_name: poplar_importcsv
apps:
    - O/E
    - A/P
    - A/R
    - G/L
    - B/K
    - I/C
views:
screens:
format: tailored
monthly_cost: 50
presentation: 1395
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

This is a base on which custom CSV Import is built. Custom import 
routines can be more flexible than built-in, importing data across 
many views, or creating missing objects (such as customers, vendors, or
ship-tos) during import.
<!--more-->

## How does it work?

Given a CSV file that needs importing, we tailor a version of this 
customization to match the import file.  

With the custom importer in place, a new icon to import from CSV is
added to the Sage desktop. When run, a screen is opened prompting for the
file to import.  

Once the file has been imported, a full report is generated and displayed to
the user, including the objects imported and any errors encountered.

The {{ page.name }} customization is compatible with Process Scheduler and
can be setup to automaticalle import files present ina directory at interval - 
alloweing the import process to be fully automated.

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

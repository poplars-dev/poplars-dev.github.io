---
layout: customization
order: 5
name: Import from Excel
package_name: poplar_importxlsx
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
perpetual_cost: 1395
presentation:
demo: 
docs: 
excerpt_separator: <!--more-->
---

This is a base on which custom Excel Import can be built. Custom import 
routines can be more flexible than what is built-in, importing data across 
many views, or creating missing objects (such as customers, vendors, or
ship-tos) during import.
<!--more-->

## How does it work?

Given an Excel file that needs importing, we tailor a version of this 
customization to match the import file.  

With the custom importer in place, a new icon to import from excel is
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

{% include pricing.html %}

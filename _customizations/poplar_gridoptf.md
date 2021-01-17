---
layout: customization
order: 5
name: Grid Optional Field
package_name: poplar_gridoptf
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

A simple customization that adds an optional field to a grid.  The field can be
made either read-only or read-write.  All changes to the grid are immediately
applied to the optional field.  

If the optional field has a validation list, a finder is provided in the grid
and only valid values are allowed.
<!--more-->

The {{ page.name }} customization needs to be tailored to display the correct
optional field in the correct location.

{% include pricing.html %}

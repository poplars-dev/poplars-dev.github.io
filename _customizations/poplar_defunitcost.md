---
layout: customization
order: 5
name: Default Line Unit Cost to Markup Cost
package_name: poplar_defunitcost
apps:
    - O/E
views:
    - OE0520
screens:
    - OE1100
format: packaged
monthly_cost: 25
perpetual_cost: 645
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

Automatically default the Unit Cost on O/E Order lines to the Markup Cost
set in the price list for items in a particular account set.
<!--more-->

## How does it work?

When a new line is inserted in an O/E Order the {{ page.name }} customization
checks whether the item's account set matches the configured account set.

If so, the markup cost for the item is extracted from the price list and used
to replace the default unit cost for the line.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

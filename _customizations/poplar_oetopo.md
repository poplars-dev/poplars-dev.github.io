---
layout: customization
order: 5
name: O/E Order Subset to P/O
package_name: poplar_oetopo
apps:
    - O/E
    - P/O
views:
    - OE0520
    - PO0630
screens:
    - OE1100
    - PO1210
format: packaged
monthly_cost: 75
perpetual_cost: 2145
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Generate a new Purchase Order from a subset of an O/E Order.  Similar to the
built-in O/E Order to Purchase Order functionality, this customization 
allows the user to select only a subset of lines to include in the Purchase 
Order.
<!--more-->

## How does it work?

The {{ page.name }} customization add a new button to the O/E Order Entry 
screen.  When clicked, a custom screen is opened listing all items in
the order that allows the user to select the subset of lines to include
in the new Purchase Order.  

Once the selection is complete, a new Purchase Order is created containing
only the items the user selected.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

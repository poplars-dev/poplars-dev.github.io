---
layout: customization
order: 5
name: Verify Order Quantities
package_name: poplar_vfyoeqty
apps:
    - O/E
views:
    - OE0500
screens:
format: packaged
monthly_cost: 25
perpetual_cost: 645
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Verify that all order lines are divisible by a non-stocking UOM so
they will not need to be repacked for shipping.
<!--more-->

## How does it work?

When an order is posted, the {{ page.name }} customization checks
each line in the order. If the quantity ordered is not evenly divisible
by a specific non-stocking Unit of Measure, an error is raised and the
operator notified.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

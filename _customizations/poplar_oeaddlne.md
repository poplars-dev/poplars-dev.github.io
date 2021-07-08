---
layout: customization
order: 5
name: Add a Line to an O/E Order
package_name: poplar_oeaddlne
apps:
    - A/P
    - A/R
    - O/E
    - P/O
views:
    - OE0520
    - OE0692
    - AR0024
    - AR0025
screens:
related: 
    - poplar_ecofee
    - poplar_btldep
    - poplar_delcharge
    - poplar_bvgdep
format: tailored
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

This customization provides a general base that adds a line, what that line
contains and when it is added depends on the specific use case.  It can be
tailored to add and manage deposits, environmental fees, local levies, etc. on
O/E Orders, shipments, debit and credit notes. 

The [Eco Fees](/customizations/poplar_ecofee.html),
[Bottle Deposit](/customizations/poplar_btldep.html),
and [Delivery Charges](/customizations/poplar_delcharge.html) customizations
are all built on the {{ page.name }} customization.
<!--more-->

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

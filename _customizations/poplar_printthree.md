---
layout: customization
order: 5
name: Print Three Order Confirmations
package_name: poplar_printthree
apps:
    - O/E
views:
screens:
    - OE1100
format: tailored
monthly_cost: 25
perpetual_cost: 645
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

Add a button to the O/E Order Entry screen to generate and print three
reports in one go.

<!--more-->

## How does it work?

The {{ page.name }} customization adds a new button, 'Print x3', to the
O/E Order entry screen.  When clicked, three user-configurable 
order confirmation reports are generated and either printed or send as PDFs
over email.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

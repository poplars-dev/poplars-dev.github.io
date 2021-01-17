---
layout: customization
order: 5
name: Streamlined Order Entry
package_name: poplar_oestream
apps:
    - O/E
views:
screens:
    - OE1100
format: tailored
monthly_cost: 1395
perpetual_cost: 50
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

For businesses that handle large order volumes, this 
customization simplifies the screen and implements a default
print behaviour, skipping prompts to print after post.  

A more streamlined order entry experience.
<!--more-->

## Business Case

Handling large numbers of orders manually can be time consuming and
error prone.  By focusing the screen on only the information required
and removing prompts that interrupt the operator's flow, order input 
can be made more consistent and be done in less time.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

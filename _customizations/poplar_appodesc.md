---
layout: customization
order: 5
name: P/O Invoice Line Description to A/P
package_name: poplar_appodesc
apps:
    - A/P
views:
    - AP0021
screens:
    - AP2100
format: packaged
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_appodesc/poplar_appodesc.mp4
docs_url: 
excerpt_separator: <!--more-->
---
When a new A/P Invoice Batch is created, if it was generated from P/O,
copy the P/O Invoice line description to the A/P Invoice line comment.
<!--more-->

## How does it work?

When a new A/P Invoice batch is automatically generated during P/O 
periodic processing, the {{ page.name }} customization checks each
line in the A/P invoice, finds the corresponding P/O line, and if the
description is set copies it to the A/P invoice line.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

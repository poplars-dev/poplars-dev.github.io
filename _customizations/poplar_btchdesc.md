---
layout: customization
order: 1
name: Batch Descriptions to G/L
package_name: poplar_btchdesc
monthly_cost: 0
perpetual_cost: 0
excerpt_separator: <!--more-->
screens:
views:
    - GL0006
apps:
    - A/P
    - A/R
    - B/K
    - G/L
demo: https://s3.amazonaws.com/dev.expi/content/poplar_btchdesc/poplar_btchdesc.mp4
format: packaged
---

{{page.name}} copies batch descriptions from the source application, such as 
A/P or A/R, to the system generated batch description in G/L.
<!--more-->

## How does it work?

When a new G/L batch is created, if the source ledger and type are 
configured for batch decription copy, the description of the source batch
is automatically copied to the G/L batch.

If the G/L batch is configured to auto-post, the description is set before
the post takes place, maintaining it through to the posted G/L.

{% if page.demo %}
## Demo

The demo below begins with the default Sage behaviour, which automatically sets
G/L batch descriptions to a system generated string.  Using Customization
Manager, the {{page.name}} customization is installed and then the copy of an
A/P invoice batch description to the G/L is demonstrated.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}
{% include pricing.html %}

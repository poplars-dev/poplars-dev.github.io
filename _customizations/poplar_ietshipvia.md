---
layout: customization
order: 5
name: Order Line Ship-Via based on Vendor
package_name: poplar_ietshipvia
apps:
  - OE
views:
  - OE0500
screens:
format: packaged
monthly_cost: 0
# presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
# demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
# docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

Automatically set the Ship-Via on an O/E Order line based on the item Vendor 1.
Useful for automatically setting the ship-via for Inter-Entity items.
<!--more-->

This customization automatically sets the Ship-Via on O/E Order lines for items
that have an Inter-Entity vendor set as vendor 1.  

Use this customziation to 
automatically set the ship-via for inter-entity items.

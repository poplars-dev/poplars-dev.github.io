---
layout: customization
order: 5
name: Contract Minimum Amount for Free Freight
package_name: poplar_contractmin
apps:
views:
screens:
format: tailored
monthly_cost: 100
# presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
# demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_contractmin-1.0.12/docs/index.html
excerpt_separator: <!--more-->
---

Define contracts with a minimum order amount for a Customer and Item to
receive free freight.
<!--more-->

This customization introduces a simple contract object that can be used
to track minimum order amounts by customer and item, for a fixed period 
or indefinitely, to receive free freight.

Orders with quantities less than the minimum contract amount and without
a freight miscellaneous charge will raise a notification on post.


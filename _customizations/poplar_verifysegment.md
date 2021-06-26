---
layout: customization
order: 5
name: Verify G/L Entry Segments
package_name: poplar_verifysegment
apps:
views:
screens:
format: tailored
monthly_cost: 100
# presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
# demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
# docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

Verify that a particular segment of all G/L accounts in an entry are the same.
<!--more-->

This customization validates that all G/L Accounts in an entry share the same 
value in a particular segment.  Entries with mismatched segments will fail to
post until updated.

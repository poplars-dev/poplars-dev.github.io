---
layout: customization
order: 5
name: Log O/E Picking Slip Print Events
package_name: poplar_oeprintlog
apps:
views: 
  - OE0270
screens:
format: packaged
monthly_cost: 0
# presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
# demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
# docs: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---
Log O/E Shipment Picking Slip Print Events.
<!--more-->

Log all Picking Slip print events in a database table. Capture the following
information:

- Shipment Number
- Sage User
- Windows User
- Workstation IP Address
- Printed On Date
- Printed At Time
- Whether a Reprint had been requested

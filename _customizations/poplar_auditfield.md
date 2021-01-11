---
layout: customization
order: 5
name: Audit Field Changes by Users
package_name: poplar_auditfield
apps:
    - A/P
    - A/R
    - O/E
    - P/O
views:
    - AP0021
    - AP0402
    - AR0032
    - AR0402
    - GL0006
    - GL0010
screens:
format: packaged
presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

Generate an audit trail for all changes made to an A/R or A/P invoice header 
and optional fields, or G/L Journal headers and optional fields, by any user
other than the user that initially created the object.
<!--more-->

## How does it work?

The Audit Field Changes by User customization install a custom table that is 
used to define which fields of the headers should be monitored for changes.

When a monitored field is changed, if the user manking the change is not the
user that initially entered the data for the object, the details of the change
are logged in the database.

## Pricing

The Audit Field Changes by User customization is available under a subscription
or a perpetual license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Audit Field Changes by User: $37.50

Billed annually  

### Perpetual License Costs

| Customization Manager Standard: $1287
| Audit Field Changes by User: $858

Both require 21% Annual Software Assurance


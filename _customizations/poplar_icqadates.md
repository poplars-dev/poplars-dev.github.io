---
layout: customization
order: 5
name: Smart I/C Quarantine Transfers
package_name: poplar_icqadates
apps:
    - I/C
views:
    - IC0730
    - IC0740
screens:
    - IC3310
    - IC3410
format: packaged
excerpt_separator: <!--more-->
---

Smart I/C Quarantine dates transfer with the lot.

No longer will the lot quarantine be reset to default when a lot is
transferred from one location to another. Instead, the quarantine status and
dates will follow the lot as it is transferred and adjusted. 
<!--more-->

## Business Case

When lots are transferred between locations, their quarantine dates
are reset to the default for the item at the new location.  In some
cases this is not desireable as the quarantine period is independent
of the location in which it is stored and the item may be transferred
or adjusted during the quarantine period.

In these cases, the quarantine status, including whether in quanratine or
not and if so how many days are remaining, must be manually maintained 
for every transfer or adjustment. Failure to properly manage the dates
may result in quarantines that are too short or too long.

## How does it work?

The Smart I/C Quarantine Transfers customization attaches to the I/C
Transfer and Adjustment views.  When new transfers or adjustments are
created, the customization checks the quarantine status of the lot at the
source and applies this status to the lot at the destination.

## Features

Smart I/C Quanrantine Dates:

- quarantine status, including on/off quarantine and time remaining,
  transfer with the lot;
- applies to both transfers and adjustments.

# Pricing

The Smart I/C Quarantine Dates customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Smart I/C Quarantine Dates: $50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Smart I/C Quarantine Dates: $1395

Requires 21% Annual Software Assurance (SA)

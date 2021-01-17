---
layout: customization
order: 5
name: Tax Rebate at Source
package_name: poplar_taxrebate
excerpt_separator: <!--more-->
apps:
    - A/R
    - G/L
views:
    - AR0032
screens:
    - AR1200
format: tailored
monthly_cost: 50
perpetual_cost: 1395
---

The Tax Rebate customization makes it easy to capture tax rebates
at source by automatically calculating and splitting the tax amount 
for an item across two additional lines: one for the partial item tax
and one for the rebate amount.  The tax and rebate amounts are then 
routed to different accounts for the order.
<!--more-->

## How does it work?

The Tax Rebate at Source customization applies tax rebates automatically
to A/R invoices.  When a new line is entered, the customization checks
a segment of the account number.  Based on the value of the segment, 
it checks whether there is a tax rebate account that applies to the line.

If so, add two new lines for the invoice for half the tax amount: one
to the expense account of the triggering line, the other to the tax rebate
account.

## Features

Tax Rebate at Source:

- automatically capture rebate amounts in a different G/L account;
- flexible account mappings, the G/L rebate account can vary by item or
  triggering tax account number.

{% include pricing.html %}

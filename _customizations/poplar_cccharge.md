---
layout: customization
order: 5
name: Credit Card Charges
package_name: poplar_cccharge
apps: 
    - O/E
views:
    - OE0520
screens:
    - OE1100
excerpt_separator: <!--more-->
format: packaged
---

The Credit Card Charge customization monitors O/E Orders and Quotes and asks
the user whether to add a fixed percentage credit card charge if no charge is
present on the order and the customer
payment code and/or terms match a user configured list.  

If the user chooses to add a charge, a new line is automatically added to the
order with a configurable miscellaneous charge at the correct percentage.
<!--more-->

## Business Case

The Credit Card Charge customization automatically calculates and optionally
applies credit card charges to O/E Order Entry Orders and Quotes based on the
customer's payment terms or payment code.  Charges are calculated based on the
pre-tax value of all items in the order and are applied as a miscellaneous
charge.

This customization helps the operator consistently apply the correct credit
card charges to orders and quotes.  

## How does it work?

When an order is posted, the customization checks the customer payment code
and/or payment terms.  

If the payment code or terms are configured to trigger a credit card charge,
the charge is calculated for order.  If there is an existing charge in the
correct amount, no action is taken.  

If there is an existing charge that is no longer correct, or no charge is
present, the user is prompted whether the correct credit card charge should be
set automatically.

## Features

Automatic Credit Card charges:

- user configurable charges for different payment codes, payment terms, or
  combinations thereof;
- automatic verification that existing charges on the order are correct after
  changes;
- optional user prompt if the charge need not be applied in all cases.

## Pricing

The Credit Card Charges customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Credit Card Charges: $37.50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Credit Card Charges: $858

Requires 21% Annual Software Assurance (SA)

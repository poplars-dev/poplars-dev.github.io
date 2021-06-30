---
layout: customization
order: 2
name: Validate Country, State, Embargoes
package_name: poplar_isocodes
presentation: https://docs.google.com/presentation/d/190-xBBTfboE2PLqiuN29h-Lsy_C3vISrYnvoZsMvCDU/edit?usp=sharing 
apps:
    - A/R
    - O/E
    - P/O
    - A/P
views:
    - OE0520
    - OE0692
    - OE0220
    - AR0024
    - AR0025
monthly_cost: 0
perpetual_cost: 0
excerpt_separator: <!--more-->
format: packaged
---

The {{page.name}} customization enforces the use of valid ISO-3166
Country and State codes in any address fields in Sage and stops addresses from
being entered for embargoed countries.
<!--more-->

## Business Case

Poor quality address data has a number of costs: not only failed or repeated
shipments and address correction fees but also poor reporting by location and
geography.

The ISO Codes and Embargoes customization enforces the use of valid ISO-3166
Country and State codes in any address fields in Sage.  This can help minimize
the data entry error rate and the associated costs.

## How does it work?

The ISO Codes and Embargoes customizations uses open source libraries to
validate user input as addresses are being filled in.

It provides immediate feedback to the user when an invalid country or state
code is input.

The customization also creates a custom table for tracking embargoed countries.
Attempts to save a record with an address in an embargoed country will result
in an error.

## Features

ISO Codes and Embargoes:

- leverages externally maintained country and region code lists - no need to
  create them manually;
- validates addresses as they are input and before saving;
- blocks addresses from embargoed countries;
- can be applied to any object with address fields.

{% include pricing.html %}

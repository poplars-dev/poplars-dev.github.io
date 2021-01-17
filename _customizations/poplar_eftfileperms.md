---
layout: customization
order: 5
name: EFT File Create Permissions
package_name: poplar_eftfileperms
apps:
    - EL
views:
    - EL0100
screens:
format: packaged
monthly_cost: 12.50
perpetual_cost: 325
#presentation: https://docs.google.com/presentation/d/1k3KQzSEsSxCJFW0xbp8iJG0kmg8w2WQWE55PzBttmn8/edit?usp=sharing
excerpt_separator: <!--more-->
---

Originally designed for a customer that must update foreign currency
transaction rates immediately before posting EFT files from unposted batches,
the EFT File Permissions Customization adds an additional layer of security by
restricting which users can create files from Posted or Unposted Batches.
<!--more-->

## How does it work?

The EFT File Permissions customization uses a custom table containing
permissions that specify which users can create EFT files and whether they are
allowed to create files from Posted or Unposted Batches.

Attempts to create files by unauthorized users result in an immediate error
with helpful message.

## Features

EFT File Permissions:

- restrict which users can create EFT Files;
- restrict whether a user can create files from posted batches, unposted batches, or both;
- user managed permissions through a custom table.

{% include pricing.html %}

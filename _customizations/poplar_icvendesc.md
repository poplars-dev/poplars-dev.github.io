---
layout: customization
order: 5
name: I/C Long Vendor Descriptions
package_name: poplar_icvendesc
apps:
    - I/C
    - P/O
views:
screens:
    - IC1120
    - PO1210
format: packaged
monthly_cost: 12.50
perpetual_cost: 325
excerpt_separator: <!--more-->
---

The I/C Long Vendor Descriptions customization enables the use of
long Vendor Item Descriptions.  It adds a new column to the Vendor
Item Details screen grid and accepts descriptions of up to 180 characters.
These descriptions are stored in a custom table and are easily included
in reporting or customer advices. 

The descriptions are automatically added to Purchase Order Line optional
fields so they can be included in reports or orders to vendors.
<!--more-->

## Business Case

Sometimes there just aren't enough characters in the default field.  For
cases where a longer Vendor Item Description is required, this customization
can be tuned to support descriptions of up to 250 characters.

## How does it work?

The I/C Long Vendor Descriptions customization installs a new table used
to map long descriptions to vendors items. It adds a new column to the
I/C Vendor Items grid so the description can be managed in line with 
all other vendor item details.

{% include pricing.html %}

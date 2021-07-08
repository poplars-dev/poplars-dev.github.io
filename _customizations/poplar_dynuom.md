---
layout: customization
order: 5
name: Dynamic Units of Measure
package_name: poplar_dynuom
apps:
    - O/E
    - I/C
views:
    - OE0520
    - IC0740
screens:
    - OE1100
integrations:
    - I/M
format: packaged
monthly_cost: 100
perpetual_cost: 2925
presentation: 
demo: 
docs: https://s3.amazonaws.com/dev.expi/media/public/poplar_dynuom-1.0.10/docs/index.html
excerpt_separator: <!--more-->
---

The Dyanmic Units of Measure customization allows Item Units of Measure to be
overriden by an optional field and guides users to only order quantities that
can be shipped without repacking.
<!--more-->

Originally conceived to help work through a process change towards standard
package sizes, this customization makes it easy to temporarily override
Item Units of Measure and guide users to create orders are in units that can be
shipped without repacking.  This can streamline fulfilment and save
considerable time and cost.

## How does it work?

At the core of the customization is the Dynamic Unit of Measure table, which
is derived from the Item's I/C Units of Measure and Optional Fields.
Units defined in optional fields override or supplment those from I/C.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_dynuom/dynamic_uom_note.png" 
                       description="The Dynamic Unit of Measure table and Note. The Bag unit is overriden to the value of 20. The accompanying note guides the user to select a valid quantity." %}

From the dynamic table, the smallest selling unit (smallest unit greater than
Each [1]) is identified - this is the smallest package size that can be shipped.

As an O/E Order is being entered, the customization verifies that the quantity
ordered is evenly divisible by the smallest selling unit - i.e. it can be
fulfilled without repacking.  If not, a message is displayed showing the next
increment so the user can update the quantity.

In addition to interactive messages, for customers with Information Manager
Notes, the dynamic UOM table is displayed in a note - helping to inform the
user of the valid units of measure for the item and select quantities that
are easily shipped.

Finally, for instances where an order is posted with quantites that are not
evenly divisible by the Item's smallest selling unit, a log message
is generated and stored in the database for reporting and followup.

## Features

Dynamic Units of Measure:

- temporarily override an Item's configured Units of Measure;
- guide users to order in increments of the smallest selling unit so no 
  repackaging is required before shipment;
- demystify the Units of Measure by providing detailed information in the 
  accompanying I/M Note;
- log orders that are made with quantities that would require repacking.

{% include pricing.html %}

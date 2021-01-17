---
layout: customization
order: 5
name: Import from Repzio
package_name: poplar_repzio
apps:
    - O/E
views:
    - OE0520
    - OE0500
    - OE0522
screens:
format: tailored
monthly_cost: 100
perpetual_cost: 2925
presentation:
demo:
docs_url:
excerpt_separator: <!--more-->
---

[RepZio](https://www.repzio.com/pages/repzio-mobile-sales-rep-software)
is a Mobile Sales Rep package for viewing inventory and issuing orders 
from the field. Import orders from RepZio's Microsoft Excel file format.
<!--more-->

## How does it work?

The {{ page.name }} customization opens exported RepZio Excel files,
validates their contents and dimension, and then imports all the orders
contained within. When the import is complete, the results of the import
are displayed or sent via email.

The customization can be configured to run periodically using Process 
Scheduler.  This, coupled with RepZio's automated file download
capabilities, enable a fully automated order input solution to be developed.

## Features

Import from Repzio:

- import from the Excel file format, both human and machine readable;
- import all header, details, and optional field values;
- assign custom order numbers based on the order business line;
- expand ordered Units of Measure to the stocking Unit of Measure;
- generate a new record for new customers, assign their tax group based on 
  their location;
- provide a detailed report of import results view email;
- Process Scheduler compatible for complete order import automation.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

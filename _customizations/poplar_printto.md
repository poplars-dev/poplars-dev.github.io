---
layout: customization
order: 5
name: Automatically Print Documents
package_name: poplar_printto
apps:
views:
screens:
format: packaged
monthly_cost: 25
perpetual_cost: 645
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

Configure rules to automatically print reports to specific print destinations
when documents are posted or updated.  Optionally apply additional criteria,
building rules to match your business process.  For example: when an order is
updated, the last invoice number is set, and the order location is "2", send a
copy of the document to the printer in the east coast warehouse.

<!--more-->

## How does it work?

The {{ page.name }} customization enables the configuration of automatic 
printing, optionally based on criteria.  Starting with the configuration
of a trigger.  

Continuing the example of printing orders based on order 
location, we may define a trigger that connects to the _O/E Order Entry Screen_
(_OE1100_) that generates an O/E Invoice (_OEINV03_) sent to the east
coast warehouse network printer.

The datasource to monitor, the matching criteria, and when to print are
configured to match the business process.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_printto/printing_trigger_config.png"
           description="Print O/E Invoices for location 2 orders when an order is updated and the LASTINVNUM is set." %}

Once the trigger is configured, documents will be printed automatically
as Orders are updated by any user.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

---
layout: customization
order: 5
name: Most Recent O/E Invoice
package_name: poplar_mrinvc
apps:
    - O/E
views:
    - OE0520
screens:
    - OE1100
format: packaged
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_mrinvc/poplar_mrinvc_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_mrinvc-1.1.3/docs/index.html
excerpt_separator: <!--more-->
---

Display a prompt with the most recent O/E Invoice for a customer when the 
Customer field is set in a new order, asking the user whether to open the
invoice in inquiry mode to view more details.
<!--more-->

## How does it work?

When the Customer Number is set on a new order, the {{ page.name }} 
customization uses SQL to quickly locate the most recent O/E Invoice
for the customer.  

If an invoice is found, a prompt is displayed with the invoice details
offering to open the invoice in inquiry mode.

{% if page.demo %}
## Demo

The demo begins with the installation of the customization using Customization
Manager.  After installation and a quick restart of the desktop, the 
customization begins working immediately.  When the Customer 1200 is entered
into a new O/E Order, information on the most recent invoice is displayed.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

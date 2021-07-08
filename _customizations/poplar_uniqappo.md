---
layout: customization
order: 1
name: Unique PO Numbers in A/P Invoices
package_name: poplar_uniqappo
monthly_cost: 0
perpetual_cost: 0
excerpt_separator: <!--more-->
screens:
    - AP2100
apps:
    - A/P
demo: https://s3.amazonaws.com/dev.expi/content/poplar_uniqappo/poplar_uniqappo.mp4
format: packaged
---

{{page.name}} is a simple customization that enforces the use of a unique PO
Number in the A/P Invoice entry screen.
<!--more-->

## How does it work?

This customization connects to the A/P Invoice Entry screen and monitors
the PO Number field.  When the field is changed, if a value is set, the 
customization checks whether it has been used in any other A/P Invoice Entry.
If so, the user is notified that the PO is a duplicate.

In the event that a duplicate PO Number is in place when the entry is saved,
the save will be stopped and a warning issued to the user.

{% if page.demo %}
## Demo

The demo below begins with the default Sage behaviour, which allows PO Numbers
to be reused across multiple A/P Invoice entries.  Using Customization Manager,
the {{page.name}} customization is installed and then the added validation on
the PO Number field is demonstrated.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}
{% include pricing.html %}

---
layout: customization
order: 5
name: Custom Table UI
package_name: poplar_customtableui
apps:
views:
screens:
format: packaged
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: 
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_customtableui-1.0.2/docs/index.html
excerpt_separator: <!--more-->
---

Add a Custom UI for any table.  Allow access to custom tables without the 
need for the custom table editor.  

Used as a base for customizations
like the [Complaint Form](/customizations/poplar_complaints.html). 
Pairs seamlessly with 
[Screen Permissions](/customizations/poplar_screenperms.html) to provide
permissions at the screen access or control level. Integrated with native
screens using [Callback Columns](/customizations/poplar_columns.html).

<!--more-->

## How does it work?

With another custom table.  Define a new entry pointing to the table that 
needs a UI, set an optional permission name, and create a new icon anywhere
in the desktop.

Used with the Custom Table features of Extender, this customization allows
you to create and expose your own objects in the Sage desktop - without
any custom development.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

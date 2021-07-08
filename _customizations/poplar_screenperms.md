---
layout: customization
order: 5
name: Screen Permissions
package_name: poplar_screenperms
apps:
    - A/P
    - A/R
    - O/E
    - P/O
    - B/K
views:
screens:
format: packaged
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_screenperms/poplar_screenperms.mp4
docs: https://s3.amazonaws.com/dev.expi/media/public/poplar_screenperms-1.0.6/docs/index.html
excerpt_separator: <!--more-->
---

Define fine-grained permissions for any screen in Sage.  This customization 
enables create, read, and update permissions to be set for any field and
enables the disabling of screens or buttons for specific users.

Permissions are user configurable through a custom table and managed using
a bespoke UI.
<!--more-->

## How does it work?

The {{ page.name }} customization allows users to define Create, Read,
and Update permissions for any control in a Sage screen. It can stop
a user from opening a screen, hide a field or button, disable fields based
on whether documents have been saved or not, and more.

Start by configuring a permission for a screen. Restrict access to the
entire screen or controls.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_screenperms/podatefield.png" 
                      description="A permission controlling access to the P/O Date field." %}

Assign Create, Read, and Update access to users for each permission using
the handy Permissions Management UI.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_screenperms/chris_permissions.png" 
                      description="Chris can open O/E Order Entry but can’t use the Delete button and can only set the date on new POs, not existing ones." %}

For a more detailed walkthough of the configuration and capabilities,
see the [docs]({{ docs }}).

{% if page.demo %}
## Demo

The demo below begins with the configuration of an eco fee for items in 
category A1 being sent to Ontario, and another for items in category A1 
destined for British Columbia.  Orders are then created for both destinations
to demonstrate the automated adding, updating, and removal of fees.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

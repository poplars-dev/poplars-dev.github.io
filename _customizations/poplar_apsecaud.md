---
name: A/P Tax Number Security
package_name: poplar_apsecaud
apps:
    - A/P
views:
    - AP0015
screens:
    - AP1200
    - AP3100
format: packaged
monthly_cost: 0
perpetual_cost: 0
presentation: 
excerpt_separator: <!--more-->
---

Add a new set of permissions that control access to the A/P Vendor Tax
Number field.  For users that are not allowed to edit the tax number,
the field is disabled on the A/P Vendors screen.

In addition, for all A/P Payment Entries, the Reference field is disabled
and used to store the user that last edited the entry.
<!--more-->

## How does it work?

When the {{ page.name }} customization is installed, it adds a new 
custom table that is used to manage user permissions from the Tax Number
field.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/user_disabled.png" 
                      description="The user CHRIS isn't active and can't edit A/P Vendor Tax Numbers." %}

The customization implements two layers of protection. The first is a
change to the A/P Vendor screen that disables the Tax Number field for 
users that don't have permission to edit it.  The second is a view script
that stops the Tax Number being put to by users without permission.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/tax_number_removed.png" 
                      description="The Tax Number has been removed entirely from the Invoicing tab." %}

For users that are active, and the ADMIN user, who is always active, the Tax
Number is displayed.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/user_active.png" 
                      description="The user CHRIS is active and can edit A/P Vendor Tax Numbers." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/tax_number_restored.png" 
                      description="The Tax Number has been restored." %}

For A/P Payment Entries, the customization disables the Reference field for
all users.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/reference_field_disabled.png" 
                      description="The Reference field cannot be edited." %}

Whenever a payment is inserted or updated, the currently logged in User's name
is written to the Reference.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apsecaud/last_edit_by_in_reference.png" 
                      description="The last user to change the entry is written to the Reference field." %}


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

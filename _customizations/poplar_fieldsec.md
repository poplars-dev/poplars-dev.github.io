---
layout: customization
order: 5
name: Field Level Security
package_name: poplar_fieldsec
apps:
    - A/P
    - A/R
    - O/E 
    - P/O
    - B/K
views:
screens:
format: tailored
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

Add new permissions or logic to control access to any field in Sage based on
the currently logged in user, document state (New, Posted, Processed) or field 
values, whether the user editing the document is the same as the user that
entered it, or custom permissions.  

For users that do not have permission to edit a field, the field is disabled or
removed from the screen entirely.

[A/P Tax Number Security](/customizations/poplar_apsecaud.html) 
and [EFT File Permissions](/customizations/poplar_eftfileperms.html) are built
on this customization.
<!--more-->

## How does it work?

When the {{ page.name }} customization is installed, it monitors the
logged in user, any relevant permissions, and the document state. When
the screen is opened, the field is disabled or removed from the screen
based on these factors and your custom logic.

An additional layer of security is implemented at the View level, to enforce
the permissions even when changes are not made through a screen.

{% include pricing.html %}

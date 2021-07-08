---
layout: customization
order: 5
name: Field Change Audit Logging
package_name: poplar_auditfield
apps:
    - A/P
    - A/R
    - G/L
views:
    - AP0021
    - AP0402
    - AR0032
    - AR0402
    - GL0006
    - GL0010
screens:
format: packaged
monthly_cost: 37.50
perpetual_cost: 858
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

Generate an audit trail for all changes made to an A/R or A/P invoice header, 
header optional fields, or G/L Journal headers and detail lines, by any user
other than the user that initially entered the object.
<!--more-->

## How does it work?

The {{page.name}} customization installs a custom table that is 
used to define which fields of the headers should be monitored for changes.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_auditfield/config_select_view.png" 
                      description="Fields to be monitored configuration and supported views." %}

Any number of fields can be monitored for each view.  


{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_auditfield/config_all_fields.png" 
                      description="Monitor the IDINVC, PONBR, DISCPCT fields on A/P Invoice headers." %}

When a monitored field is changed, if the user making the change is not the
user that initially entered the data for the object, the details of the change
are logged in the Extender Audit Log.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_auditfield/ap_invoice_entry.png" 
                      description="Starting with an Invoice created by ADMIN." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_auditfield/edit_idinvc.png" 
                      description="CHRIS later comes along and edits the IDINVC and DISCPCT fields." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_auditfield/log_entries.png" 
                      description="Both changes are logged." %}

{% include pricing.html %}

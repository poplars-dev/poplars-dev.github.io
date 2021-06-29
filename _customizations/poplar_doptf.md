---
layout: customization
order: 5
name: Detail Optional Fields
package_name: poplar_doptf
apps:
    - A/R
    - A/P
    - B/K
views:
    - BK0460
screens:
format: packaged
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_doptf/poplar_doptf.mp4:
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_doptf-0.2.4/docs/index.html
excerpt_separator: <!--more-->
---

This customization adds optional field capabilities to detail views that
otherwise do not have them, such as Bank Entries.  Functionally identical
Sage's normal Optional Fields, they are easy to set up and configure.
<!--more-->

## How does it work?

The Detail Optional Fields customization adds user configurable 
optional fields to the Bank Entries view.  It depends on optional
fields being defined in Common Services.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_doptf/optional_field_config.png" 
                      description="Optional fields are defined in Common Services." %}

Optional fields can then be assigned with a default value to the detail
view.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_doptf/optional_field_assignment.png" 
                      description="Assign the CUSTLIST optional field to bank entries." %}

For each optional field that
is defined, a new column is added to the Bank Entry grid so the values
can be managed in line.  Optional field values are carried through to the
G/L entries for the detail lines.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_doptf/detail_grid.png" 
                      description="The new column is displayed in the detail grid." %}

This customization can be tailored to work on any detail view that doesn't
support optional fields by default.  Contact us if you have a particular view
in mind.

## Features

Detail Optional Fields:

- functionally identical to Sage's optional fields, they can have default
  values, are stored in the database by related object key, and are easily
  used in reporting;
- all fields are added to the appropriate grid so the optional data can be
  managed in line with the related object;
- optional fields are transcribed to the G/L Entry optional fields.

{% include pricing.html %}

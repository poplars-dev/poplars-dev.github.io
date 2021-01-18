---
layout: customization
order: 5
name: Order Number Column for A/P Invoice Entry
package_name: poplar_apoeselect
apps:
    - A/P
views:
screens:
    - AP2100
format: tailored
monthly_cost: 0
perpetual_cost: 0
presentation: 
demo: 
docs_url:
excerpt_separator: <!--more-->
---

Add a column to the A/P Invoice entry screen that displays the O/E Order 
number associated with the entry.  The Order Number is stored in an 
optional field and a finder provided in the grid to make selecting a valid
order easy.

This customization is based on the [Columns](/customizations/poplar_columns.html)
customization.
<!--more-->

## How does it work?

The {{ page.name }} customization is an example of adding an editable column to
a grid to display and manage an optional field.  

When the screen starts up, the customization adds a new column to the grid
and populates it with the value from the optional field.  

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apoeselect/oe_order_column.png" 
                       description="A new column, OE Order, is added to the grid." %}

Although no validation is defined on the optional field, the customization
adds a custom finder to find orders by customer.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apoeselect/finder.png" 
                       description="A custom finder is used to select from valid order numbers." %}

As the field is
updated and changed, the optional field is kept in sync in the background.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_apoeselect/optional_field_set.png" 
                       description="The optional field is set automatically as the values in the column change." %}


{% include pricing.html %}

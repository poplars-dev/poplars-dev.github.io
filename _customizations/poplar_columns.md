---
layout: customization
order: 5
name: Columns
package_name: poplar_columns
apps:
    - A/P
    - A/R
    - O/E
    - P/O
    - B/K
    - I/C
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

Add new columns to just about any grid.  Columns come in three general 
varieties: datasource columns, which add fields from a datasource that
are not usually displayed; optional field columns, putting frequently used
fields in the grid; computed columns, execute some logic to derive a value
to display.

[Order Number Column for A/P Invoice Entry](/customizations/poplar_apoeselect.html),
[Customer Inquiry Adjustment Reference](/customizations/poplar_adjref.html)
and [Detail Optional Fields](/customizations/poplar_doptf.html) are built
on this customization.
<!--more-->

## How does it work?

The {{ page.name }} customization connects to a screen or one of its related
pop-up screens.  When the screen opens, a new column is automatically added
to the end of the grid.  

For datasource or optional field columns, the column header, default, 
valid option lists, and data types 
can be taken from the related field definition. For computed columns, 
these must be specified for each case.

Columns are either editable or read-only.  Editable columns write back to
the underlying data source or optional field as edits are made.

{% include pricing.html %}

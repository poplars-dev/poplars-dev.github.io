---
layout: customization
order: 5
name: Customer Inquiry Adjustment Reference
package_name: poplar_adjref
apps:
    - A/R
views:
screens:
    - AR1700
format: packaged
monthly_cost: 0
perpetual_cost: 0
related:
    - poplar_columns
presentation: 
demo: 
docs: 
excerpt_separator: <!--more-->
---

Add a new column to the Adjustments
grid in the A/R Customer Inquiry Adjustments tab that displays the adjustment
Reference.

This customization is a good example of a custom column that is populated
with data looked up from a different view.
<!--more-->

A/R Adjustment Entry References, such as ``Demo Header Reference``,

![Screenshot of A/R Adjustment Entry](https://s3.amazonaws.com/dev.expi/content/poplar_adjref/adjustment_entry.png)

are displayed in the *Adjustments* tab of the A/R Customer Inquiry screen.

![Screenshot of Customer Inquiry screen](https://s3.amazonaws.com/dev.expi/content/poplar_adjref/customer_inquiry_reference.png)

## How does it work?

The customization adjusts the A/R Customer Inquiry screen to add a new field to
the grid, making it quick and easy to identify the reference for a particular 
adjustment.

More generally, this customization adds a column to a grid. Columns with 
read-only or read-write data can put the information required
at hand and can be added to almost any grid in Sage.

{% include pricing.html %}

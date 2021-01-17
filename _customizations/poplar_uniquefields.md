---
layout: customization
order: 1
name: Unique Fields
package_name: poplar_uniquefields
monthly_cost: 0
perpetual_cost: 0
excerpt_separator: <!--more-->
format: tailored
---

Unique Fields is a simple customization that inserts a user defined
unique string in any view field on insert.  This can be used to set custom
keys for objects in Sage that are either not, or insufficiently, configurable.
<!--more-->

## Business Case

The Unique Fields customization enables customers to set document numbers
or other fields based on the properties of the documents themselves.

Consider a case where orders are accepted for three different
business lines.  The business line for each order is stored in an optional 
field, but to facilitate selecting and sorting the customer wants the
business line reflected in the order number.

This customization will set the order number based on the business line when
a new order is inserted.  

## How does it work?

The Unique Fields customization can be connected to any view or field. When
an object is inserted, custom logic is used to derive the next unique value
in the sequence.

{% include pricing.html %}

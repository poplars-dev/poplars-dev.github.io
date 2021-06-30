---
layout: customization
order: 5
name: Add Beverage Container Deposits to Orders
package_name: poplar_bvgdep
apps:
    - O/E
views:
    - OE0520
    - OE0692
    - OE0220
screens:
    - OE1100
format: packaged
monthly_cost: 50
presentation: 1395
demo: https://s3.amazonaws.com/dev.expi/content/poplar_bvgdep/poplar_bvgdep_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_bvgdep-1.0.4/docs/index.html
excerpt_separator: <!--more-->
---

Automatically add and manage a two level deposit for bottles: the first level
for the container size and the second for the container type. For each level,
there is also a summary deposit.

Perfect for the case where deposits come in components: one for the container
type and another for the container volume.  A summary deposit can also be 
applied to all items with a deposit.  This allows fine grained control in
inventories with many different deposit types.

<!--more-->

## How does it work?

The {{ page.name }} customization creates a new custom table that maps items
to their first and second level deposits, and another that stores the 
summary deposits.  

This allows deposits to be build in three components: the summary deposit
provides a base that applies the all bottles; the first deposit can
be applied for the bottle type (glass, aluminum, plastic, etc.); the second
to the bottle volume (< 1L, <2L, etc.).

When an order is posted, each line is reviewed and the deposits for the line
added to a running total.

Once all lines have been considered, the total quantity for each applicable 
deposit is determined and a new line added to the order.

The customization continues to manage the deposits as orders are edited and
quantities are updated or lines removed.  Whenever the order is posted the
deposits are re-computed and reconciled.

For cases where the deposits need to be managed manually, there is an 
optional field on the Order header, `DEPOVERRIDE`, that when set to Yes
disables the automatic calculation of deposits.

{% if page.demo %}
## Demo

To show the customization in action, we have an environment with three
items requiring bottle deposits:

1. B1-001/0 - Cola (Large Plastic)
2. B1-002/0 - Cream Soda (Small Aluminum)
3. B1-003/0 - Root Beer (Small Glass)

All three items have both first and second deposits.  First deposits
begin with item segment code E1 and second deposits with E2.  E1-900/0 and
E2-900/0 are the summary deposits.

The demo begins with the simplest case: an order for 10 cases (24 Ea./Case)
of B1-001/0.  On Post, the customization automatically adds the applicable
deposits:

- E1-001/0 - Plastic Bottle
- E1-900/0 - Bottle Type Summary Deposit
- E2-002/0 - Large Bottle
- E2-900/0 - Bottle Size Summary Deposit

The demo goes on to demonstrate that even when edited manually, after posting
the deposits are properly maintained. 

When deposits need to be disabled, the `DEPOVERRIDE` optional 
field can be set to Yes and the customization won't take any actions.

Finally, a larger order with three items, five deposit types, and the two
summary items is shown.

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

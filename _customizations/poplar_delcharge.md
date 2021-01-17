---
layout: customization
order: 5
name: Delivery Charges
package_name: poplar_delcharge
apps:
    - O/E
    - P/O
views:
screens:
    - OE1100
format: packaged
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: https://s3.amazonaws.com/dev.expi/content/poplar_delcharge/poplar_delcharge_demo_cut.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_delcharge-1.0.0/docs/index.html
excerpt_separator: <!--more-->
---

The Delivery Charges customization automatically adds a delivery charge to 
orders less than a minimum order amount.  The delivery charge and minimum
order amount are based on the Customer's Customer Group.
<!--more-->

## How does it work?

When an O/E Order is posted, the Delivery Charges customization checks whether
there is a minimum order value for the customer group.  If there is, and the
pre-tax value of the order is less than the minimum order value, a delivery
charge is automatically added to the order based on the customer group.

When orders are updated, the customization automatically maintains the 
charge and adds or removes it as required when the order value changes.

## Features

Delivery Charges:

- Automatically add, remove, and update delivery charges based on 
  customer group and order size;
- configured using optional fields to define the minimum order 
  values and delivery charge amounts;
- can be overridden using an optional field on the order header.

## Demo

The demo below demonstrates the setup and features of the customization, including:

- Installing the customization using Customization Manager.
- Creating the required Optional Field configuration.
- Creating the Miscellaneous Charge DELSM for small customers in both CAD and USD.
- Assigning the Optional Fields to the Custom Groups and order Header.
- Configuring the Minimum Order 1000.00 and Delivery Charge Item DELSM optional fields for the RTL customer group.
- The automatic addition of a delivery charge to an order.
- The automatic removal of the delivery charge when the order total exceeds the minimum order.
- The automatic reset of a delivery charge that has been edited.
- Override automation by setting the Delivery Charge Override optional field on the order header.

<video width="640" controls>
  <source src="https://s3.amazonaws.com/dev.expi/content/poplar_delcharge/poplar_delcharge_demo_cut.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

{% include pricing.html %}

---
layout: customization
order: 5
name: I/C Transfer Security
package_name: poplar_ictrsec
apps: 
    - I/C
views:
    - IC0730
screens:
format: packaged
demo: https://s3.amazonaws.com/dev.expi/content/poplar_ictrsec/poplar_ictrsec.mp4
monthly_cost: 50
perpetual_cost: 1395
excerpt_separator: <!--more-->
---
The IC Transfer Security customization adds a custom table that maps
Sage users to I/C Transfer roles.  I/C transfers to and from particular
locations can then be restricted only to authorized users.

<!--more-->
## Business Case

An example use case for this customization is a business in which there is
a warehouse and a quality assurance team.  Members of the warehouse team
are only allowed to transfer to the "Quarantine" location and members of
the QA team can only transfer out of "Quarantine".

This customization can be used to define roles for the warehouse and QA 
teams and provides fine grained control of permissions to transfer both
to and from locations.

## How does it work?

The IC Transfer Security customization installs two new tables in the database,
one to track roles and the other to assign roles to users. 

Before a user saves a transfer, their permissions to transfer out of and in to
each location is verified against their assigned role.  If they do not have the
required permissions, the save is stopped and an error is displayed.

## Features

IC Transfer Security:

- fine grained permissions based on both location and direction;
- role based permissions make applying permissions to more than one user simple;
- automated enforcement of transfer policies.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

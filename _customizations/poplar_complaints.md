---
layout: customization
order: 5
name: Complaint Form
package_name: poplar_complaints
apps:
    - O/E
views:
screens:
format: tailored
monthly_cost: 50
perpetual_cost: 1395
presentation: 
demo: 
docs_url: 
excerpt_separator: <!--more-->
---

A custom screen to capture the details of a complaint regarding an order
and save them in a custom table in the database.  The form has well defined
input validation, allowing the complaints to be reported on reliably.
<!--more-->

## How does it work?

A custom UI has been developed to capture 12 pieces of information relevant
to the complaint, as well as the order and order lines in question.  When a new
complaint is received, the UI is opened, the related order lines selected, and
the details of the complaint filled out.  All fields are validated to ensure
consistent input.

Reports are generated to better understand which products are responsible
for the most complaints to inform Quality Assurance.  Storing the information
alongside the order allows order entry staff, already familiar with Sage, to
capture the complaint details without having to change applications.

{% if page.demo %}
## Demo

<video width="640" controls>
  <source src="{{ page.demo }}" type="video/mp4">
  Your browser doesn't support the video tag.
</video>
{% endif %}

{% include pricing.html %}

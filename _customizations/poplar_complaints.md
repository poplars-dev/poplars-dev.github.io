---
layout: customization
order: 5
name: Complaint Form
package_name: poplar_complaints
apps:
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

Introduce a new object, a Customer Complaint Form, to Sage.  The form
is used to collect information on returned or defective products.  Each
form is tied to an existing Customer and an Item. It captures the nature
of the complaint, details, and an RMA number if required.

Built on [Custom Table UI](/customizations/poplar_customtableui.html) and
integrates with [Screen Permissions](/customizations/poplar_screenperms.html).

<!--more-->

## How does it work?

A custom UI has been developed to capture 10 pieces of information relevant
to the complaint, including the Customer and Item involved in the complaint.
All fields are validated to ensure consistent input.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_complaints/complaint_form.png"
                       description="Capture complaing information to better understand product quality." %}

A unique form number is generated and can be provided to the customer for
reference.

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

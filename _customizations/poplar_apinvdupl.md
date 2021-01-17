---
layout: customization
order: 5
name: A/P Invoice Duplicates
package_name: poplar_apinvdupl
integrations:
    - Information Manager
screens:
    - AP2100
apps:
    - A/P
views:
format: packaged
monthly_cost: 37.50
perpetual_cost: 1180
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_apinvdupl-1.6.1/docs/index.html
#presentation: https://docs.google.com/presentation/d/1i7vD8uiVQheYOGpqWD9OxqYtNEuk7SwG71_I1hXmI4I/edit?usp=sharing
excerpt_separator: <!--more-->
---

The A/P Invoice Duplicates customization integrates with Information
Manager Notes to display any duplicate A/P Invoices Numbers across vendors.  
Duplicate detection is done with SQL to provide quick responses
and the accompanying note allows the user to quickly drill down into
identified duplicates.
<!--more-->

## Business Case

Although Sage performs a cursory validation of A/P Invoice document numbers, it
doesn't identify invoices with identical numbers paid to different vendors.
This can result in duplicate data input and potentially duplicate payments,
particularly in environments with many similar or related vendors.  

By providing information on all A/P Invoices with a matching document number to
the operator during invoice input, these errors can be eliminated.

## How does it work?

The customization monitors the Document Number field while A/P invoices are
being created up updated.  For each A/P Invoice with a matching document
number, a list of potentially duplicate invoices, along with the vendor and
invoice amount, are displayed in an Information Manager note.  This enables the
operator to choose the correct course of action.

## Features

Instant identification of duplicate invoices:
- instant feedback, even in environments with many invoices;
- drill-down to duplicate invoice through I/M Note;
- optional pop-up prompt when posting an invoice with a duplicate number.

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_arpricelist/no_matches.png" description="No duplicates exist for `IN179719`." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_arpricelist/match_grid.png" description="Matching invoices are displayed in a grid." %}

{% include figure.html url="https://s3.amazonaws.com/dev.expi/content/poplar_arpricelist/drill_down.png" description="Double click an invoice to drill-down." %}

{% include pricing.html %}

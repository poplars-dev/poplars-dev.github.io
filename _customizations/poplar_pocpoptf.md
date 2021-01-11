---
layout: customization
order: 5
name: P/O Optional Field Copy - Header to Detail
package_name: poplar_pocpoptf
excerpt_separator: <!--more-->
apps:
    - P/O
views:
    - PO0620
    - PO0630
format: packaged
---

This customization automatically copies P/O Header optional fields
to detail line optional fields if the fields have not been manually set.

The customization looks at the configured fields on the line and automatically
detects header optional fields with the same name.  If a detail line optional
field name matches a header optional field name and the detail line optional
field is unset, the header optional field value is copied.
<!--more-->

## How does it work?

The P/O Optional Field Copy customization automatically detects optional fields
that are present on both the P/O Header and P/O Detail line.  For any field 
that is present on both, the value from the header is copied to the detail line
if the value is unset.

If an optional field on the P/O header is changed, the change is propagated
to all detail lines that have not been manually altered.

## Features

P/O Optional Field Copy:

- keep fields consistent between header and detail line;
- eliminate the need to update optional fields on all lines by hand.

## Pricing

The P/O Optional Field Copy customization is offered with either a
perpetual or subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| P/O Optional Field Copy: $37.50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| P/O Optional Field Copy: $1180

Requires 21% Annual Software Assurance (SA)


---
layout: customization
order: 5
name: Override G/L Account for Job Related Invoices
package_name: poplar_gloverride
excerpt_separator: <!--more-->
apps: 
    - A/R
    - G/L
views:
    - AR0033
format: bespoke
---

The G/L override account dynamically changes the Item Revenue
G/L Account for Job related A/R items.  It was originally developed
to automatically change G/L accounts based on the location a particular job 
was performed.

The customization derives a new account code based on the Item number,
default G/L account segment, and optional field information
but any logic can be applied to derive the updated G/L account.
<!--more-->

## How does it work?

The Override G/L Account customization connects to the A/R batch header.
Before an A/R invoice batch is posted, the customization updates the
G/L account for all entries in the batch based on the item, location, and
default G/L account.

## Pricing

The Override G/L Account customization needs to be tailored to the customer
environment.  In addition to the base costs below, there is a one time 
setup cost to create a version specific to the customer requirements.  If
you'd like a free assessment and quote, please <a
href="mailto:chris@poplars.dev">contact us</a>.

The Override G/L Account customization is offered with either a perpetual or 
subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Override G/L Account: $37.50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Override G/L Account: $858

Requires 21% Annual Software Assurance (SA)

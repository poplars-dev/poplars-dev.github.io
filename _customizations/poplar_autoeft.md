---
layout: customization
order: 5
name: Auto EFT File Create
package_name: poplar_autoeft
integrations:
    - Process Scheduler
format: custom
presentation: https://docs.google.com/presentation/d/1-SggxKzPI2LeyENXgaW6ws4okfISKtgCBIMN_gCQpJo/edit?usp=sharing
sage:
    views:
    screens:
    apps:
        - E/L
excerpt_separator: <!--more-->
format: bespoke
---

The Auto EFT File Create customizations automates the creation of EFT files,
selection of EFT ready batches, and sending of remittance advices to Vendors.

This customization is generally used as the final stage in an end-to-end
payment automation workflow.  Once the workflow solution has approved and
posted the A/P batch, this customization handles the creation of the EFT file
and sending of remittances.
<!--more-->

## Business Case

This Automatic EFT Posting customization most often serves as the final step in
a larger automation solution for A/P payment approval workflows.

A Payments Approval Workflow solution, such as Extender Workflow, is used to
handle the approval of payment batches. Once the batches are approved and
posted, this customization automatically creates the EFT files for the batches.

It is a key component in a complete, end-to-end, payment approval and posting
workflow for EFT users.

## How does it work?

The Auto Post EFT Batches is run at interval using Process Scheduler. On
startup, it identifies all Posted A/P Invoice Batches for all enabled A/P
Payment Codes that have not yet had an EFT file created.  

A new EFT file is created for each batch and can optionally be sent directly to
the bank.  For each posted entry, a Remittance Advice is automatically sent to
the Vendor.

## Features

Automate EFT Posting:

- automates the final stage of payment process after approvals are complete;
- users select which payment codes trigger EFT file creation;
- automatically send remittances to vendors for all successful entries;
- in database logging of created entries, failed entries, and emails sent.

## Pricing

The Auto EFT File Create customization needs to be tailored to the customer
environment.  In addition to the base costs, below, there is a one time 
setup cost to tailor the customization for the environment.  If you'd like
a free assessment and quote for the cost of tailoring, please 
<a href="mailto:chris@poplars.dev">contact us</a>.

The Auto EFT File Create customization is sold under both perpetual and
subscription licensing.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Automate EFT Post: $75

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Automate EFT Post: $2145

Requires 21% Annual Software Assurance (SA)

---
layout: customization
order: 5
name: EFT File Auto-Creation
package_name: poplar_autoeft
integrations:
    - P/S
format: tailored
monthly_cost: 75
perpetual_cost: 2145
#presentation: https://docs.google.com/presentation/d/1-SggxKzPI2LeyENXgaW6ws4okfISKtgCBIMN_gCQpJo/edit?usp=sharing
views:
screens:
apps:
    - E/L
excerpt_separator: <!--more-->
---

The {{page.name}} customization automates the creation of EFT files,
selection of EFT ready batches, and sending of remittance advices to Vendors.

This customization is generally used as the final stage in an end-to-end
payment automation workflow.  Once the workflow solution has approved and
posted the A/P batch, this customization handles the creation of the EFT file
and sending of remittances.
<!--more-->

## Business Case

This customization often serves as the final step in
a larger automation solution for A/P payment approval workflows.

A Payments Approval Workflow solution, such as Extender Workflow, is used to
handle the approval of payment batches. Once the batches are approved and
posted, this customization automatically creates the EFT files for the batches.

It is a key component in a complete, end-to-end, payment approval and posting
workflow for EFT users.

## How does it work?

The customization is run at interval using Process Scheduler. On
startup, it identifies all Posted A/P Invoice Batches for all enabled A/P
Payment Codes that have not yet had an EFT file created.  

A new EFT file is created for each batch and can optionally be sent directly to
the bank.  For each posted entry, a Remittance Advice is automatically sent to
the Vendor.

## Features

Automate EFT File Creation:

- automates the final stage of payment process after approvals are complete;
- users select which payment codes trigger EFT file creation;
- automatically send remittances to vendors for all successful entries;
- in database logging of created entries, failed entries, and emails sent.

{% include pricing.html %}

---
layout: customization
order: 5
name: Auto-Post Batches with Description
package_name: poplar_autopost
integrations:
    - Process Scheduler
presentation: https://docs.google.com/presentation/d/1fgZwV4kEC-b6SVi1EU-2XPv566jdK6Gkg7Er7i-El04/edit?usp=sharing
sage:
    views:
        - AR0049
        - AR0031
        - BK0450
    apps:
        - A/P
        - A/R
        - B/K
        - G/L
excerpt_separator: <!--more-->
format: bespoke
---

The Auto-Post Batches with Description customization is designed
to be run either by hand or periodically using Process Schduler.  
It searches for Batches that are in the 'Ready to Post' 
state with a specific description and posts them.

This customization is generally used to automatically post batches
created through external integrations. The external program sets the
batch description to a specific string and the batches are posted
automatically by the customization.
<!--more-->

## Business Case
This customization is used to Automatically Post Batches with a specific
description and is most often used as the final step in a workflow or to
post batches created by external programs.  

The customization finds all batches in a ready to post state with a
matching description and posts them.  This customization can be a key component
in a complete, end-to-end, workflow that completes the posting of the batch 
after it has been created or approved by an external program.

## How does it work?

Auto Post Batches is run at interval using Process Scheduler. On startup, it
identifies all Batches with a description matching a user configured string.

All matched batches are posted.  A report of all batches posted or errors
encountered can optionally be sent over email to an administrator.  The
customization is designed to work on almost all Sage batch types and can be
configured to match one or many different descriptions and/or batch types.

## Features

Automate Batch Posting:

- automates the final stage of workflows or other externally programs;
- user defined batch types and descriptions provide control which entries are
  handled;
- pro-active notification of posting results over email.

## Pricing

The Auto Post Batches customization needs to be tailored to the customer
environment.  In addition to the base costs below, there is a one time 
setup cost to create a version specific to the customer requirements.  If
you'd like a free assessment and quote, please <a
href="mailto:chris@poplars.dev">contact us</a>.

The Auto Post Batches customization is sold under both perpetual and
subscription licensing.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Automate Batch Post: $37.50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Automate Batch Post: $858

Requires 21% Annual Software Assurance (SA)
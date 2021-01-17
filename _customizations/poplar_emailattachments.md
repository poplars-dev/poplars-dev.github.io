---
layout: customization
order: 5
name: Send Email with Attachments
package_name: poplar_emailattachments
presentation: https://docs.google.com/presentation/d/1hHDNP9TKUTgnqoqZR5_4wyjTRLzar7J-kKHohkHmeJQ/edit?usp=sharing
apps:
    - O/E
    - A/R
    - A/P
    - B/K
    - P/O
views:
screens:
format: tailored
monthly_cost: 37.50
perpetual_cost: 858
excerpt_separator: <!--more-->
---

For cases in which one or more attachments must be added to an email,
this customization provides a flexible base that can be used to send
any number of attachments.  The customization can also generate 
attachments from any Sage report before sending.

An example use case for this customization is automatically attaching 
the associated work order to an A/R invoice email confirmation.
<!--more-->

## Business Case

Although Sage includes features to automate the sending of emails when events
occur, this customization provides a much more flexible base that enables Sage
to send rich HTML emails with multiple attachments.  

This can save significant overhead from manually sending emails, ensure that
emails are not missed or forgotten, and provide an audit trail for emails
successfully sent and errors encountered.

## How does it work?

The Email Attachments customization can be connected to almost any Sage view
and event, such as the A/R Invoice Header Insert event.

When the event occurs, the customization generates any required attachments,
locates files to be attached from disk, renders a user configurable email
template, and send the email according the Customer delivery preferences.

Whether the email is sent successfully or an error is encountered, a log entry
is made for auditing purposes.

## Features

Email Attachments:

- supports the use of plain text and HTML email templates;
- can generate reports to attach or find files that have already been created;
- allows any number of attachments to be added;
- supports compressing and combining many files in a single archive attachment;
- logs successful and failed email send events to the database

{% include pricing.html %}

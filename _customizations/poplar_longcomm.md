---
layout: customization
order: 5
name: Enhanced P/O and O/E Comments
package_name: poplar_longcomm
excerpt_separator: <!--more-->
apps:
    - O/E
    - P/O
views:
    - OE0520
    - PO0630
screens:
    - OE1100
    - PO1210
format: packaged
---

The Enhanced P/O and O/E Comments customization enables the use of
long form comments, unbounded by the Sage line format, that support 
copy/paste and rich formatting.  

It can also be configured to automatically
transcribe comments from O/E Order Lines to related P/O Order lines.
<!--more-->

## Business Case

Comments provide one of the only means of adding free form data to
order lines that is easily passed through to reports.  The default
comment format forces users to manage individual, 80 character, lines
and does not support features like copy/paste making them time consuming
to use.

The Enhanced P/O and O/E Comments customization adds enhanced comments
to both O/E Order and P/O Purchase Order lines.  Comments are input
into a large text window, without any line length limitation, and with
support for copy/paste.

## How does it work?

The Enhanced P/O and O/E Comments customization leverages the built in
Sage comments, adding a new layer above that automatically splits user
provided comments into 80 character lines and manages their storage in
the database.  

It adds a new button to the O/E Order Entry and Purchase Order Entry 
screens that opens a custom comment editor to manage the comments for the
line.  

The customization can also be configured to automatically transcribe comments
from O/E Orders to Purchase Orders.

## Features

Enhanced O/E and P/O comments:

- accepts copy/pasted user input;
- no line length limitations;
- built on Sage's comments, stored and included in reports in the same way.

## Pricing

The Enhanced O/E and P/O Comments customization is offered with either a
perpetual or subscription license.

### Monthly Subscription Costs

| Customization Manager Standard: $50
| Enhanced O/E and P/O Comments: $50

Billed annually

### Perpetual License Costs

| Customization Manager Standard: $1287
| Enhanced O/E and P/O Comments: $1395

Requires 21% Annual Software Assurance (SA)

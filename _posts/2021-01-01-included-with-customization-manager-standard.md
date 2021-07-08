---
layout: post
title: Included with Customization Manager Standard
tags: process customization manager standard included
screens:
  - AP2100
excerpt_separator: <!--more-->
permalink: /articles/included-with-customization-manager-standard.html
---

A total of {{ site.customizations | where:"monthly_cost", 0 | size }} 
of the customizations in our [catalogue](/catalogue.html) are
included with the purchase of the Standard Edition of Customization
Manager.  There is no additional cost to use them.
<!--more-->

[Tailored customizations](/articles/packaged-vs-tailored.html) may
require additional development and testing time to be adjusted to fit
your specific requirements.

The following customizations are included with the Standard Edition:

{% assign included = site.customizations | where:"monthly_cost", 0 %}
{% include customization_list.html customizations=included %}


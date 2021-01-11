---
layout: post
title: Included with Customization Manager Standard
tags: process customization manager standard included
excerpt_separator: <!--more-->
permalink: /articles/included-with-customization-manager-standard.html
---

Some of the customizations in our [catalogue](/catalogue.html) are
included with the purchase of the Standard Edition of Customization
Manager.  There is no additional cost to use them.
<!--more-->

[Tailored customizations](/articles/packaged-vs-tailored.html) may
require additional development and testing time to be adjusted to fit
your specific requirements.

The following customizations are included with the Standard Edition:

{% for customization in site.customizations %}
    {% if customization.monthly_cost == 0 %}
<div class='customization-info' id="{{ customization.name | slugify }}" data-order="{{ customization.order }}">
    <h3><a href="{{ customization.url }}">{{ customization.name }}
    <small>{{ customization.package_name }} - 
           {% if customization.format == "packaged" %}
            packaged
           {% else %}
            tailored
           {% endif %}
           {% if customization.monthly_cost == 0 %}
           - included with Customization Manager Standard
            {% endif %}
    </small></a></h3>
    <div class="customization-excerpt">
        {{ customization.excerpt }}
    </div>
</div>
    {% endif %}
{% endfor %}

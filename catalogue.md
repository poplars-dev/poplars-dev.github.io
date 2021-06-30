---
layout: default
title: Customization Catalogue
---
## Customization Catalogue

Welcome to our customization catalogue! Have a browse and see
if there is anything in here that either addresses a need or inspires
a new idea.

Some information that may be relevant before you peruse the catalogue:

- [Packaged vs. Tailored Customizations](/articles/packaged-vs-tailored.html)
- [Included with Customization Manager Standard](articles/included-with-customization-manager-standard.html)
- [Preparing for a new Customization](/articles/preparing-for-a-new-customization.html)
- [What is a quality Customization?](/quality.html)
- [Our Approach to Successful Custom Development](/development.html)

Don't hesitate to 
<a href="mailto:chris@poplars.dev?subject=Customization%20Catalogue%20Request">
contact us</a> if you could use one of the customizations, need one tweaked for
a specific use case, or have something completely new that needs building.

{% include search.html %}

<div id="customization-list">
{% for customization in site.customizations %}
    <div class='customization-info' id="{{ customization.name | slugify }}" data-order="{{ customization.order }}">
        <h3><a href="{{ customization.url }}">{{ customization.name }}
        {% if customization.demo %}
            <span class='material-icons-outlined inline-icon'>videocam</span>
        {% endif %}
        {% if customization.docs_url %}
            <span class='material-icons-outlined inline-icon'>description</span>
        {% endif %}
        <small>{% if customization.format == "packaged" %}
                packaged
               {% else %}
                tailored
               {% endif %}
               {% if customization.monthly_cost == 0 %}
               - included with Standard Edition
                {% endif %}
        </small></a></h3>
        <div class="customization-excerpt">
            {{ customization.excerpt }}
        </div>
    </div>
{% endfor %}
</div>


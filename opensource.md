---
layout: default
title: Open Source Projects
---

## Open Source Projects and Training

Much of what we build is only possible because of open source tools created
and maintained by the community.  In order to contribute in kind, much of what
we create is shared back with the community.

Here you will find links to open source projects maintained, and training 
courses delivered, by Poplar Development.

{% for project in site.opensource %}
### {{ project.name }}

<p class="view">
    <a href="{{ project.source_url }}">
        {{ project.name }} Source on BitBucket
        <small>{{ project.source_name }}</small></a>
</p>

<p class="view">
    <a href="{{ project.docs_url }}">
        {{ project.name }} Docs on readthedocs.io
        <small>{{ project.docs_name }}</small></a>
</p>

{{ project.content }}

{% endfor %}


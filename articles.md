---
layout: default
title: Articles
---

## Articles

<div class="post-list">
{% for post in site.posts %}
    <div class="view">
        <h3><a href="{{ post.url }}">{{ post.title }}
        <small>{{ post.date | date: "%Y-%m-%d" }}</small></a></h3>
        {{ post.excerpt }}
    </div>
{% endfor %}
</div>


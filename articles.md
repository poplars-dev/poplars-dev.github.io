---
layout: default
title: Articles
---

## Articles

<ul class="articles-list">
{% for post in site.posts %}
    <li class="article-item"><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>


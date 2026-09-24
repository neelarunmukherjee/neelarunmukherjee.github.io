---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if site.author.googlescholar %}
<p>You can also find my articles on <u><a href="{{ site.author.googlescholar }}">my Google Scholar profile</a></u>.</p>
{% endif %}

{% assign pubtypes = "Journal Articles|Preprints & Submitted Manuscripts" | split: "|" %}
{% assign pubtypes_size = pubtypes.size %}

{% for pubtype in pubtypes %}
  {% assign group = site.publications | where: "pubtype", pubtype | sort: "date" %}
  {% if group.size > 0 %}
<h2>{{ pubtype }}</h2>
    {% assign count = group.size %}
    {% for post in group reversed %}
      {% assign idx = count | minus: forloop.index | plus: 1 %}
<p>[{{ idx }}] {{ post.citation | strip | replace: "Mukherjee, N.", "<strong>Mukherjee, N.</strong>" | replace: "Mukherjee, Neelarun", "<strong>Mukherjee, Neelarun</strong>" }} {% if post.paperurl %}[<a href="{{ post.paperurl }}" target="_blank" rel="noopener">DOI</a>]{% endif %} [<a href="{{ base_path }}{{ post.url }}">More</a>]</p>
    {% endfor %}
    {% unless forloop.index == pubtypes_size %}
<hr>
    {% endunless %}
  {% endif %}
{% endfor %}

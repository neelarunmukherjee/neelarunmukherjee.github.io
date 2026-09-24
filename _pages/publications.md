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

{% assign group = site.publications | sort: "date" %}
{% assign count = group.size %}
{% for post in group reversed %}
  {% assign idx = count | minus: forloop.index | plus: 1 %}
<p>[{{ idx }}] {{ post.citation | strip | replace: "Mukherjee, N.", "<strong>Mukherjee, N.</strong>" }} {% if post.pubtype == "Preprints & Submitted Manuscripts" %}<em>({{ post.venue }})</em>{% endif %} {% if post.paperurl %}[<a href="{{ post.paperurl }}" target="_blank" rel="noopener">DOI</a>]{% endif %} [<a href="{{ base_path }}{{ post.url }}">More</a>]</p>
{% endfor %}

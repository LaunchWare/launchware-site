---
layout: post
comments: true
title: 'Under_Construction: Show Iterative Progress Unobtrusively with JQuery'
tags:
- agile
- iterative_development
- jquery
- project_management
status: publish
type: post
published: true
meta:
  dsq_thread_id: '10446324'
publishedAt: '2009-01-24'
---

A few weeks ago, I open sourced a tool I often use when developing new products. Meet [under_construction](http://dpickett.github.com/under_construction/) - a JQuery utility for hiding/overlaying elements of a design that haven't been developed yet.

[View the Demo](http://dpickett.github.com/under_construction/demo.html)

I wanted something that it is entirely unobtrusive and [W3C](http://w3c.org) compliant. No funky markup, and when you build a feature, you just remove the pending class from the elements you want to expose.

I'm planning to add more features. It would be great to add labels to the overlays so the stakeholder will know when that feature will be unveiled like Thoughtbot's [Mile Marker](http://thoughtbot.com/projects/mile_marker). I'm planning to implement that as another class. Of course, the design principal of staying unobtrusive and standards compliant will remain paramount.

Thanks to a great framework like [JQuery](http://jquery.com), building this was a snap. I recommend using it in conjunction with [jQuery Hotkeys](http://code.google.com/p/js-hotkeys/)

--- 
layout: post
comments: true
title: under_construction (jQuery plugin) Has Been Updated
tags: 
- agile
- design
- javascript
- jquery
- under_construction
status: publish
type: post
published: true
meta: 
  sociableoff: "false"
  dsq_thread_id: "18957185"
---
[under_construction](http://dpickett.github.com/under_construction/demo.html) is a [jQuery](http://jquery.com/) plugin that hides or overlays elements of a design that have not been implemented yet. The best part is that it is done completely with standards compliant markup and unobtrusive JavaScript.

This utility works extremely well in Agile environments where there is design work done upfront. I use it extensively and clients really appreciate the ability to see what's done and not done in a new application.

In this update:

 * __improved namespacing__ - no more collisions. To update, your function calls must be of the form $.under_construction.&lt;function name&gt;
 * __improved opacity__ - Due to some functions that were recently made available in the latest versions of jQuery, I was able to restructure the overlay so you get a cleaner look over darker backgrounds.

See the [demo](http://dpickett.github.com/under_construction/demo.html) for more details.

In the future, I'm hoping to add iteration/sprint labels to the overlays so the client or stakeholder can see at what point the feature is going to be built.

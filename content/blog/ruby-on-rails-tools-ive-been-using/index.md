---
layout: post
comments: true
title: Ruby on Rails Tools I've Been Using
tags:
- Rails
status: publish
type: post
published: true
meta:
  _utw_tags_0: no tags
  dsq_thread_id: '9406664'
publishedAt: '2007-05-24'
---

With my new job, I've been delving into some great tools in the Ruby on Rails Community and I wanted to share some of my thoughts on them.
<ul>
	<li><a href="https://railroad.rubyforge.org/">Railroad</a> - this tool is just plain awesome. Based on your Rails models, it creates a database diagram complete with relationships and field data types. It does output a graph format that's tough to deal with, but it's nothing GraphViz can't handle. If you're a visual learner or if you work with one, this is such a time saver.</li>
	<li><a href="https://rubyforge.org/projects/shipping/">Shipping</a> - this is a great rubygem that contains Ruby wrappers for UPS and FedEx Web Services (Tracking package status, printing return labels, etc.). At Second Rotation, We're currently polishing off a DHL extension of this gem. The architecture of the library made it fairly easy to implement, and we're hoping to contribute it to the open source project.</li>
	<li><a href="https://gbarcode.rubyforge.org/">GBarcode</a> - Another great rubygem that automates the creation of barcodes in various code symbologies. It was tough getting the native extension to work on a windows platform, but major kudos to the developer, Angel Pizarro, for helping us out extensively in getting it compiled and running. We integrated with</li>
	<li><a href="https://rubyforge.org/projects/seattlerb/">Heckle</a> - although we haven't used it yet, it looks really cool. It's a code mutator that modifies your functional code to make sure your tests fail. If you're practicing test driven development, this tool can really help evaluate code coverage and the robustness of your test harness.</li>
</ul>
It's been great really delving into the <a href="https://www.enlightsolutions.com">Ruby on Rails</a> Framework again. If you're not building your web application with it, you're really missing out on the wide array of open source tools. The development community around the platform is really thriving.

--- 
layout: post
comments: true
title: Rails Validation fieldWithErrors annoyance
tags: 
- css
- fieldwitherrors
- Rails
- rubyonrails
- xhtml
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "9381427"
---
So I'm thoroughly annoyed that a fieldWithErrors div wraps around a field that fails validation. I added a file called field_with_error_fix.rb in config/initializers to solve this pesky problem. It has the following code:

<pre class="textmate-source">
ActionView::Base.field_error_proc = Proc.new { |html_tag, instance|
"&lt;span class=\"fieldWithErrors\"&gt;#{html_tag}&lt;/span&gt;" }
</pre>

Goodbye inappropriate divs!


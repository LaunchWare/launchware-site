--- 
layout: post
comments: true
title: RSpec Report in Text Format
tags: 
- bdd
- Development
- documentation
- Rails
- rspec
- rubyonrails
- Software
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "9372250"
---
I recently wanted to share RSpec examples with a business user. For some reason, it was kind of hard to find information on how to get a nice listing of all the examples present in your system. I believe Text and HTML formats are available, but I was unsure about how to pass spec command line options to the rake task.

This is how to get it done. On the command line from your Rails project's root:

<pre class="textmate-source">
  rake spec SPEC_OPTS="--format s -c"
</pre>

This is a great way to validate a data model in plain English.

Not using [RSpec](http://rspec.info)? I highly recommend using it or a comparable framework to use business language as a definition for technical tests. Remember, if you follow Agile methodologies, you'll want to test before you implement any features. 

Are you interested in learning more about [Behavior Driven Development (BDD)](http://en.wikipedia.org/wiki/Behavior_driven_development) and RSpec? Check out [Peepcode's screencast](http://peepcode.com/products/rspec-basics).

---
layout: post
comments: true
title: Use VCR to make your API Integration Tests More Deterministic
tags:
- integration testing
- Rails
- ruby
- rubyonrails
- tdd
- testing
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  dsq_thread_id: ''
publishedAt: '2011-04-12'
---

I gave a quick talk at <a href="http://bostonrb.org">Boston.rb</a> this month about <a href="https://github.com/myronmarston/vcr">VCR</a>, a tool that can help make your integration tests more deterministic.

I've been enjoying the tool quite a bit. It makes it really easy to interact with web services in your tests in a way that doesn't depend on the endpoint always being up. This approach leads to better, quicker, and more predictable tests. If you're already using WebMock or FakeWeb, this tool will automate the process of pre-fetching your response/expected result for you.

Slides Below:

<iframe src="http://www.slideshare.net/slideshow/embed_code/7606987" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>


Hope you find them useful!

---
layout: post
comments: true
title: RailsConf Day 2 Wrap-Up
tags:
- Events
- Rails
- railsconf
- railsconf08
- rubyonrails
status: publish
type: post
published: true
meta: {}
publishedAt: '2008-06-02'
---

What a cool day. Here's a quick summary of everything I attend:

* **Jeremy Kemper's keynote** - Rails 2.1 is getting released! Awesome changes to migrations (no more migration number collisions), timezone support, tighter integration with memcache. Coolest of all and something that always bugged me in ActiveRecord - being able to check is an ActiveRecord object was actually modified. The introduction of the **changed?** method should be very handy.
* **Mingle** - I love [Mingle](http://studios.thoughtworks.com/mingle-project-intelligence). I checked out this talk because I wanted to learn how to really use Card trees and aggregate properties (some new features in Mingle 2.0). I ended up finding out some really cool functionality that I didn't know existed (read: project variables). After every iteration rolls by, I previously had to go in and change all the views to reflect the change in iterations. Now, I can do it in one place with project variables. Rock!
* **Advanced Restful Rails** - I thought this talk was pretty cool. He addressed a lot of patterns that do not fit in the stereotypical resource generator. I really dug the overall message - there's really 2 steps to making a good restful architecture. It's really that simple, and it's not far off from good Object Oriented design.

  1. Identify your resource
  1. Expose the methods you want to

* **Fast, Sexy, and Svelte: Our Kind of Rails Testing** - this was a good talk. Mainly impressed with [DeepTest](http://github.com/qxjit/deep-test/tree/master) - it runs your RSPECS in parallel rather than sequentially. For acceptance testing, the recommended [Selenium](http://selenium.openqa.org/), but I actually prefer [SpiderTest](http://caboose.org/articles/2007/2/21/the-fabulous-spider-fuzz-plugin). It's not so dependent on markup and is done in memory rather than in browser
* **Integration Testing With RSpec's Story Runner** - yet another great talk on testing. I'm still not sold on stories as part of the [RSpec](http://rspec.info/) framework, but I'm at least willing to give it another try after David's great walkthrough
* **The Great Test Framework Dance-Off** - Josh gets my talk of the day award. This was a totally unbiased look at three popular frameworks [RSpec](http://rspec.info/), Test::Unit, and Thoughtbot's [Shoulda](http://www.thoughtbot.com/projects/shoulda)
* **The Great Kent Beck** - I have to be honest, I didn't get a lot out of Kent's talk. It was cool to reminisce about TDD, but I didn't get inspired. Honestly, Q&amp;A was the best part of the keynote.

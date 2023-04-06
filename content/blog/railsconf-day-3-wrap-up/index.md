---
layout: post
comments: true
title: RailsConf Day 3 Wrap-Up
tags:
- railsconf
- railsconf08
- rubyonrails
status: publish
type: post
published: true
meta: {}
publishedAt: '2008-06-02'
---

Man, am I beat! RailsConf was a lot of fun and I learned a lot. Day 3 was a bit shorter and I ran a little late. But here's some of the highlights from the talks I attended:

* **DeRailing: Smashing the Rails Stack** - started off a little slow and a little basic, but the main thing I got from this talk was [Tarantula](https://github.com/relevance/tarantula/tree/master) - it's inspired by SpiderTest and gives you the ability to test your site against cross site scripting. Don't forget to escape your erb with the h() function! (I'm definitely guilty of this faux pas)
* **Everyday DTrace** - it might have been the late night or something. I just was not into this demo. It was pretty low level and I couldn't really see myself using DTrace everyday, or anytime soon.
* **Advanced ActiveRecord Refactoring** - Hats off to Chad Pytel from [Thoughtbot](https://www.thoughtbot.com/) on this talk. It wasn't too advanced, but I think he covered some great ground. I hope it helped a lot of people new to Rails. One important thing to note that he highlighted and continued to emphasize - you can't actively refactor code without good test coverage. He also talked about overarchitecture in role based permission systems. If you're practicing Agile, you should only be building for what you need.
* **Rails Core Panel** - It was a bummer that DHH had to catch a flight. I think the core team is really cool, though. Diverse with different interests and backgrounds. I was sort of tuned out at the end, but they addressed a lot of questions about alternative frameworks. Before David left, he made a really good point about Rails clones. Instead of rebuilding it, why not just contribute and make it better?

I got to meet some cool people, and the irc room was pretty happening.  It was also great to spend sometime with [James](https://bitwelder.com/) after the conference while we waited for our flights back.

Also, if you're a Rails developer, check out [acts_as_community](https://www.actsascommunity.com). It needs a little polish, but I think it's got potential as a cleaner [WorkingWithRails](https://www.workingwithrails.com)

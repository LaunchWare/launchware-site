---
layout: post
comments: true
title: Five Things You Can Do Today to Make Your App Ready For Ruby on Rails 3
tags:
- bundler
- Rails
- rubyonrails
status: publish
type: post
published: true
meta:
  sociableoff: 'false'
  dsq_thread_id: '64235694'
publishedAt: '2010-02-04'
---

Rails 3 is coming!

I've been doing a lot of thinking about how I can help clients get in a better position to upgrade to Rails 3 when it's ready for prime time. There's a few things you can do today with your 2.3.x application to give it more Rails 3 flava. Yeah boy!!!

<object width="425" height="344"><param name="movie" value="https://www.youtube.com/v/F6kfUxCpWqE&hl=en_US&fs=1&rel=0"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/F6kfUxCpWqE&hl=en_US&fs=1&rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>

## Use Bundler instead of config.gem

[Yehuda Katz](https://yehudakatz.com/) has done a good job replacing config.gem with a more platform agnostic utility called [Bundler](https://github.com/carlhuda/bundler). The API has changed around a bit with the latest 0.9 release, but he supplies a [decent guide](https://yehudakatz.com/2009/11/03/using-the-new-gem-bundler-today/). For details on what's changed since that writeup, check out this [post from Yehuda](https://yehudakatz.com/2010/02/01/bundler-0-9-heading-toward-1-0/)

## Use inherited_resources to get respond\_with

[respond\_with](https://github.com/rails/rails/commit/09de34ca56598ae5d0302a14715b2a11b6cc9845) will be a nice shortcut in Rails 3 for the rendering end of RESTful controller actions. Jose Valim's [inherited_resources](https://github.com/josevalim/inherited_resources) actually gives you [respond\_with and respond\_to methods](https://github.com/josevalim/inherited_resources/tree/master/lib/inherited_resources/legacy/) for Rails 2.3.x applications. No more repetitive and un-DRY respond\_to blocks

## Use rails_xss

Unsafe strings will automatically be escaped by default in Rails 3. If you want this behavior in 2.3.x, all you have to do is install Koz's [rails\_xss](https://github.com/NZKoz/rails_xss). It is *surprisingly hard* to break out of the habit of using h() calls in your markup, though! Additionally, be wary that you might have to hack some of your view related plugins to get them working with rails_xss.

## Use More Named Scopes

Fortunately, ActiveRecord find() calls will soon be unfound in Rails applications. Pratik has done [some really cool stuff with active\_record](https://m.onkey.org/2010/1/22/active-record-query-interface). These changes are all pretty significant, but perhaps the largest deal is that the find() method and its relatives will be deprecated come Rails 3.1. One thing that is remaining a fairly consistent part of the API is named_scopes (despite a [name change](https://github.com/rails/rails/commit/d60bb0a9e4be2ac0a9de9a69041a4ddc2e0cc914)).

Developers should be encouraged to use named_scopes and association chains even more aggressively, now. It will certainly be easier to refactor a few named scopes around than it would be to refactor scattered find() calls all over your libraries. You should be doing this anyway, because it definitely helps with [improving code and test quality](https://blog.adsdevshop.com/2010/02/01/mocking-is-dead-long-live-mocking/)

An excellent gem that can help you with this is Ben Johnson's [searchlogic](https://github.com/binarylogic/searchlogic). It gives you a bunch of very useful, canned scopes.

## Replace references to RAILS\_ENV, RAILS\_ROOT, and RAILS\_DEFAULT\_LOGGER

Thankfully, these ugly constants have no place in a Rails 3 application. There are now methods to access these properties as part of the Rails module. So, for example, you would use Rails.env instead of RAILS_ENV

Nick Quaranto actually just wrote [a solid article with the details on the Rails module](https://litanyagainstfear.com/blog/2010/02/03/the-rails-module/).

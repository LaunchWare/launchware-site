---
layout: post
comments: true
title: 'What''s New in Edge: Scoped Mass Assignment in Rails 3.1'
tags:
- mass_assignment
- Rails
- ruby
- rubyonrails
- security
- Software
status: publish
type: post
published: true
meta:
  dsq_thread_id: '305145487'
publishedAt: '2011-05-16'
---

Security is important. You don't want malicious users chatting on IRC about how they Pwnd your web application.

<iframe width="560" height="349" src="http://www.youtube.com/embed/O2rGTXHvPCQ" frameborder="0" allowfullscreen></iframe>

If you're using Rails and you want to be secure, you should be protecting against mass assignment. Basically, without declaring attr_accessible or attr_protected, malicious users can set any column value in your database, including foreign keys and secure data. 

Here's a brief introduction to how mass assignment protection works. Let's say you have a user that belongs to a group:

<script src="https://gist.github.com/974447.js?file=user_classic.rb"></script>

When I set group_id to be protected, I'm disallowing it to be set by mass assignment.

My recommended approach, however, is to always set a whitelist of mass assignable attributes with attr\_accessible instead of a blacklist with attr\_protected. That way, you don't unintentionally leave a secure attribute unprotected.

<script src="https://gist.github.com/974447.js?file=user_attr_accessible.rb"></script>

This was a great addition to the Rails framework, but I always found myself wanting to conditionally protect attributes based on the state and authorization of my user. For example, I might want disallow users from setting their roles when they update their profiles, but I might want to allow admins to adjust their role via an administrative backend. This is how you can get it done in Rails 3.1

<script src="https://gist.github.com/974447.js?file=user_with_scope.rb"></script>

Along with this helpful change, you can also circumvent mass assignment protection entirely. This is useful, for example, if you're loading data and you control the source.

<script src="https://gist.github.com/974447.js?file=user_without_protection.rb"></script>

You should really only use without_protection if *you* control the inputted attributes. It isn't something you'd want to have in a controller action, generally speaking.

For more information on scoped mass assignment and additional attack vectors you should be securing against, [check out the edge Rails guide on security](http://edgeguides.rubyonrails.org/security.html)

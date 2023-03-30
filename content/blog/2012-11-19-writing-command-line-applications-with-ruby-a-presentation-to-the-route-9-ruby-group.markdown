---
layout: post
title: "Writing Command Line Applications With Ruby: A Presentation to the Route 9 Ruby Group"
date: 2012-11-19 13:39
comments: true
categories: 
  - presentations
  - community
  - ruby
tags:
  - ruby presentation
  - ruby training
  - ruby
  - ruby tutorial
  - command line applications
---

We've recently been dabbling with creating command line applications with ruby internally. You can do some really cool things with tools like [GLI](https://github.com/davetron5000/gli) and [Formatador](https://github.com/geemus/formatador) with relative ease.

I presented some of our learnings to the Route 9 Ruby Group and recorded it. There were some great questions and discussion.

<!-- more -->

Writing command line applications with ruby is a nice break from the web-based world. I find you can focus much more on the intent of the app than the aesthetic, so it might provide a useful way to prototype some data intensive applications.

The big takeaways I shared with the group:

* Just like you would in your web applicatiions, respect the design pattern of Model, View, Controller (MVC) - it keeps things nice and modularized
* Test all permutations of commands, switches, and flags as best you can. Sometimes, you get some weird interferences or side effects
* Delegate to an object oriented API to keep everything testable
* Document how you want to use the command line application first. It really helps to keep it user friendly.
* Get the excellent book: [Build Awesome Command-Line Applications in Ruby](http://pragprog.com/book/dccar/build-awesome-command-line-applications-in-ruby)

<iframe width="640" height="360" src="http://www.youtube.com/embed/OF4ylrYYeNw?feature=player_detailpage" frameborder="0" allowfullscreen></iframe>


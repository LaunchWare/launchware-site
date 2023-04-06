---
layout: post
title: 'Roboto: Search Engine Optimization for Your Rails Environment'
date: 2012-04-23 15:43
comments: true
author: Dan Pickett
categories:
- rails
- search engine optimization
- open source
publishedAt: '2012-04-23'
---

The Google bots will thank you for not [duplicating content on the InterWeb](http://www.seomoz.org/learn-seo/duplicate-content).

<!--more -->

<iframe width="420" height="315" src="http://www.youtube.com/embed/rcCS8AK6csg" frameborder="0" allowfullscreen></iframe>

Introducing [Roboto](https://github.com/LaunchWare/roboto), a Rails Engine for providing environment specific robots.txt files. Use this to hide your staging and QA environments from search engines.

Google will penalize you if content is duplicated across multiple domain names. If you have a publicly accessible staging environment, this could be hurting your production environment's search engine rankings. Follow along with this tutorial to hide your staging environment. Note, Roboto only works with Rails 3.1 and higher.

First, remove the generated robots.txt in your Rails App:

```
  #> rm public/robots.txt
```

Next, add roboto to your Gemfile:

```
  gem 'roboto'
```

```
  #> bundle
```

Then, add roboto to your routes (config/routes.rb):

```
  Rails.application.routes.draw do
    mount_roboto
  end
```

You can now specify environment specific robots.txt files in config/robots. So, in the case where we want to add a global disallow to our staging environment, we would create a file with the contents below at config/robots/staging.txt. If you haven't done so already, copy config/environments/production.rb to config/environments/staging.rb and configure your staging server to run in the staging environment ([Passenger](http://shriikant.blogspot.com/2010/04/configure-staging-environment-for.html), [Heroku](https://devcenter.heroku.com/articles/multiple-environments), [Unicorn](http://blog.sosedoff.com/2012/01/21/using-capistrano-unicorn-with-multistage-environment/)).

```
  User-Agent: *
  Disallow: /
```

You can also specify a fallback robots/default.txt for any environments you do not need to be explicit about.

---
layout: post
title: Accessible Facebook Dialogs And Feed Posting With Rails
date: 2011-12-16 11:19
comments: true
categories:
- Rails
- Facebook
- Accessibility
author: Dan Pickett
keywords:
- Rails
- Facebook
- Accessibility
description: Integrate Facebook Dialogs with your Ruby on Rails Application
publishedAt: '2011-12-16'
---

Don't be jealous that we've been integrating facebook and chatting with babes all day.

<iframe width="640" height="390" src="http://www.youtube.com/embed/2bkRGH4sJDE" frameborder="0" allowfullscreen></iframe>

Let me show you how the users of your app can share activities on Facebook. Thankfully, the effort required to integrate a feature like that has gotten a lot easier with tools like [OmniAuth](https://github.com/intridea/omniauth) and the introduction of [Facebook Dialogs](http://developers.facebook.com/docs/reference/dialogs/). What's more, they've made it so that you can provide a [progressively enhanced](http://en.wikipedia.org/wiki/Progressive_enhancement) experience for your users. In this article, I'll walk you through how to build a link that works with or without JavaScript enabled.

<!-- more -->

##Create Your App

We won't reinvent the wheel here. Check out the [well written guide](http://developers.facebook.com/docs/appsonfacebook/tutorial/) on how to create your app. Be sure to note your AppId and Secret Key

##Integrate OmniAuth

We used [omniauth-facebook](https://github.com/mkdynamic/omniauth-facebook). We don't advocate the use of [devise's](https://github.com/plataformatec/devise) baked in omniauth support because it does not support the ability for users to have multiple identities. If you want to eventually support other authentication mechanisms like Google or Twitter, you'll run into some architectural problems.

For more detail on getting omniauth set up, [the tutorial over at NetTuts](http://net.tutsplus.com/tutorials/ruby/how-to-use-omniauth-to-authenticate-your-users/) isn't too terrible.

##Show Dialog Links For Facebook Authenticated Users

Add our little [facebook_dialog](https://github.com/enlightsolutions/facebook_dialog) gem to your Gemfile.

``` ruby
    gem 'facebook_dialog'
```

Add your api key to an initializer like config/initializers/facebook_dialog.rb

``` ruby
    FacebookDialog.api_key = "<your appid/api key>"
```

In your view, do something like this:

``` ruby
    <%- feed_dialog = FacebookDialog::Feed.new({
      redirect_uri: "http://www.example.com",
	  link: "http://www.example.com",
	  name: "Wow!",
      caption: "Something pretty awesome",
      description: "Zomg! You won't believe what I found on the web."
    })-%>
    <%= link_to "Share on Facebook", feed_dialog.url, id: "share_on_facebook" %>
```
You can then add the JavaScript pieces at the tail end of the body to optimize page loading. Check out our simple jQuery example below:

``` ruby
	<%= facebook_js %>
    <%= javascript_tag do %>
      <%= fb_init_js %>
      $("#share_on_facebook").click(function(e){
		e.preventDefault();
        FB.ui(<%==  feed_dialog.to_json %>);
      });
    <%- end -%>
```

The facebook_dialog gem supplies the facebook_js and fb_init_js helpers.
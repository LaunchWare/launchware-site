--- 
layout: post
comments: true
title: Integration Testing Braintree's Transparent Redirect with Rails and Cucumber
tags: 
- braintree
- cucumber
- Development
- Rails
- ruby
- vcr
status: publish
type: post
published: true
meta: 
  dsq_thread_id: ""
---
So you've got a solid idea, a nice niche, and a great web application that meets your customers' needs. Now it's time to get PAID. It is all about the proverbial Benjamins after all.

<object style="height: 390px; width: 640px"><param name="movie" value="http://www.youtube.com/v/aTTVkh6NX50?version=3"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><embed src="http://www.youtube.com/v/aTTVkh6NX50?version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="390"></object>

## Go With Braintree Payment Solutions

If you're building a SaaS (Software as a Service) application then you probably need a merchant account, a payment processor, and a subscription billing system. After researching many options, Braintree Payment Solutions has a really stellar offering that really delivers in those three areas. Having been tasked with debugging payment processing issues in the past, having **one** provider to call is really convenient and simple. 

## Go With Transparent Redirect

In addition to being an all-in-one solution, Braintree has some pretty cool technology. In order to get around PCI compliance and all the liabilities with storing credit card data, they provide their customers with a system they call Transparent Redirect. This system allows you to post all client credit card information directly to Braintree without persisting any private data on your side.

Do you have custom attributes that you need to capture on registration in addition to the credit card data? No problem! Braintree will pass those through to your response handler.

For more details, [check out their docs](http://www.braintreepaymentsolutions.com/gateway/api).

## Implement Transparent Redirect

I used the [Braintree gem](https://github.com/braintree/braintree_ruby) to get things going.

### Initializer

Put your Braintree configuration in an initializer like **config/initializer/braintree.rb**

<script src="https://gist.github.com/901023.js?file=braintree.rb"></script>

### Schema Changes

Add a column to your account/user abstraction to store Braintree's unique identifier for the customer. This will link the account to Braintree's record.

<script src="https://gist.github.com/901023.js?file=schema_change.rb"></script>

### Custom Attributes

Use Braintree's control panel to configure any custom attributes you want to store and/or forward. For more details on this, check out [their writeup](http://www.braintreepaymentsolutions.com/docs/ruby/general/custom_fields).

### Set up your form

I'm doing some quick handwaving here - I had to create an activemodel compliant abstraction for the Braintree customer. The idea is to create a form that looks like this (hint: give plataformatec's [simple_form]() a try):
  
<script src="https://gist.github.com/901023.js?file=new.html.erb"></script>

## Integration Test

This is *the* most important part of your app. You want to get paid and your customers don't want to think twice about giving you their money. Let's keep these transactions running smooth. Don't leave a gaping hole in your test suite! I use [cucumber](http://cukes.info/) for acceptance and integration testing.

### Remote Action Problems

So cucumber isn't always [rainbows and unicorns](http://sfmoto.files.wordpress.com/2008/07/unicorns_rainbows.jpg). Cucumber does this really fun thing where it assumes every form submission posts to localhost regardless of what's actually set in the html.

To get around this, we have to hijack the local requests and basically emulate a post to Braintree directly.

<script src="https://gist.github.com/901023.js?file=braintree_test_app.rb"></script>

### Hack Yo' Rack

But wait - more fun ensues! Braintree does this really neat and secure thing called request signing. It requires that the hash used to build the query string be ordered. By default on Ruby 1.8.7, hashes are not ordered, so we have to hack both Rack and Rack-Test a bit :-( ([Queue the sad panda](http://xil-reno.shackspace.com/Sad_Panda.jpg)).

Warning! Horrendous monkey patching ahead!

<script src="https://gist.github.com/901023.js?file=hack_rack.rb"></script>

### Use VCR for Deterministic Tests

Phew! That was a lot of hacking to get solid cucumber tests around your app. Let's make sure that your tests aren't dependent on Braintree's sandbox being up and that your tests are generally deterministic. That way, you can run your test suite without necessarily having to be online, and you get repetitious, predictable tests. 

To pull this off, I'm a huge fan of a tool called [VCR](https://github.com/myronmarston/vcr). 

<script src="https://gist.github.com/901023.js?file=vcr.rb"></script>

This tool will record web requests and responses and allows you to run your tests without hitting the remote servers. 

### Hide Your Logins, Hide Your Keys

But wait! Don't commit that code just yet. When you record requests and responses, you need to obscure all the secure stuff that gets passed into your requests and gets returned in your responses. Here's a quick little utility I whipped up to hide the naughty bits:

<script src="https://gist.github.com/901023.js?file=vcr_2_point_oh.rb"></script>

It's a lot of work, but what results are solid, deterministic tests that effectively exercise what your user experiences when signing up for your service. Delightful enrollment features leads to delighted customers, and delighted customers lead to delighted, well-paid entrepreneurs! Happy charging!

Also, here's the [complete GIST](https://gist.github.com/901023) for reference.

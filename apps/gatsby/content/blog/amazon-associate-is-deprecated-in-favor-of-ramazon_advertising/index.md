---
layout: post
comments: true
title: Amazon Associate is deprecated in favor of ramazon_advertising
tags:
- advertising
- amazon
- api
- Development
- Rails
- ruby
status: publish
type: post
published: true
meta:
  sociableoff: 'false'
  dsq_thread_id: '42284781'
publishedAt: '2009-10-28'
---

Are you looking for a web wrapper for the Amazon Advertising API for your Ruby on Rails Application? ramazon_advertising is a library that provides this. It supports request signing.

The Amazon Advertising API allows you to retrieve Amazon catalog data and use it in your application. It can be really handy if you're participating in the [Amazon Associate's Program](https://affiliate-program.amazon.com/)

There are a few users of [Amazon Associate](https://github.com/dpickett/amazon_associate) that might want to know that I'm deprecating the library in favor of [ramazon_advertising](https://github.com/dpickett/ramazon_advertising). Amazon Associate was an older library that I was maintaining. It uses HPricot and really doesn't jive well from a design standpoint, so <strong>amazon\_associate is deprecated in favor of ramazon\_advertising</strong>

Ramazon Advertising uses [John Nunemaker's](https://railstips.org/) awesome library [happymapper](https://github.com/jnunemaker/happymapper) along with nokogiri selectors. It's much more object oriented and cleaner, so I hope you'll enjoy using this library.

Right now, it supports product data acquisition via the ItemLookup request. Here's a simple example where you can find the product data for a given asin:

<code>
  @products = Ramazon::Product.find(:item_id => "B000NU2CY4", :response_group => "Medium")<br/>
  @products[0].title<br/>
  @products[0].asin<br/>
  @products[0].upc<br/>
  @products[0].large_image.url<br/>
  @products[0].url<br/>
  #you can also use a nokogiri search string to get elements that don't have built-in accessors<br />
  @products[0].get("ItemAttributes Actor").collect{|a| a.content}
</code>

The ruby gem is available on [Gemcutter](https://gemcutter.org/gems/ramazon_advertising) and the documentation is available at [rdoc.info](https://rdoc.info/projects/dpickett/ramazon_advertising). Patches and feature requests are welcomed!

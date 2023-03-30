---
layout: post
title: "Semantics Over Aesthetics: Use Destroy Buttons Instead of Destroy Links"
date: 2011-12-31 16:19
comments: true
categories:
- rails
- accessiblity
keywords:
- rails
- accessibility
- semantics
- http
---

I was coding away this afternoon, and I introduced a destroy link to my codebase. It looked something like this:

```ruby
  <%= link_to "Delete", widget_path(@widget), method: :delete %>
```
<!-- more -->

Every time I write something like this, it makes me think twice. The problem with this code is that it heavily relies on JavaScript and [jquery-ujs](http://github.com/rails/jquery-ujs) to trigger the right action on the server (An HTTP DELETE request). Anchors are semantically only capable of linking to URL's with a GET request.

Here's why writing a link this way is bad:

* It relies heavily on javascript. Any user with a non-JavaScript capable browser will not be able to exercise this action.
* It can be followed by a bot if you're not careful. Search engines and other bots might catch this link and attempt to follow it.

Sometimes, I'd write a link with a manual route so that I could use a proper link. Something like this:

```ruby
  <%= link_to "Delete", delete_widget_path(@widget) %>
```

After properly configuring routes and a controller, this issues a GET to the widgets controller and destroys the widget via a delete instance method. This is even worse for a number of reasons:

* It violates RESTful conventions. A GET request should generally not cause writes to your domain objects.
* It circumvents a bunch of Rails countermeasures and makes you succeptible to exploits. Things like cross site request forgery protection aren't run on GET requests. That means a malignant user could try to impersonate another user by hijacking their session.
* This link is even more succeptible to bots following it if you do not include a rel="nofollow" attribute.

With a desire for other opinions, I turned to twitter and had a great [conversation](http://twitter.com/#!/dpickett/status/153190445931970560) with some smart folks. We were debating on how HTTP should not constrain a user's experience and that there should be an accessible way to markup links that issue a DELETE request. Ultimately, it boiled down to a decision between using a link as opposed or a button and/or form element for this type of interaction. [Kevin's tweet](http://twitter.com/#!/gisikw/status/153194635890667520) really hit home for me.

A button would look something like this:

```
  <%= button_to "Delete", widget_path(@widget), method: :delete %>
```
Buttons and links look very different natively, but that's not HTML's fault. Browsers interpret them differently, making for very distinct renderings.

![Delete Button Vs Link](/images/delete_btn_vs_link.png)

The markup or the HTML standard is not at fault here. The browser makes a certain assumption of how you want a button to look vs. how you would like a link to look. If you're practicing sound web standards, aesthetics and presentation should be the responsibility of your CSS. So, I created a SCSS/SASS mixin to make a button look like a link.

<script src="https://gist.github.com/1545151.js"> </script>

```scss
  input {
    @include link_like_button;
    color: blue;
  }
```

Which looks much truer to form (note I've added color: blue in addition to the mixin):

![CSS Driven Button Vs Link](/images/delete_btn_css_vs_link.png)

*So in conclusion, don't use a link to trigger write or destroy actions, especially for aesthetic reasons. You can override the styling opinions of the browser to make a button appear to the user like a link.*

As an aside, Twitter can be such an awesome place to learn a thing or two. Since investing in community is part of our company values, we spend a lot of time there. If you're new to Ruby or the Rails community, it is a great way to learn purely through osmosis.

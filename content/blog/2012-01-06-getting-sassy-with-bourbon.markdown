---
layout: post
title: "Getting Sassy with Bourbon"
date: 2012-01-06 11:04
author: Jason Zopf
comments: true
categories:
---

One of my favorite new tools is the [Bourbon](https://github.com/thoughtbot/bourbon)
gem from thoughbot.  It is a set of Sass mixins that greatly increases the speed of front-end
development.  While there are a lot of other options out there like
Compass, the simplicity of Bourbon has been its best feature.
<!-- more -->

To get started, just follow the instructions found on the github repo.
We use it in a Rails 3.1 project, so it was a simple as adding a splash
of bourbon to our gemfile and then including bourbon in our SCSS files.

The next step is to just start experimenting.  You'll quickly find that
Bourbon's syntax is intuitive and follows normal CSS syntax when
possible. It provides you with a basic set of tools and gets out of the
way.  Want a linear-gradient, box-shadow, and border-radius applied
to your awesome div?

``` plain Direct Mixin Examples
div.awesome {
  @include linear-gradient(#f1f2f4, #ccc);
  @include box-shadow(0px 1px 4px rgba(0, 0, 0, 0.3));
  @include border-radius(4px);
}
```

{% img /images/awesome_div.png 'Awesome Div' 'screen shot example of styled awesome div' %}

Want to apply your awesome div styles to other elements in a single
line? Want to do that while enabling the flexibility of changing the gradient colors?
All you have to do is create a Sass mixin and some variables.

``` plain Composite Mixins

// create the mixin

@mixin awesome_mixin($top_color, $bottom_color) {
  @include linear-gradient($top_color, $bottom_color);
  @include box-shadow(0px 1px 4px rgba(0, 0, 0, 0.3));
  @include border-radius(4px);
}

// awesomeness

.div_needing_awesome {
  @include awesome_mixin(#748BB9, #5570a7);
}

```

Do you want to use Bourbon's button add on, but modify your button's margins
and padding on the fly?


``` plain Awesome Buttons

// create the mixin

@mixin awesome_button($color, $margin, $padding){
  @include button($color);
  margin: $margin;
  padding: $padding;
}

// button time!

.big_awesome {
  @include awesome_button(#5570a7, 4px, 20px 40px 24px 40px);
  font-size: 22px;

}
.small_awesome {
  @include awesome_button(#51c96e, 4px, 5px 7px 8px 7px);
}


```

{% img /images/awesome_buttons.png 'Awesome Buttons' 'screen shot example of styled awesome buttons' %}

Note above that you can use shorthand for the $margin and $padding
variables just like you would with plain css.  All you have to do is
comma delimit them when passing as an argument.


Be sure to find a list of all supported functions, mixins, and addons at
the bottom of the documentation.  There are some helpful functions like
tint and shade for altering colors and useful variables like
font-family.

Finally, you can `bundle open bourbon` to explore the gem.  The source
is well organized and readable.  You can see all the work thoughtbot put
into the project to make your life easier.


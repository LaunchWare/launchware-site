---
layout: post
title: 'Acceptance Testing: Asserting Sort Order'
date: 2012-07-13 16:00
comments: true
author: John Gesimondo
categories:
- rails
- Rspec
- integration
keywords:
- Rspec
- integration testing
- position
- assertions
publishedAt: '2012-07-13'
---

At LaunchWare, we've been looking for the best way to locate an element on a page in an Rspec request spec. Sometimes there's just no getting around asserting that one piece of content appears before another, like when testing sort options. We've tried a few things:

<!-- more -->

## The exposition
Imagine there are two comments on a post. We want to assert that the most recent comment appears first.

We have the following markup:

``` html
<div>
  <div class="comment">
    <p>Here is a newer comment!</p>
  </div>
  <div class="comment">
    <p>Here is a comment!</p>
  </div>
</div>
```

## The most obvious way
The most obvious way to assert that the newer commment appears first is:

``` ruby
let!(:old_comment) { Factory(:comment) }
let!(:new_comment) { Factory(:comment) }

within "div.comment:nth-child(1)" do
  page.should have_content new_comment.text
end

within "div.comment:nth-child(2)" do
  page.should have_content old_comment.text
end
```

Or some variant of this. ```page.find("div.comment:nth-child(1)")``` works too.

But this approach is brittle. What if we go all HTML5 on this template and change the comment divs to article tags like so:

``` html
<article>
  <article class="comment">
    <p>Here is a newer comment!</p>
  </article>
  <article class="comment">
    <p>Here is a comment!</p>
  </article>
</article>
```

Then our test is broken.

Or worse, if we add another comment into the mix as part of another test:

``` ruby
let!(:old_comment) { Factory(:comment) }
let!(:new_comment) { Factory(:comment) }
let!(:some_other_comment) { Factory(:comment) }
```

Our markup becomes:

``` html
<article>
  <article class="comment">
    <p>Here is a comment!</p>
  </article>
  <article class="comment">
    <p>Here is a newer comment!</p>
  </article>
  <article class="comment">
    <p>Here is a comment!</p>
  </article>
</article>
```

Not nth-child 1 and 2 anymore...

But hey, we don't really care which children they are, or what tags they are. We just want to know if the text of the new comment is on the page and placed somewhere before the old comment! Let's test _that_. So, here you have it:

## The less brittle (and therefore better) way
We know thse things:

1. With capybara, you can grab the contents of the whole page as a string by calling ```page.body```.
2. And with a Ruby string, you can grab the position (index) of a certain substring by calling ```index(substring)```.
3. And with Rspec you can assert that one index/position is less than/before another using ``` index1.should_be < index2 ```.

So put that all together, and we replace the brittle approach above with this:

``` ruby
let!(:old_comment) { Factory(:comment) }
let!(:new_comment) { Factory(:comment) }

page.body.index(new_comment.text).should < page.body.index(old_comment.text)
```

Awesome!

But there's one more thing:

## The one more thing (best) way

It would be annoying to type that over and over. What if you or the guys at LaunchWare figure out a better way to do this in the future? You wouldn't want to have to find-and-replace your whole code base. And we wouldn't either.

Try this Rspec custom matcher definition on for show:

``` ruby
Rspec::Matchers.define :appear_before do |later_content|
  match do |earlier_content|
    page.body.index(earlier_content) < page.body.index(later_content)
  end
end
```

Once this is in play, you can now make this magical assertion:

``` ruby
let!(:old_comment) { Factory(:comment) }
let!(:new_comment) { Factory(:comment) }

new_comment.text.should appear_before(old_comment.text)
```

Definitely try this at home:

## How to add this to your project

I've [released this as a gem](https://github.com/jmondo/orderly)! so all you have to do is add
```ruby
gem 'orderly'
```
to your gemfile. Then you can assert
```ruby
this.appears_before(that)
```
And you're in business. \#win

Follow me on Twitter at [jmondo](https://twitter.com/jmondo) for <= 140 char gems

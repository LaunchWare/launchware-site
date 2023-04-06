---
layout: post
comments: true
title: Catch All Exception Handling Is Not Flow Control
tags:
- Development
- object oriented programming
- Rails
- ruby
status: publish
type: post
published: true
meta:
  dsq_thread_id: '427410132'
publishedAt: '2011-09-27'
---

There has been a lot of [recent](https://www.ngauthier.com/2011/09/using-exceptions-to-manage-control-flow.html) [discussion](https://avdi.org/devblog/exceptional-ruby/) about utilizing exception handling as flow control. It is my opinion that this is a bad practice, and results in code that is difficult to read and maintain.

Exceptions can be perceived as non-local GOTO statements. This can adversely affect the readability of your code and mislead team members as to the actual *intent* of your method. Let's take an oft-used controller action for example.

<script src="https://gist.github.com/1245348.js?file=bad_controller.rb"></script>

This is bad for a few reasons. First, we're utilizing what's called a _catch all_ exception here. This is [bad design](https://www.enlightsolutions.com/articles/bad-design-catch-all-exceptions/) because we could be burying an error that developers need to know about. Perhaps there's a hook that sends an email out upon creation, and the SMTP server is down. With this implementation, the developers would have no way of knowing about that exceptional case and users would continue to receive unprocessable entity status codes.

This is also a violation of REST. When something is exceptional or in an errant state, like an SMTP server being down, the proper status code to return is 500 (Server Error). Returning an unprocessable entity infers to the client that they have supplied invalid information and that they're disobeying the API's contract.

So, let's improve this example a bit to remove the catch all exception:

<script src="https://gist.github.com/1245348.js?file=better_controller.rb"></script>

This is better because it expressly handles for an expected exception as opposed to any error that can happen in the ruby universe of errors. This way, if an SMTP server was unavailable or timed out, developers could be notified about that problem and address it.

There's still a problem here, however. The code above is not _intentional_ and should be considered a violation of the [Principle of Least Astonishment](https://c2.com/cgi/wiki?PrincipleOfLeastAstonishment). Programmers [read code a heck of a lot more than they write it](https://www.amazon.com/gp/product/0132350882/ref=as_li_ss_tl?ie=UTF8&tag=enlsolinc-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0132350882) so your code should be clear and intentional. Utilizing a conditional expressively states "I'm expecting this case to fail _sometimes_, and here's how we handle it."

<script src="https://gist.github.com/1245348.js?file=best_controller.rb"></script>

This also allows us to evaluate all the lines in each side of the conditional whereas a rescue halts execution.

There are also [moderate performance gains](https://gist.github.com/1245342) to using conditionals because Ruby is optimized for that logic as opposed to exception handling.

This conversation is not new. To quote one of my favorite books (first published in October, 1999), [The Pragmatic Programmer](https://www.amazon.com/gp/product/020161622X/ref=as_li_ss_tl?ie=UTF8&tag=enlsolinc-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=020161622X),

> "...exceptions should rarely be used as part of a program's normal flow; exceptions should be reserved for unexpected events"

If you're still not convinced, [let me google that for you](https://lmgtfy.com/?q=do+not+use+exceptions+as+flow+control).

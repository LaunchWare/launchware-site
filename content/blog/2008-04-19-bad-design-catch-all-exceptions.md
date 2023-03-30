--- 
layout: post
comments: true
title: "Bad Design: Catch All Exceptions"
tags: 
- architecture
- design
- Development
- exceptions
- programming
- Software
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "9381444"
---
I might be getting a little geeky on everyone here, but I have to share something very important to programmers. I recently noticed this in a recent Rails project I was working on (method names changed to protect the guilty)

<pre>
def do_something_really_important
  #lots of complicated implementation

  rescue ApplicationError
end
</pre>

Why is this some of the worst code I've ever seen? If something unintended goes wrong the developers would be none the wiser. Nor the potential user for that matter. If this is a crucial method this really could have disastrous effects.

Defensive design is great when it comes to exception handling, but make sure you are handle for specific exceptions intentionally. Also if you're catching an exception, actually do something! Email an admin, log the error - create some way for the developers to get insight on what is happening. In other words, if you're expecting a "File Not Found Error", do this instead:

<pre>
def do_something_really_important
  #lots of complicated implementation

  rescue FileNotFoundError
    #actually do something useful
end
</pre>

It's not rocket science - it is good design. Good design is what separates architects from hackers.

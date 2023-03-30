---
layout: post
comments: true
title: Logging Email Messages with Ruby, Rails and postmaster_general
tags:
- gem
- mail
- Rails
- ruby
- rubyonrails
status: publish
type: post
published: true
meta:
  dsq_thread_id: ''
publishedAt: '2011-01-25'
---

Rendering emails locally is a pain. Rendering all the emails in your Rails app is even more of a headache.

I frequently get requests from clients to send them a complete set of the emails sent from their applications for copywriting review. I wrote a quick gem for you to incorporate that function into your ActionMailer tests. It will log all of your emails to a central location so that you can zip them up and send them to your clients and/or stakeholders.

I've called it [postmaster_general](http://github.com/dpickett/postmaster_general).

Once installed (add it to your gemfile as specified in the [README](https://github.com/dpickett/postmaster_general/blob/master/README.rdoc), set the log directory like so:

<code>
PostmasterGeneral.log_directory = "/some/arbitrary/path"
</code>

Then, you might have an ActionMailer spec like this:

<script src="https://gist.github.com/795439.js"> </script>

After you run your suite or this particular spec, you'll have a file with a path of /some/arbitrary/path/a_delivery.txt that contains the contents of your message. What's neat is it works well with continuous integration - you could set up your CI to automatically prepare an up to date version of all the emails in your system.

I hope you find it helpful, and that it encourages you to write ActionMailer tests!

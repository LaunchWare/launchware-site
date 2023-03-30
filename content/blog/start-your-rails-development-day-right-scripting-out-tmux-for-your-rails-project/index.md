---
layout: post
comments: true
title: 'Start Your Rails Development Day Right: Scripting out TMux for your Rails
  Project'
tags:
- Development
- Lifehack
- Rails
- rubyonrails
- scripting
- tmux
status: publish
type: post
published: true
meta:
  dsq_thread_id: ''
publishedAt: '2010-12-01'
---

Every day starts the same. Open up [iterm2](http://code.google.com/p/iterm2/), start up a [tmux](http://tmux.sourceforge.net/) session and create 3 windows. One for working (generating models, opening up the Rails console, etc), one for the server, and one for running autotest in the background. Then, I name the Tmux session appropriately along with all the windows. It takes about 5-10 minutes to get this all set up nicely in the morning. I got kind of tired doing it and felt like it was wasted time. After some research and some honing, I've created the following script:

<script src="https://gist.github.com/723637.js?file=tmux_textaurant.sh"></script>

Hope you find it useful! For easy reference and forking I've created a [gist](https://gist.github.com/723637).


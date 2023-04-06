---
layout: post
comments: true
title: Great Trac Shortcuts with Quicksilver and Firefox
tags:
- Development
- Software
status: publish
type: post
published: true
meta:
  dsq_thread_id: '9373109'
publishedAt: '2007-09-22'
---

So I use <a href="https://trac.edgewall.org/" title="Trac">Trac</a> a lot. I love their search mechanism - you can easily pull up a ticket, changeset, or report by typing #<em>(Ticket Number)</em>, [<em>(Changeset number)</em>], or <em>{(Report Number)</em>} respectively. Many times, I'll get a list of ticket numbers to run through and opening them all can be a pain.

With the help of <a href="https://quicksilver.blacktree.com/" title="Quicksilver">Quicksilver</a> and its Firefox plug-in, I'm able to get into Trac extremely quickly.

Here's how I did it.
<ol>
	<li>Install the Firefox plug-in for Quicksilver</li>
	<li>Create a quick search bookmark for your trac site. Use something short like "trc" as a keyword. The location should be something like https://&lt;your trac url&gt;/search?<strong>q=%s</strong>&amp;wiki=on&amp;changeset=on&amp;ticket=on. Make sure you place it in the "Quick Searches" folder.</li>
	<li> In quicksilver you should now be able to type "trc" (or whatever keyword you set in step 2) &gt; tab to "Search For" &gt; tab again &gt; enter your search query.</li>
	<li>When you press enter your search results should come right up in Firefox.</li>
</ol>
Hope you find it helpful. It saves me a lot of time and aggravation.

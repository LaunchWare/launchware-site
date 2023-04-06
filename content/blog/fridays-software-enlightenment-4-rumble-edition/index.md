---
layout: post
comments: true
title: 'Friday''s Software Enlightenment #4 - Rumble Edition'
tags:
- Development
- entrepreneurship
- Rails
- railsrumble
- rubyonrails
- Software
status: publish
type: post
published: true
meta:
  sociableoff: 'false'
  dsq_thread_id: '31727334'
publishedAt: '2009-08-28'
---

The [2009 Rails Rumble](https://twitter.com/gisikw) was a huge event! The results are simply stunning with great apps like [Lowdown](https://mcp.r09.railsrumble.com/) and [hi.im](https://hi.im). It really is amazing what can be built in 48 hours. If you get a chance, please head over, [register](https://r09.railsrumble.com/session/new) and vote on the [Rails Rumble Site](https://r09.railsrumble.com/entries)

So without further ado, here's some tools I found immensely useful in the creation of my rumble app. I'd really like to write a full post mortem, but in the spirit of Friday's short list of links, here goes:

* [SearchLogic](https://www.github.com/binarylogic/searchlogic) - excellent derived named scopes and search form capabilities.
* [AuthLogic](https://www.github.com/binarylogic/authlogic) - my favorite authentication system out their for Rails today.
* [Formtastic](https://www.github.com/justinfrench/formtastic) - a great utility for generating forms quickly.
* [Inherited_Resources](https://www.github.com/josevalim/inherited_resources) - Jose has done an awesome job with this helper that handles your typical (and not so typical) RESTful controller actions
* [Stringex](https://www.github.com/rsl/stringex) - useful for permalinking
* [under_construction](https://www.github.com/dpickett/under_construction) - a handy javascript utility I've written to quickly note what design elements need to be implemented from a development standpoint.
* [serverjuice](https://github.com/hartcode/serverjuice/) - Great for getting an Ubuntu VM up and running quickly
* [SpreadHead](https://www.github.com/jeffrafter/spreadhead) - although it required some adjustments in the way it handles routes, I really think this is a great way to get a quick CMS integrated with your site. It's definitely useful to have some editable pieces of your application when there's a code freeze in 48 hours. I currently use it for CMS partials (a way to have editable content inside a page), but I do not for individual pages themselves. There's an issue in the gem version where the routes are added to the top of priority instead of the bottom. I'm hoping to help with a fix for this
* [tab_menu](https://www.github.com/dpickett/tab_menu) - I always seem to need tabs or a nice menu system, so I use this code pretty frequently
* [ThemeRoller](https://jqueryui.com/themeroller/) - easily roll JQuery UI styling.

The combination of formtastic, searchlogic, and inherited_resources has really changed the way I code. I think a post on the power of these tools in combination with [chronic](https://chronic.rubyforge.org/)

Some of these tools and more are available in the [Enlightened Template](https://github.com/dpickett/enlightened_template/tree/master) I maintain on Github. There were some updates after the rumble. I hope you find it useful!

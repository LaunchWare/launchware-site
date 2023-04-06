---
layout: post
comments: true
title: Fix nil.rewrite errors in your Helper Tests
tags:
- helpers
- Rails
- TATFT
- testing
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  dsq_thread_id: '9358258'
publishedAt: '2008-12-14'
---

In testing my helpers, I discovered a nil.rewrite exception due to ActionController::Base.initialize_current_url not being called. This occurs when using url_for with a hash as arguments.

ActionView::TestCase does not initialize current url so you won't be able to use *_url and *_path helpers generated from your routes. Put the following lines at the end of your test_helper.rb file to resolve the issue.

<pre class="textmate-source">
class ActionView::TestCase < ActiveSupport::TestCase
  class TestController < ActionController::Base
    attr_accessor :request, :response, :params

    def initialize
      @request = ActionController::TestRequest.new
      @response = ActionController::TestResponse.new

      #TestCase doesn't have context of a current url so cheat a bit
      @params = {}
      send(:initialize_current_url)
    end
  end
end
</pre>

I've submitted <a href="https://rails.lighthouseapp.com/projects/8994/tickets/1561-actionviewtestcase-does-not-have-current-url-context-so-url_for-will-fail-for-hashed-options">a patch to core</a> regarding this. Please +1 for the good of helper_tests!

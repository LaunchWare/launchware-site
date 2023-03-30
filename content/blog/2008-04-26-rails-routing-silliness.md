--- 
layout: post
comments: true
title: Rails Routing Silliness
tags: 
- Rails
- routing
- rubyonrails
- Software
- urls
status: publish
type: post
published: true
meta: 
  dsq_thread_id: "9381450"
---
<pre class="textmate-source"><span class="source source_ruby source_ruby_rails"><span class="meta meta_rails meta_rails_routes">  map<span class="punctuation punctuation_separator punctuation_separator_method punctuation_separator_method_ruby">.</span>resources <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>organizations</span> <span class="keyword keyword_control keyword_control_start-block keyword_control_start-block_ruby">do </span><span class="punctuation punctuation_separator punctuation_separator_variable punctuation_separator_variable_ruby">|</span><span class="variable variable_other variable_other_block variable_other_block_ruby">organization</span><span class="punctuation punctuation_separator punctuation_separator_variable punctuation_separator_variable_ruby">|</span>
    organization<span class="punctuation punctuation_separator punctuation_separator_method punctuation_separator_method_ruby">.</span>resources <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>members</span><span class="punctuation punctuation_separator punctuation_separator_object punctuation_separator_object_ruby">,</span> <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>member</span> <span class="punctuation punctuation_separator punctuation_separator_key-value">=&gt;</span> <span class="punctuation punctuation_section punctuation_section_scope punctuation_section_scope_ruby">{</span><span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>activate</span> <span class="punctuation punctuation_separator punctuation_separator_key-value">=&gt;</span> <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>get</span><span class="punctuation punctuation_section punctuation_section_scope punctuation_section_scope_ruby">}</span>
  <span class="keyword keyword_control keyword_control_ruby">end</span>
  
  map<span class="punctuation punctuation_separator punctuation_separator_method punctuation_separator_method_ruby">.</span>resources <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>organizations</span><span class="punctuation punctuation_separator punctuation_separator_object punctuation_separator_object_ruby">,</span>
    <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>has_many</span> <span class="punctuation punctuation_separator punctuation_separator_key-value">=&gt;</span> <span class="constant constant_other constant_other_symbol constant_other_symbol_ruby"><span class="punctuation punctuation_definition punctuation_definition_constant punctuation_definition_constant_ruby">:</span>members</span></span></span></pre>

There's a lot of debate going on around these two blocks of code. Why am I opting for the top instead of the bottom? Because there's no documentation for the bottom! I have no idea how to add a custom, member action to the has_many style of routing.

One thing is starting to annoy me about the latest revisions to Rails. Rails developers are very opinionated and want you as a fellow developer to follow recent conventions, but how can I follow a convention if there's no documentation to support it? 

Of course, I can't really complain because I haven't contributed to the documentation. My point is that if DHH and the rest of the core team have strong opinions about recent changes, they should put more of an emphasis on revising documentation to get people using the right conventions.

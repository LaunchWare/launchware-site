---
layout: post
comments: true
title: Mingle For Agile Software Development
tags:
- agile
- mingle
- Project Management
- software development
status: publish
type: post
published: true
meta:
  dsq_thread_id: '9362001'
publishedAt: '2008-03-02'
---

<p>For a long time, I've been looking for a decent system to manage <a href="http://www.secondrotation.com">Second Rotation's</a> user stories. I have to say, I've been very impressed with <a href="http://studios.thoughtworks.com/mingle-project-intelligence">Mingle</a>. Last week, I worked on refining the story statuses for the life cycle of a user story once it is slated for an iteration. Here's what we came up with:</p>

<ul>
  <li><strong>Awaiting Information</strong> - the engineering team is waiting on the stakeholder for information</li>
  <li><strong>Ready For Development</strong> - the developer assigned the user story has all the information needed to commence work</li>
  <li><strong>In Progress</strong> - the developer is working on the user story</li>
  <li><strong>Ready for Staging</strong> - the developer has finished work on the user story, and it's ready to be sent to our staging environment</li>
  <li><strong>Staged</strong> - the story has been sent to our staging environment and is ready for testing</li>
  <li><strong>Ready for Deployment</strong> - the story has been validated, both from a QA and stakeholder's perspective. This means the user story is green lighted for production</li>
  <li><strong>Complete</strong> - the story has been deployed to production</li>
</ul>

<p>The value of defining these statuses within Mingle is the ability to define transitions. For example, I can report to stakeholders an average delay per user story because I track when a story enters and exits the Awaiting Information status. I can also track how well a developer is fulfilling requirements. If a user story is consistently <em>Staged</em> and then reverted to <em>In Progress</em>, This is all done automatically as the story owner moves it through the life cycle we've created.</p>

<p>Another huge analytic - I'll be able to track estimation quality by comparing planning estimates to the duration of a story having the status of "In Progress"</p>

<p>Eventually, I want to refine these story statuses to reflect what's done before a user story is assigned to an iteration.</p>

<p>One thing I wish Mingle had that causes a major gap in my regular status reports is the ability to correlate many user stories to a project. Business stakeholders do not usually respond well to a long list of stories, so being able to report status on a project by project basis would be ideal. <a href="http://www.thoughtworks.com/">Thoughtworks</a> (the developers of Mingle) reports that this will be a feature in an <a href="http://studios.thoughtworks.com/studios-feb08.html">upcoming release</a>.</p>

<p>If you're managing an Agile Software Development project, I highly recommend you check out Mingle.</p>

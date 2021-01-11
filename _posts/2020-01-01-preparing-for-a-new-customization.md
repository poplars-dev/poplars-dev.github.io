---
layout: post
title: Preparing for a new Customization
tags: process python extender implementation testing 
excerpt_separator: <!--more-->
permalink: /articles/preparing-for-a-new-customization.html
---

All the customizations we distribute are tested as thoroughly as possible
in house before being unleashed on an environment that is representative
of production.  Representative includes the same versions, data, settings, 
and processes.

However, your production environment is guaranteed to be different from all
others!  Before installing a customization in production it is imperative that
it be tested in a representive environment first. Plan time to install and
thoroughly test your production processes and configuration with the
customization to make sure it behaves as expected.
<!--more-->

Pay particular attention to areas where your processes or data may vary
from the Sage Best practices.

For customizations with complex configuration, document the tested 
configuration in full so it can be moved without error to production.

If you encounter any unexpected behaviours, or things that could work better
for you, just [let us know](mailto:chris@poplars.dev).  We
may be able to quickly tweak the customization to suit your needs.  If not,
we will work with you to find a solution that fits.

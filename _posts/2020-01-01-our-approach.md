---
layout: post
title: Our Approach to Successful Engagements
tags: process approach python extender implementation business analyst
excerpt_separator: <!--more-->
permalink: /approach.html
---

Customizations are rarely given the attention they deserve.  They can
play a key part in a customer's business process but from the developer's
perspective they are a one off project.  The result tends towards a low
quality customization that meets the minimum bar only; inflexible and hard
to maintain.

We are focused on delivering [quality](/quality.html) customizations for Sage
300. A high quality customization is built as much on possible on existing,
well tested code - quality customizations have as little custom code as
possible!  In fact, the best customizations contain custom code only to express
the specific business process they automate.  
<!--more-->

Building a customization requires much more than just expressing the 
customer's business logic. Data needs to be managed, events dispatched, errors
handled. Extender provides a secure and isolated execution
environment for customizations. However, security comes at the expense of easy
code reuse and access to standard development tools.  
Without reusing existing well tested code, or having access to standard tools 
like linters, it is exceptionally
difficult to consistently build quality customizations.

We build and distribute all customizations using Customization
Manager.  Customization Manager overcomes the code reuse limitations of the
Extender enviroment and enables developers to use any of the almost 200,000
libraries available in the Python Packaging Index or their
own, existing, code in the development of new customizations.  

We use `extools`, an open source library that contains much code common to all 
customizations, to build on a well-tested, robust, foundation that is easily
easily maintained by other Python developers in the future.

### Testing

### Deploying 

### Maintining



---
layout: default
title: Quality
tags: process approach python extender implementation 
---
## What is a Quality Customization?

A quality customization has many features:

- it addresses a well defined and understood scope;
- it is built on robust code;
- it is thoroughly tested in a representative environment;
- deployment is procedurally simple, documented, and practiced;
- it is easy to maintain and adapt to changing business conditions.

## Building Quality Code

Software development is a maturing field and there are well understood ways of
quantifying code quality.  All quality code shares the following features:

- it is as concise as possible while meeting all requirements and handling
  likely error paths;
- duplication is avoided at all costs: every piece of logic has one, 
  authoritative representation that is reused where required;
- units, such as functions and methods, should be 30 lines or shorter;
- units should contain five or fewer decision branches;
- style is clear, expressive, easily understood and maintained by other
  developers.

Taken together, these features serve as a guiding foundation on which to
build code that is easily understood by other developers, straightforward to 
test, and quickly adapted to changing business requirements.

Many programming languages, Python included, have an extensive collection of 
tools that automatically analyze code and identify areas of duplication,
run-on units that are difficult to understand, excessive decision complexity,
and poorly formatted or styled code.  

Quality code passes these analyses. All customizations are automatically
analyzed following every change to ensure we are writing quality code from the 
first line to the last.

### What is wrong with duplication?

Duplicated code is difficult to maintain.  Instead of making a change in one
place, it must be made in may places to keep the application consistent. It 
is a partial change just waiting to happen!

Code duplication occurs suprisingly often: copy/pasting is often expedient, 
even in development. In the secure and isolated Extender
environment, in some instances it is almost impossible to avoid.

This is one reason we build customizations using Customization Manager,
which enables customizations to be distributed as standard Python packages and
installed in the environment in a way that makes code reuse simple, 
eliminating the need to duplicate code.

### Why are simple units important?

Quality code is composed of simple units.  In the Python world, units are 
functions and methods: groupings of code that perform a specific task.

We have a limited capacity to hold information in our minds. Just like run-on
sentences can be very difficult to understand, long functions require that the 
developer keep too much in working memory. This often leads to simple over 
sights and coding errors.

The same is true for functions with many decision branches; it is difficult
to understand all the different paths that can be taken through the code.
This often results in missed error paths and silent, or halting, failures.

### Why should I care about style and maintenance?

Over time customizations, particularly those that automate
processes, become a transparent part of a business.  If the customizations
in place are easy to maintain, they are easily adapted to changing business 
requirements and conditions.  If they are not, the cost of adjusting processes
to meet new requirements may rise significantly.

One of the advantage of using Extender and Python to customize Sage is the 
ready pool of development talent that are capable of working with Python. 
Code that is not written in a maintable fashion is considerably more 
expensive for another developer to adjust or update, undermining this advantage
and increasing the long term cost of ownership.

Poorly written customizations that are difficult to maintain do not only
introduce risk into your business process (customizations can change almost any
Sage component, receivables, payables, and G/L included!), they may also lock
you in and make it difficult or expensive to change processes or providers in
the future.

## Customization Manager

Customization Manager was developed to provide the tools required to re-use,
test, and analyze code built for the Extender enviroment. It bridges the gaps
that inhibit the use of Python programming best practices and 
standard tools used to assess and maintain code quality.

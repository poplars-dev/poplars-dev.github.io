---
layout: post
title: Pain Points
tags: process approach python extender implementation 
permalink: /approach/pain-points
---

After developing and deploying a few customizations, the common pain
points become clear.  In this article I discuss the ones encountered most
often.

I generally classify them by the failure in process that triggers them:

- Poor Qualification
- Incentives and Restricted Development Environments
- Incomplete Testing
- Unplanned Implementations

## Poor Qualification

- Customizations are sensitive to the environment in which they're deployed and
  and the business processes that surround them.
- Improper qualification means not understanding:
  - the specific Sage 300 environment of the customer, including:
    - 3rd party products
    - user workflows (how users use the product)
    - integrations with external systems
    - nature of the user's data

Address with site qualification survey, recorded walkthrough, documented site 
requirements in proposal.

## Incentives and Restricted Development Enviroment

- Rushed development, coupled with a lack of access to standard tools, leads to
  low quality code.
  - the inability to use libraries leads developers to reinvent the
    the wheel, an unnecessary cost and inferior quality
  - the inability to natively reuse code leads to copying and pasting (issue in
    Python in particular)
  - the Extender module formats do not support the use of standard tools for 
    checking code quality, style, or correctness
- The incentive issue
  - incomplete error handling, no incentive to consider edge cases

Address with customization manager, custom dev process and infra that enables 
the use of standard tools, strict adherence to quality best practices, and
automated verification of compliance.

By reusing code across projects, incentives are aligned as the developer 
can build quality code and leverage it in fuure customizations.

## Incomplete Testing

- Testing is a difficult and time consuming exercise
  - requires considering the clients workflow, data, and environment
- The worst person to test a customization is the person who developed it
  - developers are blinded by assumptions and biases that are often taken
    for granted
  - little incentive to test outside the defined workflow, as coding for
    edge cases can be very expensive and customers are unlikely to encounter 
    them
  - adversarial testing required
- Testing is not always carried out on a representative data set

By including a formal testing process based around agreed upon acceptance 
criteria, executed by a Business Analyst instead of the developer, on a 
representative database, helps to remove the risk of repeated revisions and
ensure a smoother implementation.

## Unplanned Implementations

- Failures can occur in implementation due to a lack or preparation and planning.
- Through improved qualification, the implementation can be properly tested and
  documented.
- Business Analyst has an understanding of the Extender environment and can 
  rapidly perform rollbacks in the event of unforeseen issues in production.
- Incomplete upgrades, improper environment preparation, 

Implementations are planned and carried out by the Business Analyst that 
conducts the testing so they have a strong knowledge of the customization and 
environment. Implementations are dry-run and acceptance criteria is performed
in place (where possible) to confirm that all is well.

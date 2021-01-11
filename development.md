---
layout: default
title: Custom Development
---
## Custom Development

Sage 300 is a complex ERP that has evolved over many decades.  As its 
capabilities have expanded, through native development or acquisition, so
too have the complexities of its internals.  Add to the mix a large array
of third party extensions and the resulting environment can provide unique
challenges to the introduction of new customizations.

Through the development of over 50 Extender customizations, we have first hand
experience with many of the [pain points](/approach/pain-points) associated
with customizing Sage 300.  Even the simplest requests can be complicated by
the local configuration, third party integrations, or unexpected limitations in
Sage.

Improper qualification leads to extensive rework or requires the engagement of
other third parties to complete; improper development workflow and tooling to
unhandled errors that surface in production; differences in production and test
data sets to challenges in testing; and complicated deployment topologies or
incomplete upgrades to failed implementations.

All of these pain points can be addressed through improved software development
practices and qualification, testing, and implementation processes.  We have 
developed a process to address these pain points to ensure that projects
are delivered predictably, of high quality, and with excellent value.

Our custom development service builds on this experience by dilligently working
through a process mitigates these risks and helps to deliver a 
[quality result](/approach/quality). 
All custom development engagements go through the following steps:

1. Custom Development Request
1. Site Readiness Assessment
1. Custom Development Proposal
1. Customization Development
1. Testing with Representative Data
1. Production Implementation

[Read more](/approach) about the common pain points in Sage 300
customization development and how we tackle them.

### Custom Development Request

Requesting a new customization is easy: 
<a href="mailto:chris@poplars.dev?Subject=Customization Request">send
us an email</a> with a description of the problem you're trying to solve or the 
workflow that needs automating and we will start working out the details!

### Site Readiness Assessment

The Site Readiness Assessment is performed online.  You'll 
complete a survey that helps us to qualify the customer's Sage 300 environment
for Extender and the customization.

### Custom Development Proposal

The proposal includes a description of the request, a high level technical
design for the solution, and a set of Acceptance Tests that are used to verify 
the successful completion of the project in the customer environment.

Once the scope of the project defined in the proposal has been agreed upon, it
will be used as the basis for a custom quote.

### Customization Development

Once the quote has been accepted and the deposit placed, development work will
begin.  All customizations are developed using 
[extools](/opensource.html#extools) and distributed using 
[Customization Manager](/customizations.html).

### Testing

All development is done using the `SAMINC` database that is distributed with
the current version of Sage 300.  Once the development has been completed with
the sample data, the customization must be tested in an environment
representative of the customer environment before deployment in production.

Testing is conducted by a Business Analyst using a Test database that
contains data representative of the production environment. 

It is the responsibility of the Business Partner or Client to provide remote 
access to a representative test environment.

Testing of the installation procedure, the customization logic, and usability
are then conducted in the representative environment.

### Production Implementation

The implementation of the customization in production is carried out by the
same Business Analyst responsible for the testing. 

Armed with a strong understanding of the customization and the environment, as
well as a clear and practiced deployment procedure that includes provisions for
rollback, the Business Analyst performs the implementation and any required
training.

That's it! If you have any questions regarding our approach or would like to
discuss some custom development work, please 
<a hreaf="mailto:chris@poplars.dev">contact us</a>!

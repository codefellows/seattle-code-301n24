# Facilitators Guide: Final Project Kick-off

## Overview

Authentication and Project Week Kickoff

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Sign up for an account with Auth0
- Be familiar with the Auth0 docs - especially this [page](https://auth0.com/docs/libraries/auth0-react)
- Split students into groups of no more than 5 people. A size of 3-4 is typically able to handle the workload of a 301 final project.
- Review the project proposals in Canvas before class and be prepared to discuss some of the proposed ideas.
- Review the project requirements.

## Lecture Outline

One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Authentication

- **Why** (5 min)
  - We authenticate so that we know the user is who they say they are
  - So that we can persist preferences and access based on credentials
- **What** (10 min)
  - Auth0 is a third party library that uses 0Auth to authenticate a user. It does all the work for us behind the scenes, so the big win here is being able to read through the documentation and put it into place in our code base.
- **How** (30 min)
  - Auth0 uses functional components in their documentation rather than class components. This is a great opportunity to discuss the history of React and why we are starting with class components (it will be used in a lot of legacy code while most new code will be written in functional components). This is also a great opportunity to point out that even though students haven't learned functional components, they can still understand what is happening and thus, use the library. 
  - Using the documentation on this [page](https://auth0.com/docs/libraries/auth0-react), walk students through setting up Auth0.
  - Their lab will be to incorporate Auth0 into an existing code base that includes Browser Router (remember that from lab 05). 
- **Experimentation and Discovery Ideas**
  - The documentation demonstrates how to write the `Profile` component as a class component. You can play around with writing the other components as class components as well. 


### Course Wrap-Up

Congratulate the students on making it this far! 

Remind them ... they are now "Full Stack MERN Developers"!


### Project Preparation

- **Why** (5 min)
  - In order to be successful in project week, organization is essential
  - Teams should be prepared to come in on the first day of project week ready to start coding
  - This removes stress and provides more time to execute
- **What** (10 min)
  - Teams should collectively agree on the basics of the project:
    - How will we work best together?
    - What are we building?
    - How are we planning to build it?
    - What will our workflow be?
- **How** (30 min)
  - Project Teams to complete a series of prep assignments
  - [Team Agreement](https://codefellows.github.io/common_curriculum/projects/Project_Prep_1)
  - [Project Description](https://codefellows.github.io/common_curriculum/projects/Project_Prep_2)
  - [Repo and Tooling](https://codefellows.github.io/common_curriculum/projects/Project_Prep_3)
  - [Wireframes, MVP, Feature Requirements](https://codefellows.github.io/common_curriculum/projects/Project_Prep_4)

## General Comments and Notes

Today wraps up the Can of Books app and starts the transition into project week. Spend time filling in any gaps from this project so students feel prepared to complete any remaining feature tasks before final projects kick off.

There are several assignments prior to the official start of final projects: finishing and submitting the book app, the small db normalization lab, and completing the week 3 survey. There are no resubmits allowed during final projects and any student whose grade is not at 90% after final projects will need special permission to resubmit additional assignments afterwards. Depending on the timeline for enrollment in 401, the timeline for these exceptions are important and the Admissions team should be included in the conversation.

## Resources

### Book App user flow

![Auth0 Documentation](https://auth0.com/docs/libraries/auth0-react)

### REST for Dummies

![REST for Dummies](whiteboard-diagrams/rest-for-dummies.png)

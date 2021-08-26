# Facilitators Guide: React and Component Based Architecture

## Overview

This first lecture of 301 is where the students received a brief introduction the course, educational team, and some basic lab fundamentals.

We will be covering a lot more of School and Class mechanics during the first 2 segments of class, with kickoff, introductions, and expectations taking the lions share of the day.

You will finish by introducing React and the idea of components using `create-react-app`.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Review React Components and Classes
- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.

## Lecture Outline

One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

## Topic 1: Welcome and Kickoff

- **Official Kickoff Presentation**
- **Full Student Introductions**

## Topic 2: All about 301

- The new schedule
  - **WHY?**
    - Mimics the life of a dev with an offshore team
    - Forces you to re-acclimate with the material the next day
    - Time Management
    - Organization
- In-Class schedule and assignments
  - Career Coaching
  - Readings
    - Done in a reading notes repo
  - Warmups
    - Every language!
  - Code Challenges (and shred talks)
    - Node and Test Driven Development
    - Practice!
  - Lab Assignments
    - New workflows (Trello) on the way
- Grading standards
  - Minimum requirements
  - Take care of your TAs by following instructions

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md) to teach the material
  - Since this is the first day of the course, students also need a complete demonstration of the Code Challenge Workflow.
  - Refer to the [Demo Guide](DEMO.md) for guidance

### Prework Review

- **Why**
  - Classes and Arrow Functions were covered in prework. These concepts are crucial to understanding React. Use this time to clear up any questions and get everyone on the same page.
- **What**
  - Classes:
    - A blueprint for creating objects
    - A system where we can define objects in relation to each other using subclasses using the keyword `extends`.
  - Arrow Functions:
    - A different way to write a function
    - Contextual `this` will bubble up to the next non-arrow function
- **How**
  - Review the prework labs with the students. Answer questions as they come up.

### React and Component Based UI

- **Why** (5 min)
  - React is a growing trend in the industry for front end development.
  - Allows us to break things down into individual components that can easily be resued and tested.
  - Can update state without reloading the entire page.
- **What** (10 min)
  - React (and Angular and Vue) are "Component Based Libraries"
  - They take care of binding data (state) to The DOM
    - React uses a Virtual DOM to do so, re-rendering things when data changes
  - As a developer, we get many advantages
    - Separation of Concerns
    - Reusable parts
  - Components
    - Header = `<Header />`, etc
      - Just like calling `Header()` from in a JS function, but easier
  - Modularity
    - How do we bring in dependencies?
    - `import x from 'y'` - equivalent of `require('thing')` on the node side
      - other components (which you can then render)
      - css
    - Where do we put them?
      - Wherever you want them
      - (It's Annoyance Driven Development)
- **How** (30 min)
  - Demonstrate how to use `create react app` to make a React template
  - Explain how the app is rendered by the index and explain the build process.
  - Build out the [demo](../demo)
    - **NOTE:** We are preferring class components at the 301 level.
      - However, `create-react-app` pre-creates a functional `App` component. So we have to deal with functional components at least a little bit.
      - The agreed up approach is to leave `App` component as is and use class components everywhere else.
      - In cases where the `App` component itself requires state then it should be converted to a class component.

## Lab Notes

## What changed from the previous class?

Nothing! Day One.

## What might students struggle with today?

There is a lot more work in 301 than in 201. Students will struggle with time management - especially in getting their code challenges completed.

This is also the first time they have used tests and might struggle to get their code to pass the tests.

## Past bugs, issues or surprises

## General Comments and Notes

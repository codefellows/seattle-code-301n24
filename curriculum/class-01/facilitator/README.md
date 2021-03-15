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

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Welcome and Kickoff

- **Official Kickoff Presentation** (30 min)
- **Full Student Introductions** (30 min)

### All about 301

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
  
### Classes

- **Why** (5 min)
  - Classes are the building blocks for React
  - They are part of ES6 and allow for Object Oriented Programming
- **What** (10 min)
  - A blueprint for creating objects
  - A system where we can define objects in realtion to each other using subclasses using the keyword `extends`.
- **How** (10 min)
  - [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  - Prepair a short demo on classes or use the one provided. Be sure to discuss class structure, subclasses and inheritance.

### Introduction to React and Components

## Topic 3: React and Component Based UI

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
    - Be sure to spend some time going through each thing that `create react app` gives you and discuss the components you want to keep and the ones that we are not going to use
  - Explain how the app is rendered by the index and explain the build process.
  - Show students a final Tic-Tak-Toe board and explain that we will be building basic structure of the board.
    - Bring over the template CSS and explain that we will be using this CSS so that students can just focus on learning React without worrying about CSS.
    - Point out the class structure of React and the way each component extends React.Component.
    - Ask them to describe what components they see (a header, a board, squares). Which ones can be resued?
    - build out the `Header` and import it into the app.js - be sure to focus on how we are exporting it and importing it into the app
    - Next, build out the `Board` component and import it into the app.js
      - The `Board` component needs to render a `Square` component
    - Build out the `Square` component and add nine of them to the `Board` component. The CSS should take care of making them look like squares so you can just focus on how React renders nested components.
- **Experimentation and Discovery Ideas**
  - Discussions can arise about Modularity, Connections between components

### Web Request Response Cycle

- **Why** (2 min)
  - The internet is made up of requests and responses (we will dive more into this later)
- **What** (3 min)
  - We will use the term WRRC.
  - This means Web Request-Response Cycle, which is THE method of communication for web pages, between client and server.
- **How** (10 min)
  - Demonstrate that the browser is making a request, eg: with Bus Mall
  - Sketch out what's happening on a whiteboard
  - Demo this with the network panel
  - Point out the port that is servering the files in the url

## Lab Notes

## What changed from the previous class?

## What might students struggle with today?

There is a lot more work in 301 than in 201. Students will struggle with time management - especially in getting their code challenges completed.

This is also the first time they have used tests and might struggle to get their code to pass the tests.

## Past bugs, issues or surprises...

## General Comments and Notes


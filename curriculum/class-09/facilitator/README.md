# Facilitators Guide: Advanced Topics

## Overview



## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- When practicing the jobs demo, make sure that the API returns results in your area. If it doesn't, take some time to find a new API so the demo will be relevant to your class.
- Practice the [standalone refactoring demo](../demo/refactoring)
- Practice the [job board demo](../demo/jobs)

## Lecture Outline

One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

- **Why** (5 min)
  - Confirm with the students that really understand the 301 fundamentals
- **What** (10 min)
  - Express, node.js
  - Client vs Server
  - API
  - WRRC
- **How** (30 min)
  - Using student prompts ...
    - Build a **simple** dynamic web app with a template
    - Build a **simple** express server with 1 route serving JSON
    - Connect them
  - Students should know 100% of this
  - Stress that this is boilerplate!

### Refactoring

- **Why** (5 min)
  - Code isn't always poetry
  - You want to integrate new technologies/libraries
  - You get better and learn new things
  - You want to integrate more advanced design patterns
- **What** (10 min)
  - Break large functions into smaller chunks
  - Identify areas for reusable functions
  - Identify common patterns
  - Seek opportunities to extend or abstract functionality
- **How** (30 min)
  - Demo: Refactor simple code
  - Demo: Refactor city explorer code from code review
- **Experimentation and Discovery Ideas**
  - Have the students drive the discovery (with gentle leadership)

### Modularization

- **Why** (5 min)
  - To Keep it organized
  - To make it DRY
  - To make it testable
  - To make it reuseable
  - To make it easier to collaborate
- **What** (10 min)
  - Break monolithic code bases into smaller parts
  - Breaking code up into smaller pieces (into modules)
  - A way of segregating reusable  pieces of code that can be shared with other projects
- **How** (45 min)
  - Depending on time, you could show the Jobs Board already built out and then use it as a starting point to modularize. However, if you have time, building it from scratch, would be best for stacked learning.
  - Demo: Jobs Board
- **Experimentation and Discovery Ideas**
  - Once you have demonstrated how to modularize code on the back-end, put students into break out rooms and give them a chance to practice the modularization on their own. When you meet back together, you can go over different ideas and clear up any confusions.

## Lab Notes

- No new functionality today, this lab is all about refactoring and modularization.
- Students should be encouraged to start from a stable state

## What changed from the previous class?

- Everything will change today. We're going to move away from the monolithic server.js functions and into much simpler code, possibly into modules.
- Code structure
  - Refactored Methods
  - Modular functionality

## What might students struggle with today?

- The concept of modules will be tough at first. KISS is the rule of the day (Keep It Super Simple).
  - No need to dive deep into the mechanics, just get the syntax right.
- Understanding the module pattern
- Making sense of what belongs where

## Past bugs, issues or surprises...

## General Comments and Notes

Students will follow the same pattern from lab 8 to retrieve data from the Movies API. As a stretch goal, they should be able to quickly implement the Yelp API, using the same techniques.

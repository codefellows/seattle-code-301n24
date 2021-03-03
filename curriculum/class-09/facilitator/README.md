# Facilitators Guide: Advanced Topics

## Overview

Today will likely be a catch-up day as students continue to persist their Location results in their databases and get their final API connections completed. You can expect most students to have their database functioning locally and storing records, but they may not have completed the logic to conditionally retrieve the database results or request the data from the API, if it has not yet been stored in the database.

**Our primary focus today is going to be in exploring some advanced topics, including Pagination to make the front-end more usable and Refactoring our server, which is now quite large, into something much more readable and maintainable.**

> This can and should largely be a workshop / mob programming style of day, where code review essentially takes 2+ hours, allowing you to move between various ways to make the application more readable.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Students will be working solo for this lab
- Practice the [standalone refactoring demo](../demo/refactoring)
- Practice the [city explorer pagination demo](../demo/pagination)

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

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
  - HTML, CSS, JS
  - jQuery/Mustache
  - Express
- **How** (30 min)
  - Using student prompts ...
    - Build a **simple** dynamic web app with a template
    - Build a **simple** express server with 1 route serving JSON
    - Connect them with `$.ajax()`
  - Students should know 100% of this
  - Stress that this is boilerplate!

### Pagination

- **Why** (5 min)
  - Most APIs don't provide all the data they have
  - Rather, you'll get to all of it in chunks of, for example 10 records at a time
  - How can the user get to the data they don't see on the initial rendering, when they are ready for it?
- **What** (10 min)
  - A "get more" button is a great place to start
  - We already went to the server with `$.ajax()` to get the data to render
  - We can go back again for more to augment our display
    - We are allowing WRRC "on demand". User action triggers another request-response. 
    - This can be as simple as "get more" and append to the list, making it infinitely scrolling
    - Alternatively, add links for "Next" and "Previous" to let the user fetch a different page of results and toggle between them
  - What's the difference?
    - The calls to the server are the same.
    - It comes down to the rendering. Are you replacing what's in the target element with the data you fetch (`.html()`) or are you adding to it (`.append()`)
- **How** (30 min)
  - Demo: Pagination
- **Experimentation and Discovery Ideas**
  - Have the students drive the discovery (with gentle leadership)

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
  - Demo: Refactor city explorer code
- **Experimentation and Discovery Ideas**
  - Have the students drive the discovery (with gentle leadership)

## Lab Notes

- No new functionality today, this lab is all about refactoring
- Students should be encouraged to start from a stable state

## What changed from the previous class?

- Everything will change today. We're going to move away from the monolithic server.js functions and into much simpler code, possibly into modules.
- Code structure
  - Refactored Methods
  - Modular functionality

## What might students struggle with today?

- The concept of modules will be tough at first. KISS is the rule of the day.
  - No need to dive deep into the mechanics, just get the syntax right.
- Understanding the module pattern
- Making sense of what belongs where

## Past bugs, issues or surprises...

## General Comments and Notes

Students will follow the same pattern from lab 8 to retrieve data from the Movies API and the Yelp API. As a stretch goal, they should be able to quickly implement the National Parks Service API, using the same techniques.

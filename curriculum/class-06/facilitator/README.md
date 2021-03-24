# Facilitators Guide: APIs and Asynchronous Code

## Overview

Welcome to [City Explorer](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/)

Today we will take a step into the back end, beginning to write a proper `server.js` file to serve API data to the City Explorer client application. In this lecture, you'll need to walk students through all facets of this: Node, NPM, Deployments, Working with a front end and finally tying it all together as part of their growing understanding of the WRRC

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## City Explorer Reference Links

- [Front End](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/)
- [Back End](http://city-explorer-backend.herokuapp.com)


## Preparation

**Plan for a longer than normal lecture session. This is the start of a new block, so there's no code review, and we have lots of very new ground to cover.**

- Review the code base for the [static client](../../../city-explorer-app) and re-familiarize yourself with how it expects to be fed data. That is the task for the week as you build the server (feeding it data).
- Be prepared to review the client code with students for approximately 15 minutes during lecture. Be prepared to discuss where this fits within the WRRC
- Practice [the demo](../demo), which is a basic express server build. Not a lot of complexity for you, but lots of new concepts for the students, so prepare your talking points to get into during the build.
- Remind students that they will work with the same partner for labs 2 and 3.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Monday Career Review 

- Get a show of hands to see how many students reached out to PPH speaker
- Lead a discussion on networking and meet-ups

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

Students deployed to Heroku, so review the PROCESS of that deployment with them. Don't dig in to the server code, since that will be a topic today anyway. 

Make sure everyone can distinguish the roles of client and server, and how the dialog works across the internet. 

Conclude Code Review time with an preview of what work will be done on the server side this week. 

This is the first day that the labs will be executed through Trello and not standard Lab requirements. The lab docs are an execution guide, not a feature set. Use a bit of Code Review time to talk through this in class.

- [City Explorer Trello Board](https://trello.com/b/ZmD87LCC)
  - Each lab is a different color
  - Each task is well labeled
  - Each feature is well described
  - Each task is well documented
- Students will FORK the board to track their progress
- Students will submit a proper submission to canvas

During your lectures, refer to the board to see the data contract/requirements for each API!

### The WRRC

- **Why** (5 min)

- **What** (10 min)

- **How** (30 min)

- **Experimentation and Discovery Ideas**


### Node.js, NPM, Servers

- **Why** (5 min)

- **What** (10 min)

- **How** (30-40 min)

- **Experimentation and Discovery Ideas**


## Lab Notes


## What changed from the previous class?



## What might students struggle with today?

- The .env file
  - Spend time talking about:
    - the exact syntax of declaring a variable
    - where the .env lives
    - what it is and what happens to the variables when the code goes into production

## Past bugs, issues or surprises...

- Students really struglle with their .env file. Common errors:
  - MAP_KEY=907823
  - REACT_APP_map_key=0-09230
  - REACT_APP_MAP_KEY = 029u0i2402
  - REACT_APP_MAP_KEY = "0290u02954u0"

## General Comments and Notes

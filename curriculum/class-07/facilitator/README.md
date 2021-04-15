# Express Servers

## Overview

Today we are going to introduce custom express servers. This is a mind blowing day for students and will require a lot of whiteboard drawings to demonstrate the client server relationship.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

[Practice the demo](../demo)

## Lecture Outline

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

### Code Review / Rebuild / Review

- **Why** (5 min)
  - Lab 06 was big in concept, many interwoven topics
  - WRRC drawings are great to cement why we are doing thing and where in that process we are
- **What** (10 min)
  - The WRRC should be coming more into focus now that we've built some of it out
  - The third party API should feed our front-end data
- **How** (30 min)
  - Review the feature tasks & requirements
  - Rebuild the front-end (matching it to the requirements)
  - Deploy it again, as a review.

### Demo - Custom Express Servers and node.js

- **Why** (5 min)
  - Secure our keys, when HTTP Referrer restrictions aren't an option
  - Set us up to scale our application, without hammering the API
  - Provide our application a single source to fetch all of the data it needs
  - Allow a server to do the hard work of formatting data to feed our front end
  - Servers may have better/faster connections to other servers, making it more efficient than the browser doing this job
- **What** (10 min)
  - Node.js and Express
  - Web/HTTP Server
  - Listens on a Port
  - Receives Requests (GET), "does work", sends back a response.
    - Describe/Draw the request/response process
    - A "postal envelope" serves as a nice visual
- **How** (30-40 min)
  - Interactively demo the building of an Express API Server
  - Discuss the details of the parts of the application
  - 2 Routes:
    - `/`, `/shoppingList`
  - Go deep on why we're doing this
  - Go deep on the request and response objects in Express
    - They carry data and methods
    - They standardize the process
- **Experimentation and Discovery Ideas**

### Deploy Server to Heroku

- **Why** (5 min)
  - We want our server to be accessible anytime/anywhere. Not just on our local machine.

- **What** (5 min)
  - Heroku is a cloud platform service where we can deploy our server applications.

- **How** (10 min)
  - Using the demo code, show students how to deploy an application using Heroku. Point out the [cheatsheet](../cheatsheets/heroku.md) as a resource available to them in case they need something to refer back to later.

## Lab Notes

## What changed from the previous class?

In the last class, students were able to get data from a third party API and display it on the front end. Be sure to talk about the drawbacks of relying on a third party API and why we might want to build our own custom server.

## What might students struggle with today?

Today is a mind blowing day for students. Understanding how the Front-End and the Back-End communicate is challenging and the reasons WHY we have a Front-End and a Back-End is also baffling. Spend a lot of time drawing this out and talking about the reasons for having a Back-End.

## Past bugs, issues or surprises...

## General Comments and Notes

Remind students to get API keys for tomorrow's lab. This is part of their reading assignment.

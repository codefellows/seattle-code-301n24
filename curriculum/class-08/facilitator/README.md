# Facilitators Guide: APIs and Promises

## Overview

Today, we venture into the world of APIs. Students will be extending their server and reaching out to 3rd party services to fetch data in real time. This will introduce them to the concept of promises and asynchronous processing on the back-end.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice building and talking through the [the promises demo](../demo/promises.js)
- Make sure you have all the API keys you need for the demos including:
  - Location IQ
  - [Unsplash](https://unsplash.com/developers)

- Familiarize yourself with the API's that your students will be using in their labs. You should have your own local server running, with each API configured according the `.env.sample` file, found in the running code: [API setup details](../../city-explorer-app/back-end/.env.sample){:target="_blank"}

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

- Since you are about half way through 301, consider choosing a student to lead code review. The goal is to get students comfortable speaking about code so the less you talk during code review and the more they talk, the better.

### Promises and Async

- **Why** (5 min)
  - Node/Express takes advantage of javascript's asynchronous coding pattern
  - We don't want to always write "blocking" code
  - We don't always need to wait for code to complete
  - Javascript is really good at it -- we can use this idea to multi-task
- **What** (10 min)
  - The Event Loop and Call Stack
    - Detect async patterns and push that to the side for a while
  - Promises and Callbacks
- **How** (30 min)
  - Run a promise demo that showcases how things can be out of order
  - Focus on the syntax and when/how we process data
  - `.then()` and `.catch()` and how they interact with the process
- **Experimentation and Discovery Ideas**

### 3rd Party APIs

- **Why** (5 min)
  - All of the data in the world is literally all over the world
  - REST give us a common language and set of methods to access all of it, with WRRC
  - By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts
- **What** (10 min)
  - Identify the APIs that you need
  - Inspect the "shape" of the data and see if it conforms to your needs
  - Talk about communication via WRRC (now: server-side code is now the client!)
- **How** (30 min)
  - Demo the signup and access key retrieval process
    - Location IQ
    - Unsplash
      - This API does a great job of telling you exactly what it requires for you to use their information. Go through this slowly with the students and talk about how to incorperate it into the application.
  - Integrate into your server application
    - Fetch Data
    - Massage it into shape (constructors)
    - Test with your client application
- **Experimentation and Discovery Ideas**

## Lab Notes

## What changed from the previous class?

- We will be refactoring our data fetchers from simply `require()` on a static .json file into pulling data from a live API with superagent, and having to wade through a promise to do so.
- We will truly be feeding the city explorer front end live data
  - This is an ongoing requirement for the week
- Not a lot of code movement (really a single change to the fetching functions), but a lot of cognitive changes for the students today as they wrestle with Promises both syntactically and conceptually

## What might students struggle with today?

- Promises and Async thought patterns
- Getting registered for their APIs

## Past bugs, issues or surprises...

- Remind students HOW to set their API environment options in Heroku

## General Comments and Notes

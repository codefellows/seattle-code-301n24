# Facilitators Guide: APIs and Asynchronous Code

## Overview

Today is a big day! It's the first day of City Explorer and the introduction to APIs. You will demonstrate the way a React application can get information from a third part API and display that information.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

**Plan for a longer than normal lecture session. This is the start of a new block, so there's no code review, and we have lots of very new ground to cover.**

- Make sure you get a Location IQ key or be prepared to demonstrate how to get this key in front of the class with the students.

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Career Review

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

### The WRRC

- **Why** (5 min)

  - This is the probably the first time that most students will write code that collects information from someone else's code. This concept can be overwhelming when first introduced. Prepare to spend a lot of time answering questions to help students make these connections.

- **What** (10 min)

  - The WRRC is how the internet works. Everyday we will build on our model and expand it as we introduce new concepts, but understanding this first request and response is crucial to understanding the whole.

- **How** (30 min)

  - Use a whiteboard of your choice and draw a WRRC. Label the client and third-party API that we will visit today during our demo/lab. Connect the two with a request and a response.

- **Experimentation and Discovery Ideas**

  - What are some good analogies we can use to describe the WRRC?
    - a server in a diner: client is the customer - chef is the API - server is the request and response (this is a good one because we can use it when it gets more complex later)

### APIs and Asynchronous Code

- **Why** (5 min)
  - Some applications need more information than they have immediate access to

- **What** (10 min)
  - The internet is full of third-party APIs who will happily give us their information as long as we ask for it in the correct way and follow their rules (ie - some require special keys, some require that we provide a link back to them... etc...). How do we know what their rules are? We have to read their documentation and every one of them is different!
  - Collecting information from these APIs is not instantaneous. We have to wait to get to get the data back. This is why we `async` and `await`: to tell JavaScript to wait for the data to come back.

- **How** (30-40 min)
  - Go through the [DEMO](../demo)

- **Experimentation and Discovery Ideas**
  - Start off simple - APIs like pokemon are easy for students to wrap their heads around and they don't require keys then move onto Location IQ.

## Lab Notes

This is the first day that the labs will be executed through Trello and not standard Lab requirements. The lab docs are an execution guide, not a feature set. Make sure you talk through the Trello Board process before the end of lecture.

- [City Explorer Trello Board](https://trello.com/b/ZmD87LCC)
  - Each lab is a different color
  - Each task is well labeled
  - Each feature is well described
  - Each task is well documented
- Students will FORK the board to track their progress
- Students will submit a proper submission to canvas

During your lectures, refer to the board to see the data contract/requirements for each API!

## What changed from the previous class?

EVERYTHING! New concepts - new lab - new everything.

## What might students struggle with today?

- The .env file
  - Spend time talking about:
    - the exact syntax of declaring a variable
    - where the .env lives
    - what it is and what happens to the variables when the code goes into production

## Past bugs, issues or surprises...

- Students really struggle with their .env file. Common errors:
  - MAP_KEY=907823
  - REACT_APP_map_key=0-09230
  - REACT_APP_MAP_KEY = 029u0i2402
  - REACT_APP_MAP_KEY = "0290u02954u0"

## General Comments and Notes

- Point out that part of their reading for tomorrow is to get API keys. Make sure they know that they must do this before tomorrow's lecture.

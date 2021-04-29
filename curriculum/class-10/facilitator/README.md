# Facilitators Guide: Persisting Data In Memory

## Overview

Today is a hands-on class to reinforce the concepts of modularization while introducing the idea of in memory persistence.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation
- Review the final solution code for the City Explorer back-end and front-end.
- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.
- Review the solution for the demo[demo](../demo/)
- Get keys for the [demo](https://developer.edamam.com/edamam-docs-recipe-api)

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

- This is a great chance to break students into small groups and have them take turns discussing how they refactored their code and help each other fix broken code.

### In Memory Persistence

- **Why** (5 min)
  - To reduce the number of hits on an API
  - Global Caching
  - Increases the performance of everything (expect for memory)

- **What** 
  - In memory persistence is simply an object that is going to hold the results from our API call so that we don't have to hit the API every time a user asks for the same city. The second time a user asks for a city (or the third etc...), we will simply return the results that we have in our cache rather than make another API call. 

- **How** (60 min)
  - Build out the demo with the students, but start with a detailed drawing of the WRRC. Be sure to include the in memory database in your drawing. Wait until students have a firm grasp of the higher level process before proceeding to the code. 
  - The given demo starter code has some intentional bugs in it, so that students can practice debugging skills during this demo. This will help prepare them for their final exam.
  - Spend some time going over debugging strategies including breakpoints and `debugger`
  - Once the starter code is working, then you can add the in memory database

- **Experimentation and Discovery Ideas**
  - How long might you want to keep data cached?
  - How could you keep track of how long data is cached?
  - What could you do if data is too old?

## Lab Notes

- Today is the final day of the City Explorer Lab. Students will be given starter code located in the class repo. The starter code contains a basic server and weather module with bugs in it. This is designed to allow students practice debugging - a skill they will need as a developer and to complete their final exam. 
- Once they have fixed all the bugs in the starter code, students will be incorporating this starter code with their existing code and using it as a template to create an in-memory cache.

## What changed from the previous class?

- Adding an in-memory database - what that means and why we might use that. What are the drawbacks and advatages.

## What might students struggle with today?

- There is not a lot of code to write, but understanding WHERE to put the code will be challenging

## Past bugs, issues or surprises...

## General Comments and Notes

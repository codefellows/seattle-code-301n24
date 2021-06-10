# Facilitators Guide: Passing Functions as Props

## Overview

Today will introduce a few key concepts, including mapping over data and passing functions as props to a child component in order to alter the state of the parent component. This will lead to students using Bootstrap modals to display the clicked horned beast on the page in their lab.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice [the demo](../demo/passing-functions)
- Practice [the demo](../challenges/DEMO.md) to introduce the topic of today's code challenges.

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

- Students will have attempted their second code challenge following Class 02. Use your code review time to not only review a few of the challenges, but to re-implant the TDD workflow with the class.
  - Every day a new branch
  - Every day a new file
  - TDD
  - Submit a PR for grading

## Mapping over data

- **Why** (5 min)
  - React is an excellent templating framework that allows us to take large datasets and map over them to display them
- **What** (10 min)
  - a built in array method that returns a new array
  - allows you to change the shape of the data
- **How** (30 min)
  - Start with the code from code review and point out how repetitive and tiring entering in all of the information about each horned beast was.
  - Refactor the code, importing the data.json file and use .map() to render each component to the page.
  - This will be their first introduction to accessing properties from an object in an array so spend lots of time going over where each value is coming from in addition to the syntax of using .map() in the JSX.

## Passing Functions as Props

- **Why** (5 min)
  - at times the child component needs to interact with information in the parent component
  - at times the child component needs a way to update state in the parent component
- **What** (10 min)
  - The parent component sends a function into the child component on the props that will allow the child component to interact with information in the parent component by invoking that function.
- **How** (50 min)
  - Demonstrate this concept via the demo: passing-functions
  - Be aware that this concept is really challenging for students to wrap their heads around so spend lots of time following the flow of information from the parent component to the child component and back up to the parent component. Use a lot of whiteboard drawings.
  - This is also a good time to remind them how stacked learning works, and that it is alright if they don't understand this concept completely right now. They will very soon.

## Lab Notes

- This is a big lab. Encourage students to spend time drawing their lab out before they begin. You might even draw it out with them before class is over.

## What changed from the previous class?

- In the last class, students passed information in props. This class, students learned how to pass functions in props.

## What might students struggle with today?

- The concept of passing functions in props is really challenging

## Past bugs, issues or surprises...

## General Comments and Notes

- Code review might be a great time to tie in the WRRC today. The more you can reinforce this concept and slowly build upon it the better.

# Facilitators Guide: The Call Stack

## Overview

The purpose of today's lecture is to discuss the call stack so students think about the order of code execution. Part of code review during class 7 included tracing the path of code execution in the solution code from lab 6.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Review the final solution code for the City Explorer back end.
- Review the Feature Tasks for the lab assignment and remind students to print out their code prior to lab time.
- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.
- Practice the [call stack demo](../demo/call-stack.js)
- Review the [call stack demo UML](../demo/call-stack-uml.png)

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

Another portion of today's lecture is reading error messages. Error messages can be intimidating to students, so walking through the errors together and providing tips will be helpful.

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

> Code Review for today is covered as part of the lecture, where you'll be breaking down the entire City Explorer application to teach the call stack.

### The Call Stack

> We previously introduced the "Event Loop" to students when we talked about promises.

- **Why** (5 min)
  - It's incredibly important for developers to know when and how their code executes
  - Identify and deal with asynchronous paradigms
- **What** (10 min)
  - JS runs code as it encounters it
  - Code runs as soon as it can
  - Async makes this hard
  - Javascript manages this for us in the "Event Loop" using a **Call Stack** and a **Callback Queue**
- **How** (30 min)
  - Take a slightly deeper dive into how JS actually runs the code in a simple app (../demo/call-stack.js)
  - Review the order of operations
  - Using your editor, add a break point at various parts of the code and run your app in "Debug Mode"
    - This gives you the ability to showcase the actual call stack (function calls, anyway, not static lines)
- **Experimentation and Discovery Ideas**
  - Work through an interactive call stack exercise
    - Divide students into groups of 2.
    - As you trace the call stack, students should write the name of the function on a Post-It note and add and remove it from their own version of the call stack in front of them on the table.
    - When a function is removed from the call stack, students should write its return value inside the function that called it, as appropriate.
    - Demo this within a virtual whiteboard (with post-its, or just a text field), so students know how to complete the stack-trace component of lab. 
    Throughout this process, tie the functions to their role in the WRRC and Model View Controller architecture.

## Lab Notes

- In addition to today's core lab requirements, students will be **independently** completing their city explorer back end.
- The lab for this class is very fun and designed to be creative
- Students will use post-its to simulate the actual call stack
- They will also make a giant, colorful WRRC diagram
  - Encourage creativity
  - Colors Help
  - What data goes to and from each request?

## What changed from the previous class?

- Nothing. This is a complete "Recap" of the week

## What might students struggle with today?

- Understanding the difference between client and server
- Identifying which line of code corresponds to each step of the WRRC diagram

## Past bugs, issues or surprises...

## General Comments and Notes

This lab requires some adaptation for a virtual environment. You can still trace the call stack with students as a group and encourage them to write down the functions on Post-It notes at home, adding and removing them from the stack as you move through the code together. Show them how to do it on a whiteboard! 

Create two different call stacks - one for the synchronous code and one for the asynchronous code. Demonstrate how JavaScript will set aside asynchronous code and continue on. You can have students keep track of what function goes where by writing down the line numbers next to the function name. Using a different color to designate a promise is also a good way visually reinforce the concept.

The lab asks students to print their code and work with their partner to draw arrows to demonstrate how each function is being called. For those in a virtual environment, the lab guides students to draw directly on top of their code in a shared whiteboard session. 

Examples of a good WRRC is included here. Do NOT share this example with students but use it as a guide when planning your lesson.

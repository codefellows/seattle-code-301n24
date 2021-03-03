# Facilitators Guide: jQuery Selectors and Events

## Overview

jQuery and MCV!

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice [the demo](../demo/events-delegation) on jQuery Events.
- Practice [the demo](../demo/read-json) on `$.ajax()`
- Review the solution code for lab today and demonstrate how to read a JSON file with AJAX.
  - Be prepared to discuss AJAX -- why, what, and how
- Assign students into pairs. They will work with the same partner for labs 2 and 3.

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

- Following the first lab, students will be in need of answers
- Also important that early in the course we start ingraining them in a daily schedule/format
- Demonstrate the solution code for CSS layouts.
  - Point out the proper use of SMACSS principles
  - Whiteboard out other ways of marking this up with styles

### MVC

- **Why** (5 min)
  - It is a design pattern used in JavaScript applications
  - It will help you build better applications
  - Separation of concerns
- **What** (10 min)
  - We can break apart an application into three parts:
    - Model: this would be like a constructor function or a database
    - View: this would be the part the user views
    - Controller: this is the server, which we will cover later
- **How** (10 min)
  - Draw this out on a whiteboard for the students.
  - This is a great time to incorperate the WRRC.
  - You can mention a broad overview of what a server is but tell the students that we will talk about it later.

### jQuery

- **Why** (5 min)
  - $ = Money
    - jQuery saves us time and effort
    - Simple syntax
    - Common API
  - Takes care of all browser idiosyncrasies
    - Which browser?
    - What Selector works?
    - DOM Objects
- **What** (10 min)
  - 2 Principle ways to interact
    - `$("selector").method()`
    - `$.jQueryMethod()`
  - Dive into how these types of function calls operate.
    - Syntax looks similar to Vanilla
    - Break them down
- **How** (30 min)
  - Demo on jQuery Selectors and Events
  - Demo on jQuery reading a file
- **Experimentation and Discovery Ideas**
  - Refactor between Vanilla and jQuery to get students correlating
  - Prompt them for ideas and build an app with them interactively
  - Optional: Build out the `jquery-diy` (get) mini library with the class to see if they can figure out how jQuery was created.
    - This is fun and very informative, but not a learning objective
    - It's great if you have a class that's above average and wants to dive in deep

## Lab Notes

- This is the first time students will see User Acceptance Tests in the `LAB.md` files. Spend about ten minutes discussing UAT when discussing the lab assignment towards the end of lecture.

## What changed from the previous class?

- Nothing. This is the first day of new content (jQuery)

## What might students struggle with today?

- Populating the filters without duplicates
- Copying the HTML template and filling in each property from the images

## Past bugs, issues or surprises...

## General Comments and Notes

- Spend a few minutes talking about the WRRC as it relates to the gallery of horns

![WRRC for the Horns Gallery](whiteboard-diagrams/wrrc-horns.png)

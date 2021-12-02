# Facilitators Guide: Form Components in React

## Overview

Today deals with one of the biggest headaches in React: forms. Spend some time why we use onChange vs onSubmit and the differences between vanilla JS forms and React forms.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice the [lab demo](../demo) and do a refresh on forms in vanilla JS vs forms in React.
- Practice [the code challenge demo](../challenges/DEMO.md) to introduce the topic of today's code challenges.

## Lecture Outline

One possible way to present this material is documented in the [example lecture](./LECTURE-EXAMPLE.md) notes.

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

- Yesterday's lab was tough. Use today's code review to go over a particular pain point that most of the class struggled with.
- Talk about and draw the WRRC.

## Forms and Modals

- **Why**
  - Forms are one of the best ways for users to interact with an application
  - They allow us to collect all sorts of information from authenticating a user to writing a blog post
- **What**
  - A way to interact with a user and collect information
- **How**
- See the associated [warmup](../demo/forms-warmup) and [demo](../demo/forms-demo).
  - To run these, start with the warmup markdown file. Have students work in small groups to read the HTML and write the JS code.
  - After the students have mostly finished, review the solution together inside of the HTML and JS files.
  - Next, build up a demo of integrating the same exact event handlers into a React application. Show the differences in how we update state to render information.
  - Lastly, incorporate `react-bootstrap` and show how we can use a `Form` and `Form.Control` in the same way we would use a plain HTML `form` and `input`. (If possible, show how using the exact same event listener works for a React Bootstrap form or a plain HTML form.)

## Lab Notes

## What changed from the previous class?

- Today students will be collecting information in a form and passing that inforamtion to the parent who will then pass it to a different child component. 

## What might students struggle with today?

- Students may not remember how event handlers work. Expect a lot of time for review of event handlers, in addition to adding them into our React app.

## Past bugs, issues or surprises...

## General Comments and Notes

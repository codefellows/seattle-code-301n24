# Facilitators Guide: CONITIONAL RENDERING AND BROWSER ROUTER

## Overview

Today's class has a lot of built in flexiblity to do what the class needs. There are two key concepts that need to get covered today: conditional rendering using ternarys in JSX and Browser Router.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice [the demo](../demo/city-explorer-react) to recap the week (React) and introduce the City Explorer problem domain to set them up for the next module.

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

### City Explorer Build

- **Why** (5 min)
  - This simple app is a great opportunity to revisit React and dynamic data to cap off the week.
  - We provide them a more complex version of this same app during the next lesson block. This provides the students some context on that application when they see it again.
- **What** (5 min)
  - City Explorer accepts a city name, draws a map, and then lists out some interesting data about the city, pulled from a remote data source (client + server!)
  - Draw/Demonstrate the actual running City Explorer App
- **How** (30 min)
  - Using a live-coded demo ...
    - Build the React scaffolding of City Explorer, pulling in some sample data and rendering to the page
  - Use conditional logic to wait to display to the results until after the user has entered a city
- **Experimentation and Discovery Ideas**
  - Get some suggestions from the students as how this app can be better
    - Multiple Cities
    - Movies, Nights Out, Trails, etc
    - What else can they think of?

### Browser Router

- **Why** (5 min)
  - Routing (switching between pages) is a common feature of every application and website
  - It is implemented using component composition
    - But don't talk about that just yet...
- **What** (10 min)
  - What is Routing?
    - A link that switches content
    - When clicked, a link will render a component in a spot on the page
    - Can change out a single component within a page
    - Or, it can can switch out a full page of content
- **How** (30 min)
  - Open up the starter-code for lab-05 and have students break down what is happening in the index. 
  - Talk about Browser Router and what it is doing
  - Ask how they might use that in their applications
  - Find the <Link> tags to demonstarte how they are used later in the code to navigate between pages.
- **Experimentation and Discovery Ideas**

## Lab Notes

- Encourage students to 'press the buttons' and follow their curiosity. There is a lot in this lab that we have not covered, but that is likely what they will experience on the job. Talk about strategies for how they can tackle this code base.

## What changed from the previous class?

- Introducing starter code

## What might students struggle with today?

- Breaking down a large code base into small pieces that they can then change and update

## Past bugs, issues or surprises...

## General Comments and Notes


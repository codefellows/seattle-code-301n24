# Facilitators Guide: Deployment Workshop

## Overview

This class focuses on all aspects of website deployment including an initial discussion of clients and servers (how "The Internet" works), deployment processes (FTP, CI) and the core components of a web server (built with node.js + express)

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice [the demo](../demo/city-explorer-lite) to recap the week (jQuery, Mustache) and introduce the City Explorer problem domain to set them up for the next module.
- Practice [the demo](../demo/deployment) for deployments to Heroku

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
  - This simple app is a great opportunity to revisit jQuery and dynamic data to cap off the week.
  - We provide them a more complex version of this same app during the next lesson block. This provides the students some context on that application when they see it again.
- **What** (5 min)
  - City Explorer accepts a city name, draws a map, and then lists out some interesting data about the city, pulled from a remote data source (client + server!)
  - Draw/Demonstrate the actual running City Explorer App
- **How** (30 min)
  - Using a live-coded demo ...
    - Build the HTML and CSS scaffolding of City Explorer, pulling in some sample data and rendering to the page
- **Experimentation and Discovery Ideas**
  - Get some suggestions from the students as how this app can be better
    - Multiple Cities
    - Movies, Nights Out, Trails, etc
    - What else can they think of?
  - Show the [official/deployed city explorer](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/) to confirm their wishes

### Deployments

- **Why** (5 min)
  - Websites don't run from laptops
  - Consumers need to get to actual sites/data
  - Explodes the notion of WRRC by adding a real server
- **What** (10 min)
  - Heroku is one (of many) services that can "host" a server
  - It can connect to GitHub to fetch your source code, install dependencies, and start your service
  - Other hosts (such as godaddy) are setup to host static websites (renting access to a folder)
- **How** (30 min)
  - Using a live-coded demo ...
    - Produce a simple express server with 2 routes (static and dynamic)
    - Deploy to Heroku
  - Sketch out the WRRC to demonstrate what is happening with the server and Heroku.
- **Experimentation and Discovery Ideas**
  - Replace the "hello world" index.html file with the city-explorer-lite app that you previously built.
  - Suggest that students can deploy their portfolios

## Lab Notes

- Students will be executing a deployment as part of this lab.
- Refer them to the step by step instructions found in their README if they get stuck

## What changed from the previous class?

- Everything -- this is a new concept

## What might students struggle with today?

- The express server is a new concept

## Past bugs, issues or surprises...

## General Comments and Notes

For students enrolled in the daytime track, lab 5 will take place on Monday morning of class 6, with the assignments due before lecture.

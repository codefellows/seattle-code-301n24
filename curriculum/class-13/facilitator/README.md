
# Facilitators Guide: Creating and Deleting Resources

## Overview

Today, we dive into the C and D of CRUD: CREATE and DELETE. 

Last class, we covered READ, so it makes sense that the next step would be to CREATE a resource. That will allow us to remove the hard-coded data in the server and let the users dynamically add a resources whenever they want. You will need to cover the request.body as well as `app.use(express.json())`. 

DELETING a resource is next. We will send an index in the params and use that index to locate the resource and delete it. 

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Remind students that they will work with the same partner.
- Practice [the demo](../demo/)

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

### Create and Delete

- **Why** (5 min)
  - Just like users want to be able to READ data, they also want to be able to CREATE new data (ie. leaving a review on a site, making a blog post, adding contacts online).
  - With CREATING and READING data, users want to be able to DELETE data
  - This gets us to the CR_D of a CRUD application
- **What** (10 min)
  - With REST, the WRRC is, in it's essence, an ACTION and a THING: a VERB is happening to a NOUN... Today: new verbs!
  - Identify the resource you want to work with
  - Usually by ID
  - Communicate your intent to the server
    - ID, Action to take, and possibly any changed data
- **How** (60 min)
  - The server wants to use REST verbs (GET/POST/DELETE and tomorrow we will cover PUT)
  - Draw the WRRC using the RESTful verbs
  - DEMO build: Gift Registry
    - This is a huge demo. You might want to begin with some of the demo pre-built to save time so you can focus on just the new concepts of CREATING a resource and DELETING a resource on both the front-end and the back-end. 
- **Experimentation and Discovery Ideas**

## Lab Notes

- This is the last big lab that students will have. They will likely be feeling stressed as they prepare for the upcoming test.

## What changed from the previous class

- The user can now add or delete a single book.

## What might students struggle with today

## Past bugs, issues or surprises

## General Comments and Notes

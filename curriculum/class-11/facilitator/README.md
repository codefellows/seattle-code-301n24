# Facilitators Guide: MongoDB and READ (from CRUD)

## Overview

Today is the first day of the book application, a project that spans over labs 11 through 14. At some point during today's lecture, demonstrate the full solution code and point out the day-to-day features. This will give students an idea of where they are heading with their applications.

Students will work with the same partner for all four labs, so be mindful of which students are partnered together. During final projects, each team typically contains a balance of strong students and weaker students, so the book app is an opportunity to pair two strong students together and see how much they are able to accomplish.

Today we introduce data modeling and persistence with MongoDB and Mongoose. We will be hard-coding data into the database that our front-end will be able to request and display. This adds a new layer to our WRRC and some big concepts as we dive into CRUD and persistence. 

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Review the [demo](../demo) and be ready to answer a lot questions about what MongoDB is, where it lives, how it works, and how it is related to Mongoose.

## Resources

- [mongodb commands](https://docs.mongodb.com/manual/reference/mongo-shell/)
- [mongoose documentation](https://mongoosejs.com/docs/)

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

### CRUD Workflow and the WRRC

- **Why** (5 min)
  - Adds dynamism to a website
  - Users expect personalization and functionality
  - This is the way **everything** in computing works, on some level
- **What** (10 min)
  - CRUD Workflow
  - Review CRUD methodology and REST verbs
  - How does the browser transfer data from the user to the server?
  - WRRC now includes a dynamic response
- **How** (30 min)
  - Interactive Drawing of WRRCs: 
- **Experimentation and Discovery Ideas**

### NoSQL Databases and Mongo

- **Why** (5 min)
  - JSON is the standard - every languages can read and write
  - It can deeply describe a complex object unlike a Relational DB
- **What** (10 min)
  - NoSQL Databases Store data in a "Document", not a "Record"
    - Resembles JSON
    - Fast (Key+Value) storage
  - There are tradeoffs
    - Big (but complete) data objects
    - No Relationships
- **How** (15 min)
  - Lead the students in a differences and pros/cons discussion between SQL and NoSQL
    - Highlighting things like relations, documents, complex models, scale (horizontal vs vertical), etc
  - Mongo is one of many NoSQL systems
  - Open and use the `mongo` CLI and demonstrate some basic commands, navigating a db, collections, records, etc

### ORMs and Mongoose (Code!)

- **Why** (5 min)
  - Databases have differing APIs, making them hard to move between
    - SQL and NoSQL are vastly different
  - Developers prefer a common API or set of commands to work with
    - `.save()`, `.get()`, etc.
- **What** (10 min)
  - ORM = "Object Relational Mapping"
  - Provide for a simple and common API for accessing data
  - Mongoose is an ORM for Mongo that allows you to
    - Create a schema that defines our collection's shape
    - Easily implements CRUD operations
    - Create middleware/lifecycle functions to let us add business logic during CRUD operations
- **How** (40 min)
  - During your demo, be sure to use the Mongoose CLI as well as the Mongo Compass GUI to show the data in the database in real time
    - It's important that students get in touch with their tools
  - This demo is written to build off of the Mongoose docs. So, begin by guiding students how to read though the docs to understand this new tool. Then, use the documentation examples as a starting point to begin building out your demo.
    - Focus on hard-coding data into the database and connecting a front-end route that can READ that data.

## Lab Notes


## What changed from the previous class?

- Books are now stored in a database. The web server is now client to the database server.
- Students will make a call from their front-end to the back-end to collect books that they hard code into their Mongodb.

## What might students struggle with today?

- Understanding where Mongodb lives and how it is used
- Sending both headers AND queries in axios. We are not going over this lecture so make sure you prep the TAs with how to do this and/or show a few groups of students and instruct them to teach others.

## Past bugs, issues or surprises...

## General Comments and Notes



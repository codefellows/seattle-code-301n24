# Facilitators Guide: SQL Databases

## Overview

Lab 8 adds persistence with a SQL database. This will be the first exposure that students have to any type of database. Discuss database modeling and schemas, as well as data types when creating tables.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Practice and level up with the Postgres shell
- Prepare a few images and visuals that will help the students to understand databases and the role that they play.
- Remind students that they will work with the same partner for labs 2 and 3.
- Practice the [basic sql demo](../demo/sql) which is a simple server that does an insert and a select in express
- Review the [today's solution code](../solution) which is their target for lab.
  - We will not be coding this out, but you will be leading them through a "how would you approach this?" discussion based on this target.

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

### SQL and Databases

- **Why** (5 min)
  - We need a place to store a **lot** of data
  - Ideally, it shouldn't be OUR machine
  - We need looking it up (and saving it) to be both easy and fast
  - Sometimes, we store data for ourselves (customer lists, product lists, etc)
  - Sometimes, we want to **cache** data for quicker lookups
- **What** (10 min)
  - Relational Databases (postgres, mySQL, Oracle, etc)
  - Tabular, Indexed storage (sorted rows and columns)
  - SQL - Structured Query Language
    - Uses english sentences to "talk" to the database
- **How** (30 min)
  - Data Modeling
    - CREATE TABLE
  - SQL Query Structure
  - Basic Commands (SELECT, INSERT, UPDATE, DELETE)
- **Experimentation and Discovery Ideas**
  - Run student driven queries at the [SQL Playground](https://main.dcesh4541no84.amplifyapp.com/)

### Using SQL in Apps

- **Why** (5 min)
  - Using SQL Directly is great, but our app needs data too
- **What** (10 min)
  - 3rd Party Libraries (exist for every major database)
  - ORMs exist to make your code the same no matter which DB you choose
- **How** (30 min)
  - `pg` library for Node
    - `connect()` (when you want to make the connection to the db)
    - `.query()` when you need to manage/query data
- **Experimentation and Discovery Ideas**
  - Redraw the WRRC
  - How has this evolved?

## Lab Notes

- Students will be writing a file called `schema.sql` so demonstrate how to write this type of file and execute it from the command line with the following syntax: `psql -d <database-name> -f <filename>`.
  - For example, `psql -d city_explorer -f schema.sql`
- Additionally, students will be tasked with creating a **cache** of data retrieved from the location API, stored in SQL. They will need to not only understand databases and SQL, but also a process by which they can use that to optimize the application.
- Your demo will implement a cache using an in-memory object
  - Students will need to pivot from that and turn it into a SQL storage and query operation instead
  - Lead them to the well but do not give them the water.

## What changed from the previous class?

- We're going to be removing the simple "in-memory" locations cache with a SQL lookup/store
- The entire coding exercise for the students is in the location handler.
- Location (lat/long) results are now being stored in a SQL database. Students will need to create the database and tables locally, as well as provision the free version of Postgres on Heroku.

## What might students struggle with today?

- Applying the cache logic into the route
- There is a lot of new information here.
- SQL and Databases will be a new concept to be sure.
- Using them in the way that we are, to solve the problem that this lab solves will not be immediately evident.  This is a great opportunity to have some "mob programming" with the group to come to the answer. They can do it!

## Past bugs, issues or surprises...

There is a pre-work assignment for student to install Heroku and Postgres onto their laptops. The corresponding assignment in Canvas ("Setup of Your Laptop Dev Environment") has the following instructions:

```When you are done installing both the Heroku CLI and postgres, make sure to verify them again one directly after the other so that both of the output message are on your terminal screen at the same time. Once they are both on your screen, take a screen single screen shot and use that as your submission for your Canvas assignment.```

By this class there all students should have Postgres installed, and any students who need to do an installation on this day should be retroactively held accountable for not completing the pre-work.

## General comments

This is a big topical day

- SQL
- Creating a cache with the data retrieved from the API
- Engineering a solution to be abstracted, DRY, and singular in concerns.

# Facilitators Guide: Database Normalization

## Overview

Today's lecture will include a discussion of database normalization. Some students may have already identified the author field as a place to make their code more DRY. Following the lecture, students will have a chance to practice the topics presented by doing the lab in class.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Set up a separate database to use as a demo for the database normalization in lecture
- Practice [the demo](../demo/) on database migrations.
- Prepair the students' final exam. Every student will get a unique test. You will find instructions for generating these tests [here](../../class-15/facilitator/final-assessment/facilitator.md).

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk**

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

### Database Normalization

- **Why** (5 min)
  - Repeated data between records should be consistent
    - (sports, Sports, SPORTS) are all different
  - We can perform more complicated queries by tying more than one table together
- **What** (10 min)
  - Create a new reference table to carry the repeated items
    - In our case, this is "authors" which has the category name
    - Can you see other use cases?
      - Locations, bookshelves, etc
  - Once we do this, though, there's a problem in that views that relied on the column that had the name of the author might now only have an ID
- **How** (30 min)
  - Thoughtful Migration process
  - This actually very common in large corporations.
  - How do we create this helper table without breaking what's out there now?
  - Interactive Drawing
    - What does our database look like now?
    - How should it look when we're done?
    - What query then gets run to draw the views?
  - Sketch a final WRRC for Book App using the new database.

## Lab Notes

- Lab 14 is a stand-alone assignment where students will make a separate database using the provided `schema.sql` file (see the lab folder).
- Because students will be taking their 401 entrance exam during the lab time following this lecture, the lab will will take place during class time. Break students into pairs or groups and encourge them to work together so they can talk through what each step of the process is doing. They should each turn in an individul lab.
- There is a stretch goal to normalize the database in their book app, but this lab was designed as a separate assignment to prevent students from breaking an otherwise functioning application.

During lab time, students will take the Code 401 entrance exam, which serves as the Code 301 final exam. Encourage students to take time with the exam, as they only have one attempt to take it, unless the Instructor and Admissions team decides to allow an additional attempt. The exam is due by the end of class 14 lab time. Students must complete the exam on their own but can use any resource available, such as their textbooks, Google, Stack Overflow, etc. They can test any code snippets in the console, a code editor, or a website like repl.it. The exam is challenging though, so students should plan to spend several hours and make sure they have a quiet, distraction-free place to work on it.

If a student fails the exam, you may offer them additional time following a one on one meeting with you to address what their challenges were and what they plan to do differently in a retake including trouble shooting their exam-taking process/environemnt. 

The deadline to submit/resubmit ALL assignments, including extended time for the exam, is 11:59 p.m. the night before the day projects start. 

## What changed from the previous class

- Move from a large single table, to multiple connected tables.

## What might students struggle with today

- Understanding what each SQL query is accomplishing, especially the subquery portion.

## Past bugs, issues or surprises

## General Comments and Notes

- Students should continue to work on any remaining features from previous lab assignments.

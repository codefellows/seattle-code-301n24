# Facilitators Guide: Componentization and HTML5 Forms

## Overview

Today's lecture will focus on code modularization and persistence in a SQL database.

We will be adding persistence to the search form, allowing the user to edit the details about books found in the search and save/categorize them in a SQL database.

Additionally, we will be incorporating a "details" view that shows 1 book on a single page, and a new index page that serves a listing of all books in the database.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Remind students that they will work with the same partner all week
- Run and review the solution code for lab 12.
  - Create a database for storing book data: `books-dev`
  - Bootstrap the database: 
    - `psql books-dev -a -f schema.sql` 
  - load seed data:
    - `psql books-dev -a -f seed.sql`
  - Set up your `DATABASE_URL` `.env` variable with a connection string like: `postgres://localhost:5432/books-dev`
- Practice [the demo](../demo/todo-app)
- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.

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

### CRUD Workflow

- **Why** (5 min)
  - Adds dynamism to a website
  - Users expect personalization and functionality
  - This is the way **everything** in computing works, on some level
- **What** (10 min)
  - CRUD Workflow
  - Review CRUD methodology and REST verbs
  - How does the browser transfer data from the user to the server?
  - WRRC now includes a dynamic response, taling with the database, to merged customized into in to the reponse
- **How** (30 min)
- Interactive Drawing of WRRCs: Book App Workflow
  - Get a list
  - Select a Book from the list (edit first)
  - Save the book
  - Retrieve one or all books
- **Experimentation and Discovery Ideas**
  - Allow the students to mob program draw of the features with you.
  - Reminder that this is new functionality, but the tools are those that they already have.

### Modularization

- **Why** (5 min)
  - Having the same functionality in multiple files is hard to manage and maintain
  - Creating small, re-usable features (modules) is scalable
- **What** (10 min)
  - What parts of most websites are the same?
    - Scripts, CSS Files
    - Header and Footer content/images
  - Create common header and footer files
  - When we have a multi-page website, this keeps the look consistent
- **How** (30 min)
  - EJS Partials
    - Using the todo demo built from the previous section
    - Find the areas of commonality
    - Extract those into separate modules/components
      - (header, footer, specifically)
    - Note that there are many ways to achieve this.
- **Experimentation and Discovery Ideas**
  - You can have a master page template that uses a partial for each type of content
  - You can have separate partials for header and footer

## Lab Notes

- Note that there are six feature tasks in today's lab.
- Be clear with students that we are not expecting them to complete every feature task in the time allotted.
- They should turn in what they completed during lab time, and they can continue to work on any incomplete features during the next lab session.
- There are additional features in lab 13 (updating and deleting records), and a lab 14 is a full stretch goal, so they can work on all of the remaining features as they choose.

## What changed from the previous class?

- Books are now stored in a database. The web server is now client to the database server.
- Students will add a new view for displaying the details of a single book, including the description and ISBN. To do so, they will need an anchor tag and an `href` attribute that points to the book id. For example, `<a href="/books/1">`.

## What might students struggle with today?

- Adapting their `index.ejs` file to include the `href` attribute.
- Students always struggle with the paths for the partials
- They will also struggle understanding how relative paths on the server are not the same as the paths used in the URLs (for styles/scripts) with the partials for rendering.
- Students will need to be mindful about the data types for each column of their table. A common error can occur when students try to add a book description that exceeds the size of their column if they choose a data type like `VARCHAR(255)`.
  - This might become a problem in lab 11; however, it might not arise as an issue until lab 14 when the API search functionality is added.



## Past bugs, issues or surprises...

## General Comments and Notes

**Book App Flow**

![Book App flow](whiteboard-diagrams/book-app-flow.png)


# Lecture Notes: Mongo and Read

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
    - Our WRRC is starting to look like a WEB! 
    - Front-end requests information from the back-end/ back-end requests information from the API / back-end gets a response from the API / back-end adds the data to Mongo / back-end sends response to front-end. 
    - Have students help you place the libraries on your drawing: `cors`, `axios`, `superagent`, `mongoose`, `express`
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
  - This demo is written to build off of the Mongoose docs. 
  - Begin by guiding students on how to read though the docs to understand this new tool.
  - Use the documentation examples as a starting point to begin building your demo.
    - Once you have hard-coded some cats into your database, make a front-end and connect it to your back-end.
    - Do a GET request so you can READ what is in your database and render it.

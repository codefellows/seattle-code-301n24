# Lecture Guide: SQL Databases

There's a lot of information here (and much interactivity) ... for reference, here's a video from a previous class that follows the outline below.

[Lecture Video From a Previous Class on SQL](https://www.youtube.com/watch?v=qMni-vWzrw0&list=PLVngfM2hsbi-BZ_lT3jN64rWU0TKsa-TS&index=17&t=20m50s)

## SQL

- Structured Query Language
  - It's Structured (it has rules)
  - It's a Language
  - It's purpose is to Query databases
- Now, this is your 4th Language (HTML, CSS, JS, and now SQL)
- SQL itself is not a database
  - It's a way to work with a Relational DB
    - We will use Postgres
    - There are many others
- What is a database?
  - Simply, it's a place to store data.
  - Think of our arrays of data, stuck in a file
- Good Visual: Excel Spreadsheet
  - Rows and Columns
    - Rows are referred to as  "Records" in an actual database
  - Model Data (Shaping) -- what properties/entities does a thing have
  - Have the students assist you in modeling something in Excel
    - Like a person, or a car, or whatever they choose
    - Let them give you the column headings
    - Inform them that you get an "id" column automatically, so start with that.
  - Then, have the students fill in 4 or 5 rows of sample data

    | id | year | make   | model   | trans  | cylinders |
    |----|------|--------|---------|--------|-----------|
    | 1  | 2018 | mazda  | 3       | auto   | 4         |
    | 2  | 1976 | toyota | celica  | manual | 3         |
    | 3  | 2013 | gmc    | terrain | auto   | 6         |
    | 4  | 2014 | ford   | focus   | auto   | 4         |
    | 5  | 2008 | ford   | f-150   | auto   | 8         |
  - How many ways can you ask that data for information?
    - Every vehicle made before 2000
    - Every 4 cylinder vehicle
    - All fords
    - etc.
  - These are "Queries" and are written in a structured ("S" in SQL) manner as a statement.
  - The SQL "Language" gives you the statements and clauses that are available to you.
    - What do you want to do?
      - SELECT, INSERT, UPDATE, DELETE
    - Which columns are at play
      - year, make, model ... even all of them (*)
    - What table are you working with?
      - `FROM cars`
    - How should we filter it?
      - `WHERE x=y`
    - `SELECT year, make, model FROM cars WHERE make = 'ford'`
  - Still in the spreadsheet, write out some queries and have the students predict what might come back.
    - `SELECT year, make, model FROM cars WHERE make = 'ford'`
    - `SELECT * FROM cars WHERE year < 2010`
    - `SELECT make, trans FROM cars WHERE cylinders = 8`
    - Alter selecting *, rows, and various where clauses
  - Demonstrate some INSERTS and UPDATES as well.
    - Manually update the data you've typed in.

## Why??

- Simply put, scale.
- Relational databases are remarkably fast at finding similar data and with indexing, you can look up a record amongst billions in milliseconds.
- In order for this to happen, SQL Databases rely on structure (a solid model)
  - Data Types
    - INT
    - CHAR
    - VARCHAR
    - DATE
    - BLOB
    - BOOL
- When you give reliable shape to data, the system can store it in the most efficient way for it to find it quickly.
- Indexing takes that a step further.
  - Think of indexing as putting things in alphabetical order, and also noting pointers to where things change.

## Postgres

- The database that we're going to use is called Postgres
- As part of pre-work, you've installed it locally
  - It's still a server, it just runs on your laptop
- You can also run this remotely
  - AWS
  - Heroku Postgres
  - ElephantSQL
- In all cases, your Postgres server has an "Address" where we can connect.
- We can connect in a number of ways
  - Using our Terminal, with the `psql` client
  - Through a variety of GUI Interfaces
  - Directly through code.
- Switch over to the `postgres` demo, noted in [DEMO.md](DEMO.md)

## SQL Server Demo

- Run the `postgres in node` demo, noted in [DEMO.md](DEMO.md)

## Back to City Explorer

So ... what does all of this mean to our application?

We're going to want to use SQL to our advantage. Specifically, we want to address the issue with the way we're cache-ing the Locations data.

*Instructor: Re-Draw the application architecture and lay out the plan*

- Currently, it's just in memory, which means we lose the cache every time our server re-starts. That kind of defeats the purpose
- For today's lab, the primary outcome is going to be using SQL to store the locations.
  - We need to store them to the database as we retrieve them from the API
  - We need to find a good time to read them in from the database
  - We need to keep our memory cache and the database in sync
- Strategize with the class.
- Leave the with the simple SQL demo server
  - Encourage them to use it as inspiration, as well as this revisit of the application, but to solve the problem on their own.

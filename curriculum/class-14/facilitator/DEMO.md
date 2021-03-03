# Demos: Database Normalization

Refer to the [Student Facing Lab](../lab/README.md) for the complete step-by-step operation of today's demo

## Normalize the Database

 Lecture should begin with a discussion of the current database schema and the redundancy of having duplicate values in the author field. Draw a diagram on the iPad or whiteboard to show the current schema and the intended schema after normalization is complete (see the `schema.sql` file in the solution code). Spend ample time discussing the steps that will need to be taken in order to achieve the final database configuration, asking students to tell you what needs to change. Once you and the class have identified all of the necessary steps, walk through the normalization queries one at a time. This is a new concept to students so talk about the SQL queries and address questions before demonstrating the outcome.

You will be guiding the students through that process exactly, with a full explanation of each query.

- What task does it accomplish?
- Why is it important?
- How does this work?
- What is the impact to the database/code/user when complete?

When working through the normalization process, copy and paste the queries one at a time into your SQL shell, then use the confirmation steps (see the `LAB.md` file) to show the effect of each query on the tables.

## Adjust the application

The book-app application now needs to be adjusted to account for the new `author` table and `id` column, using the foreign key.

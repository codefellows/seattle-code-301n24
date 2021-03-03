# Lecture Notes: Componentization and HTML5 Forms

Note that there are six feature tasks in today's `LAB.md`. Be clear with students that we are not expecting them to complete every feature task in the time allotted. They should turn in what they completed during lab time, and they can continue to work on any incomplete features during the next lab session. There are additional features in lab 13 (updating and deleting records), so they can work on all of the remaining features as they choose.

Also of note: lab 14 is a stand-alone database normalization assignment in a separate database with a stretch goal to implement normalization in the book app. This stand-alone assignment is due at 11:59 p.m. the evening before final projects begin and should take students approximately 30 minutes to complete. Therefore, the remaining features for labs 12 and 13 can be completed during the lab 14 time on campus.

Today's lecture will focus on code modularization and persistence in a SQL database.

When working on the previous lab, students wrote a empty `index.ejs` as a placeholder to store the results from their database. Lab 12 will ask students to fill that view with seed data from their database.

The search results page will also change in functionality. A user can select a book from the results and modify the details using a hidden form. When the user adds the book to the collection, the corresponding server route will post a new book to the database and redirect the user to a detail view of the book that was added. This detail view is also used from the `index.ejs` file to add the ability to select a single book, retrieve its details from the database, and render it in a new view (see the solution in `pages/books/detail.ejs`).

Use this additional view as a talking point about making the code more DRY. Each view will have repeated content, which they may have already noticed when comparing the `index.ejs` and `error.ejs` files. Introduce the concept of partials and demonstrate how to abstract a repeated portion of HTML into a partial file, then require it in where needed. For example, they can move their head, header, and footer elements into partial files.

This is also a good opportunity to discuss DRY code and readability in their `server.js` files. Demonstrate how to abstract the route into a path and named callback, and then define the callback below. Also, remove repetition by creating an error handler callback which all routes can share. Each group may be at different points in their lab assignment, so use your discretion when deciding between building out the error handler or brainstorming how they will build it out during lab.


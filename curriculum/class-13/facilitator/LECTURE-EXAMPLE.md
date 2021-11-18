# Lecture Guide: Update a Resource

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

### CRUD - UPDATE

- **Why** (5 min)
  - Everything changes and applications need to be able to adjust their data to accommodate those changes. 
  - `UPDATE` is an essiential part of a CRUD application

- **What** (10 min)
  - The ability for a user to update a record in an application. In Our Best Books Application, we will be writing an update route to update the information on the books. 

- **How** (30 min)
  - Draw out the WRRC. By now, this should be very familiar to the students. Introduce the concept of a PUT route to the diagram.
  - Go through the [DEMO](../demo)
  - Pose the question to the students: if you want to update a resource, what information do you need? 
    - you will need a way of identifying the resource (this can be the id of the resource or an index - although it is worth discussing the issues that can arrise from using an index) and the updated information. 
  - If you can time, you can rebuild the demo from scratch, but if not, you can use yesterday's demo and add to it. 
    - Make an `update` button next to the `delete` button
    - When the user clicks it, a form should appear with that resources' information already filled in. 
    - The user edits the info as they see fit and the updated info gets send to the server along with a way of identifying which resource is being updated.
  - On the server side, we need to make a PUT route to accept the updated information. 
    - We will get information from the params as well as the body.
    - Update the information in the database and then as a class decide if you want to send the updated resource or the entire array of resources back to the user.

## Test Review

- Save some time at the end of lecture to go over the test. There will also be time to review prior to the exam on day 14.
- What to expect: 
  - Students will be given starter code that will have minor bugs in it. They will need to fix the bugs and then add some features onto the code. There will be tests that they can run so they will know if they have completed the tasks correctly. They will need to deploy both their front-end and back-end.
- How long do they have?
  - 4 hours
- What resources can they use?
  - Anything expect other people
- What if they fail? 
  - There will be an option for one retake
  
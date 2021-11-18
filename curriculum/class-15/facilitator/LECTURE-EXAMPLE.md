# Lecture Notes: Authentication with Auth0 and Project Week Kickoff

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
- Today should be a smaller day for code review if you do any at all. 

### Authentication

- **Why** (5 min)
  - We authenticate so that we know the user is who they say they are
  - So that we can persist preferences and access based on credentials
- **What** (10 min)
  - Auth0 is a third party library that uses 0Auth to authenticate a user. It does all the work for us behind the scenes, so the big win here is being able to read through the documentation and put it into place in our code base.
- **How** (30 min)
  - Auth0 uses functional components in their documentation rather than class components. This is a great opportunity to discuss the history of React and why we are starting with class components (it will be used in a lot of legacy code while most new code will be written in functional components). This is also a great opportunity to point out that even though students haven't learned functional components, they can still understand what is happening and thus, use the library. 
  - Using the documentation on this [page](https://auth0.com/docs/libraries/auth0-react), walk students through setting up Auth0.
    - Using the documentation as your guide, build an application that will log a user in and log them out. 
    - Be sure to focus on how you read documentation. At this point, students should be getting better at reading documentation, but it is still new to them. Knowing how you read and understand documentation is super helpful.
    - Play around with the starter code that Auth0 provides. They give you starter code in funcitonal components which students haven't seen before, but point out that by playing around with them and reading through them, they can understand what they are doing.
  - Their lab will be to incorporate Auth0 into an existing code base that includes Browser Router (remember that from lab 05). 
- **Experimentation and Discovery Ideas**
  - The documentation demonstrates how to write the `Profile` component as a class component. You can play around with writing the other components as class components as well. 

### Announce Project Teams

- Walk through the technical requirements for the final project.
- Review the project prep assignments and clarify any questions.

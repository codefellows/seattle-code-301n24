# Facilitators Guide: Server-side templating with EJS

## Overview

Today is the first day of the book application, a project that spans over labs 11 through 14. At some point during today's lecture, demonstrate the full solution code and point out the day-to-day features. This will give students an idea of where they are heading with their applications.

Students will work with the same partner for all four labs, so be mindful of which students are partnered together. During final projects, each team typically contains a balance of strong students and weaker students, so the book app is an opportunity to pair two strong students together and see how much they are able to accomplish.

At this point, students should feel comfortable working in the front end from module 1. They should also feel comfortable working in the back end with a static front end from module 2. However, the book app will be their first time writing a full-stack application, so look for patterns from module 1 and module 2 which students can be reminded of when they struggle during this module. It may be helpful to discuss the necessary changes to convert City Explorer to a full-stack application.

Server-side rendering is a new topic for students during this module. It will likely take a bit of time for students to adjust to this paradigm. Today's lecture will focus on creating a singular `index.ejs` file and an error view, with modularization into components addressed in the lectures and lab assignments for the remainder of the book app.

In lab 11, students will create two views: a form to search the Google Books API by title or author, and a results page. Build out the search form together as a demo and provide the search form as starter code in the course repository. Discuss the method and action attributes and how they correspond to the routes in the server. In the interest of time, consider building the server during lecture, but building out the form prior to lecture.

Students should feel comfortable working with the Google Books API and Superagent. Note that this API does not require an API key, so the `.env` file only needs to contain a PORT for now. The DATABASE_URL will be added in lab 12.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Remind students that they will work with the same partner this entire week
- Practice each of the 4 demos
  - `forms` - HTML forms and methods
  - `templating` - Basic ejs templating
  - `google-books` - Pulls data from an API (starter code)
  - `regex`
- Review the code and solution code for lab 11, as well as the technical requirements in the `LAB.md`

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

### HTML Forms

- **Why** (5 min)
  - Send data of unknown size to a server for processing
  - "get" requests (?...) are limited to 1024 chars
  - "get" requests are visible in the URL
  - "post" in forms allows us to visually hide parameters
- **What** (10 min)
  - HTML forms use the `action` attribute to target a server and route
  - HTML forms use the `method` attribute to force the use of `get` or `post` as a means of communicating with the server
  - Be very clear: This is WRRC in action, via the form submission 
- **How** (30 min)
  - Build an interactive form demo
  - Compare and contrast GET and POST in the browser console, the server, and in the markup itself
  - Map the names of the inputs to data in the request and query objects
- **Experimentation and Discovery Ideas**

### Server Side Templating with EJS

- **Why** (5 min)
  - SEO: If the server renders the markup and content, Google and other search engines can "see" the words and help users find you.
  - It can be a better user experience on slow connections
  - Users are guaranteed to see words.  If only client side, and JS is turned off, the user will see a blank page.
  - Progressive Enhancement
- **What** (10 min)
  - EJS is a templating language that runs in Express
  - Express has a new method called `render` that accepts an object and a template file
  - The object is merged into the template, similar to Mustache
  - You can write JS code in the template (loops, etc) to have more control
  - During the WRRC, in real-time, on the fly (!!), the server builds a custom response for each and every request. 
- **How** (30 min)
  - Build an interactive demo that uses EJS through express
  - Break down each step of the WRRC
- **Experimentation and Discovery Ideas**
  - Can you filter the output by price/quantity?
  - Can you sort the list in the template?
  - Can you easily change the output style?

### Google Books API

- **Why** (5 min)
  - Fetch remote data from the server to populate our database
  - Why is this ok to save?
    - Normally, we don't save API data
- **What** (10 min)
  - Use superagent to fetch data and send to template
- **How** (30 min)
  - Write a demo that combines forms and ejs to create a full-stack application
    - Accept form input
    - Call an API
    - Render/Format API data as HTML using EJS
- **Experimentation and Discovery Ideas**
  - Could you wire this up to city explorer?

## Lab Notes

- Give students just enough of the pattern in demo. By this point, they should feel comfortable with the process of deploying an application on Heroku and working with third-party APIs.

## What changed from the previous class?

- New topic, starting to build a new app.

## What might students struggle with today?

- The biggest new topic for today is server-side rendering. The syntax is straight-forward and [the EJS docs](http://ejs.co/) are easy to work with.
- Understanding the flow of information and file paths for a full-stack application, rather than an isolated back end. Remind students that we are using Express to serve static files. We are also not using AJAX to trigger routes in the server, but are using forms and `href` elements instead.

## Past bugs, issues or surprises...

## General Comments and Notes

- Make sure to discuss the benefits of server-side rendering, such as avoiding a flash of un-styled content [(FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)
- Save the solution code for code review in the next class, rather than showing the solution during this lecture. Note: do not distribute the book app solution code to students.
- Make sure to add the wireframes folder to the class repository. Include all of the images so students can see where the application is headed. This also removes overhead on the instructor of needing to add wireframes each day.
- Componentization is a topic of the next class, but feel free to incorporate this concept today if it feels appropriate.

## Resources

### Book App user flow

![Book App user flow](whiteboard-diagrams/book-app-user-flow.png)

### Book App user flow 2

![Book App user flow 2](whiteboard-diagrams/book-app-user-flow-2.png)

### City Explorer vs Book App Architecture

![City Explorer vs Book App Architecture](whiteboard-diagrams/city-explorer-vs-books.png)

### EJS

![EJS](whiteboard-diagrams/ejs.png)

### Form submission

![Form submission](whiteboard-diagrams/form-submission.png)

### Protocols

![Protocols](whiteboard-diagrams/protocols.png)

### REST for Dummies

![REST for Dummies](whiteboard-diagrams/rest-for-dummies.png)

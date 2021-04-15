# Lecture Notes: Node, npm, Express

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

### Code Review / Rebuild / Review

- **Why** (5 min)
  - Lab 06 was big in concept, many interwoven topics
  - WRRC drawings are great to cement why we are doing thing and where in that process we are
- **What** (10 min)
  - The WRRC should be coming more into focus now that we've built some of it out
  - The third party API should feed our front-end data
- **How** (30 min)
  - Review the feature tasks & requirements
  - Rebuild (matching it to the requirements)
  - Deploy it again, as a review.

### Demo - Custom Express Servers and node.js

- **Why** (5 min)
  - Secure our keys, when HTTP Referrer restrictions aren't an option
  - Set us up to scale our application, without hammering the API
  - Provide our application a single source to fetch all of the data it needs
  - Allow a server to do the hard work of formatting data to feed our front end
  - Servers may have better/faster connections to other servers, making it more efficient than the browser doing this job
- **What** (10 min)
  - Node.js and Express
  - Web/HTTP Server
  - Listens on a Port
  - Receives Requests (GET), "does work", sends back a response.
    - Describe/Draw the request/response process
    - A "postal envelope" serves as a nice visual
- **How** (30-40 min)
  - Interactively demo the building of an Express API Server
  - Discuss the details of the parts of the application
  - 2 Routes:
    - `/`, `/shoppingList`
  - Go deep on why we're doing this
  - Go deep on the request and response objects in Express
    - They carry data and methods
    - They standardize the process
  - A Client is ...
  - (wait for input from the students)
  - Any entity that has asked for something and is waiting for it
    - "a customer at a fast food restaurant"
    - "the cashier waiting for the cook give them  your hamburger"
    - "code that calls a function and gets an answer back"
    - "a browser that is waiting for html from a web server"
    - "a server that has issued a query to a database"
- A Server is  ...
  - (wait for input from the students)
  - Any entity that is providing something to a client
    - "the cashier at McDonalds" (from your point of view)
    - "the cook at McDonalds" (from the cashier's point of view)
    - "that function that is doing work for you"
    - "the server that's giving .html, .css, .js to the browser"
    - "the database that's giving data to the server"
- These things are not just machines! In every conversation, interaction, and event that happens in the world, there are Clients and Servers.
- Just as in real life interactions, between computers, there's an understood way of communicating.  A Protocol for exchanging data.
- **Experimentation and Discovery Ideas**

## How does The Internet work?

- **Web Request Response Cycle (WRRC)**
  - Essentially, a series of these client-server conversations to fulfill and end goal.
    - Class: "What do you think happens when you type in a search term at google.com"
      - Let them try and posit all of the things at play. Ultimately the exact details don't matter, so long as you highlight that there are hundreds of things that have to happen, all clients and servers.
      - Draw an amazing picture ...
      - Browser to wifi hardware in computer
      - Computer to the wifi router
      - Wifi router to switch
      - Switch to cable
      - Cable to ... (all the things at comcast)
      - DNS server to Google Load Balancer
      - Load Balancer to Google Server
      - Google server to Google DB
      - and hundreds of other steps in between and all the way back.

## Web Clients and Servers

- We will be zooming into 2 parts of this enormity (circle them in the picture)
  - A web application
    - City Explorer Front End
    - Show it running
    - What part of the WRRC Diagram is this again?
  - A web server
    - We will write this starting tomorrow, but for today, we will use an existing web API as our server.
    - Show your running solution code.
    - Demonstrate how the API works
      - Visit the API URLs directly in the browser
      - Open the network tab in the Chrome console from the city explorer app and look at the requests. **this is cool stuff**
      - This should open up some questions, and help to show them how things are actually connecting.
    - What part of the WRRC Diagram is this again?
  - Our focus today will be on how the client connects to the server, with the client driving the requirements
    - Starting next class, we will focus on how to build our own server

## Whiteboard Diagramming

- How are these 2 entities actually connected?
  - The network tab shows you that a request was made to the server that seems to have sent in whatever the user typed
  - There seems to be a subsequent set of requests that looks like it might be using what came back from that first one.
  - This is our API
  - Draw this out with client to server
    - Lines in show the request data
    - Lines back show the response data
  - Once we know this, we can effectively ignore the client.
    - So long as we're obeying that simple set of rules on the server side, we can be assured the app will work.
    - Talk to the students about APIs and Data Contracts

## Deploy Server to Heroku

- **Why** (5 min)
  - We want our server to be accessible anytime/anywhere. Not just on our local machine.

- **What** (5 min)
  - Heroku is a cloud platform service where we can deploy our server applications.

- **How** (10 min)
  - Using the demo code, show students how to deploy an application using Heroku. Point out the [cheatsheet](../cheatsheets/heroku.md) as a resource available to them in case they need something to refer back to later.

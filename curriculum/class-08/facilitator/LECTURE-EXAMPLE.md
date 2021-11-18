# Lecture Notes: APIs and Promises

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

- Since you are about half way through 301, consider choosing a student to lead code review. The goal is to get students comfortable speaking about code so the less you talk during code review and the more they talk, the better.

Today, we will be moving away from pulling in canned data from a file sitting on our machine and instead be fetching LIVE data from a remote service -- an API.

To do this, we'll need to do a bit of refactoring of our server code, specifically, we'll need to bring in superagent to connect to these servers asynchronously, meaning we need to get into promises and async in general.

### 3rd Party APIs

- **Why** (5 min)
  - All of the data in the world is literally all over the world
  - REST give us a common language and set of methods to access all of it, with WRRC
  - By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts
- **What** (10 min)
  - Identify the APIs that you need
  - Inspect the "shape" of the data and see if it conforms to your needs
  - Talk about communication via WRRC (now: server-side code is now the client!)
- **How** (30 min)
  - As we've discussed, not all data is local. To this point, going back into 201, we've had all of our data either in our app.js or we've pulled it in from a `.json` file.  Let's branch out and get something real.
    - Head over to unsplash API
      - This API does a great job of telling you exactly what it requires for you to use their information. Go through this slowly with the students and talk about how to incorperate it into the application.
      - You will need a key and some queries
      - Test these in Postman to take a look at the shape of the data that you get back.
  - Integrate into your server application
  - AXIOS:
    - In order to get the data, we are going to need to bring in a library to help us out. Show them how axios works the same way on front and back-end applications to make an http request.
  - Once everything is all hooked up on the back-end, connect your back-end to your front-end and display the data!

- ReST and APIs

* Those APIs are all the same
  * They follow a very similar set of rules -- REST
  * Working over HTTP (which is stateless), REST is a way to use that protocol to share and even mutate/alter data between services.
  * APIs use REST over HTTP to give developers access to data and ways to modify it.
    * With HTTP, you can GET, POST, PUT, PATCH, DELETE
    * With Data, you can Create, Read, Update, or Delete
    * With REST
      * You Create using POST
      * You Update using PUT or PATCH
      * You Delete using DELETE
      * You Read using GET
  * For now, know the words and the actions.
  * We're going to live in the world of Read (GET) for the time being

- **Experimentation and Discovery Ideas**
  - What other things can we do with this API?

- Bring it all together
  * We're going to need some data from an API to make our application work.
  * We'll use ReST to Read data using the HTTP "GET" method
  * In our server, we need to fetch that data as needed.
  * Because it could take a while, Javascript will do that asynchronously
  * We will need a promise to ask for the data and process it when it's done
  
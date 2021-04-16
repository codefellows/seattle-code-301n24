# Lecture Guide: Creating and Deleting Resources

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

### Create and Delete

- **Why** (5 min)
  - Just like users want to be able to READ data, they also want to be able to CREATE new data (ie. leaving a review on a site, making a blog post, adding contacts online).
  - With CREATING and READING data, users want to be able to DELETE data
  - This gets us to the CR_D of a CRUD application
- **What** (10 min)
  - With REST, the WRRC is, in it's essence, an ACTION and a THING: a VERB is happening to a NOUN... Today: new verbs!
  - Identify the resource you want to work with
  - Usually by ID
  - Communicate your intent to the server
    - ID, Action to take, and possibly any changed data
- **How** (60 min)
  - The server wants to use REST verbs (GET/POST/DELETE and tomorrow we will cover PUT)
  - Draw the WRRC using the RESTful verbs
  - DEMO build: Gift Registry
    - This is a huge demo. You might want to begin with some of the demo pre-built to save time so you can focus on just the new concepts of CREATING a resource and DELETING a resource on both the front-end and the back-end. 
    - So far, we have covered sending data as a query in the url. In order to CREATE and DELETE a resource, we will need to send data in two more ways: in the body and in the params.
      - Draw an envelope on the whiteboard
        - Both the query and the param go on the outside of the envelope since they are sent in the URL and anyone can see them
        - The body is sent inside of the envelope so it is more hidden
      - Write out an example URL with a queries and params. Ask students to identify the differences. 
        - queries come after the question mark and params come before
        - queries are key=value while params are just one word or number
      - Demonstrate how write the route on the server to identify params
      - Practice sending params from the front-end to the back-end
      - Next, lets send some data in the body of the request object. 
        - Build a simple form and try to send the results of that form information from the front-end to the back-end. 
          - The body will be empty because we need a line of code to parse the body. 
          - Spend some time talking about this line of code and what it does: 
          `app.use(express.json()); `
      - It might be helpful to make a chart of the three different ways that we know of to send information (query, params, body), what the syntax is to do that in axios, and what we need to get that information on the back-end. 
        - Helping students to organize their thoughts in this manner is cruical at this stage of learning.
    - Continue with the demo. Hook up the POST route and the DELETE route.
- **Experimentation and Discovery Ideas**

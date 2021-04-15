# Lecture Example: APIs and Asynchronous Code

## Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

## Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

## The WRRC

- **Why** (5 min)

  - This is the probably the first time that most students will write code that collects information from someone else's code. This concept can be overwhelming when first introduced. Prepare to spend a lot of time answering questions to help students make these connections.

- **What** (10 min)

  - The WRRC is how the internet works. Everyday we will build on our model and expand it as we introduce new concepts, but understanding this first request and response is crucial to understanding the whole.

- **How** (30 min)

  - Use a whiteboard of your choice and draw a WRRC. Label the client and third-party API that we will visit today during our demo/lab. Connect the two with a request and a response.

- **Experimentation and Discovery Ideas**

  - What are some good analogies we can use to describe the WRRC?
    - a server in a diner: client is the customer - chef is the API - server is the request and response (this is a good one because we can use it when it gets more complex later)

## APIs and Asynchronous Code

- **Why** (5 min)
  - Some applications need more information than they have immediate access to

- **What** (10 min)
  - The internet is full of third-party APIs who will happily give us their information as long as we ask for it in the correct way and follow their rules (ie - some require special keys, some require that we provide a link back to them... etc...). How do we know what their rules are? We have to read their documentation and every one of them is different!
  - Collecting information from these APIs is not instantaneous. We have to wait to get to get the data back. This is why we `async` and `await`: to tell JavaScript to wait for the data to come back.

- **How** (30-40 min)
  - Begin by going to an API of your choice. [Pokemon](https://pokeapi.co/) is a good one that is easy for students to understand. Show them how we can hit the API and get data back.
  - Take them [Postman](https://www.postman.com/) and encourage them to download the app. Demonstrate how we can hit that same API using Postman to get the same data. 
  - Once you have answered all of their questions, open up Location IQ and read through the docs with the students. Notice that you will need a key. Talk about what a referrer key is and put `http://localhost:3000/` as an approved URL so that your referrer key will work with your localhost. 
    - why do we need to do this?
    - what would happen if Location IQ made their data public to anyone without a key?
    - where should we store this key?
      - the .env file! Students make a lot of mistakes when it comes to the .env file so spend some time here. The syntax is different than JavaScript and this will cause some strange errors in their code. 
  - Be sure to talk about what a query is. Where it is located and how we can construct a url using the key and queries to hit the Location IQ API
    - Practice hitting the API in Postman with different cities
  - Go through the [DEMO](../demo)

- **Experimentation and Discovery Ideas**
  - Start off simple - APIs like pokemon are easy for students to wrap their heads around and they don't require keys then move onto Location IQ.

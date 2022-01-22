# Lecture Notes from Saturday 01/22/2022
All times listed below are for Pacific Standard Time zone.

## Warm Up 9:00-9:15am
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js

const express = ('express');
const app = express();

const cors = ('cors');
app.use('cors');

const axios = ('axios');

const PORT = process.env.PORT;

app.get('/books', getBooks);

async function getBooks(request, response) {
  axios
    .get(url)
    .then(results => {
      response.status(400).send(results.data);
    })
}
```

## Code Review 9:15am-10am
- Who wants to lead code review this morning?
  - Which parts of the lab did you get stuck on?
- What code challenges are we stuck on?

## Lecture & Lab Demo 10:00-11:45am
- CRUD: Create, Read, Update, and Delete are the four basic functions that models should be able to do, at most.
- In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE. These are the fundamental elements of a persistent storage system.
  - Read = GET
  - Create = POST
  - Update = PUT
  - Delete = DELETE
- https://mongoosejs.com/docs/guide.html
- Don't forget to bring in your middleware to parse the JSON data coming from your database!
  - `app.use(express.json());`
  - Your request.body will come back undefined if you forget this step!

## Partner Power Hour 12:15pm
- How Log4j Broke the Internet

## Remo Lab 1:00pm-6:00pm
- Don't forget to take a lunch break!
  - or a nap break!
- Coordinate with you partner(s) on when is the best time to meet in Remo to work on the lab.
- Utilize your partner(s) for the Code Challenges too!
- Don't forget to take frequent breaks!
  - Drink some water!
  - Get some fresh air!
  - Feel the sunshine (or rain) on your face!

### As always, if you have any questions or concerns, please hit me up on Slack.

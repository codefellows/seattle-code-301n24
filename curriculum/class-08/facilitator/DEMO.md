# Demos: SQL Databases

2 Big concepts to be covered today: SQL Databases and Cache Management

We'll be using Postgres to change the Locations cache from an in-memory object into a database.

As we do this, the function that fetches locations is going to be enormous and do too many operations. Let's take this opportunity to refactor it (and weathers along with it) into a more functional pattern.

## Postgres, Schemas, and SQL

In this first demo, which should be done in conjunction with lecture, we'll take a virtual tour of the postgres ecosystem.

- `psql` from the terminal
- `psql database` to connect directly
- `psql -f filename.sql` to run a .sql file directly. Works best with a database specified.
- core shell commands
  - `\l` - shows all databases
  - `\c` - connects to a db
  - `\d` - shows all tables
  - `\q` - Quits
  - Run Queries directly, terminating with a `;`
    - CREATE TABLE
    - INSERT INTO
    - SELECT
    - UPDATE
    - DELETE
    - DROP

## Postgres in Node (`demo/sql`)

Now that we have a grasp on what SQL is, we'll wire it into a simple node application to give the students some familiarity with how the mechanics work (without, again, giving away the secrets)

- Begin with a basic express scaffold and get proof of life.
- Explain as you build. This should be "review", but remember it's only the students' 3rd day of seeing Express servers, so allow for Q&A as you go here.

  ```javascript
  'use strict';

  // Load Environment Variables from the .env file
  require('dotenv').config();

  // Application Dependencies
  const express = require('express');

  // Application Setup
  const PORT = process.env.PORT;
  const app = express();

  // Routes
  app.get('/', (request, response) => {
    response.status(200).send('ok');
  });

  // Error Handler Routes
  app.use('*', notFoundHandler);

  function notFoundHandler(request,response) {
    response.status(404).send('huh?');
  }

  app.listen(PORT, () => {
    console.log('Server up on', PORT);
  });
  ```

- Once built, we need to get connected to Postgres.
  - Bring in the dependency at the top

  ```javascript
  const pg = require('pg');
  ```

- Prepare the connection after you setup express
- Note -- you'll need to add `DATABASE_URL` to .env
  - Good time to recap that file and what a "conn string" is.

  ```javascript
  const client = new pg.Client(process.env.DATABASE_URL);
  client.on('error', err => console.error(err));
  ```

- Finally, do the actual connection.  This can be done immediately after the above lines.  It can also be done as a part of the server start process.
  - Since the server requires a connection to a DB, let's make those dependent operations. No need to start express if there's not a DB.
- Change:

  ```javascript
  app.listen(PORT, () => {
    console.log('Server up on', PORT);
  });
  ```

- To:

  ```javascript
  client.connect()
    .then( () => {
      app.listen(PORT, () => {
        console.log('Server up on', PORT);
      });
    })
  ```

- With the server properly started, we want to add a couple of routes that let us add and query data.
- Add a person to the database
  - NOTE: Normally, adding things is done using POST. We'll get there in the next block. For now, we're just trying to get the idea of adding random data to the DB.

  ```javascript
  app.get('/add', (request, response) => {
    let firstName = request.query.first;
    let lastName = request.query.last;
    let SQL = 'INSERT INTO people (first_name, last_name) VALUES ($1, $2) RETURNING *';
    let safeValues = [firstName, lastName];
    client.query(SQL, safeValues)
      .then( results => {
        response.status(200).json(results);
      })
      .catch( error => {
        console.log('ERROR', error);
        response.status(500).send('Sorry, something went wrong');
      });
  });
  ```

  - Talk through that as you build it, then unpack it afterwards.
  - Notice that we're pulling first and last from the Query String
    - It always bears revisiting how the Query String works
  - `client.query()` takes two params.
    - First, a SQL Statement with params in it ($1, ...) which are 1 based.
    - Second, and array of values (called `safeValues`) that get replaced into those params in order.
    - Why? SECURITY.
    - Talk about SQL injection
    - PG Client will sanitize whatever's in those values to be safe for inserting
    - Talk also now, about POST vs GET and why you don't want to expose data to be saved right in the URL
    - We'll do POST next block...
  - In the `response` line, we're sending all of the results back so that we can see it. Isn't `results.rows[0]` more interesting though?
  - Visit it a few times - <http://localhost:3000/add?first=Lucille&last=Ball>
  - Check the `psql` shell to see your data
- Now that we've added some data, let's pull it out in our app.

  ```javascript
  app.get('/people', (request, response) => {
    let SQL = 'SELECT * FROM people';
    client.query(SQL)
      .then( results => {
        response.status(200).json(results.rows);
      })
      .catch( error => {
        console.log('ERROR', error);
        response.status(500).send('Sorry, something went wrong');
      });
  });
  ```

- This route does a simple select and then sends out all of the data to the browser.
  - Can we do this type of thing and use that data internally? Sure.

## Managing a Cache

This hits on one of the big "Why's" of using SQL.

We're fetching that location data every time, but it's the kind of data that will never change. The longitude and latitude of a city will always be constant. As a matter of efficiency, we should save it as we request it. That way, on subsequent requests, we can avoid that slow call out to the API.

This demo is another rebuild of our parallel City Explorer Website and Server. As always it's highly recommended that you rebuild this demo from scratch. Students cannot see this done enough (repetition works). In fact, as this is the 3rd time with this same client and server, the likelihood of the students being able to fully navigate you through the build is very high.

It's 99% the same code as it was in the previous demo, with a minor (major) set of changes:

Create an in-memory data store (an object) to store location data we've seen before.

```javascript
const locations = {};
```

Prior to doing the slow API process, check to see if we've seen this city before.  If we have, just send that right out to the browser. FAST!

```javascript
  // If we already got data for this city, don't fetch it again
  if (locations[city]) {
    response.send(locations[city]);
  }
```

If not, then we do the API call and also save that result in the object for next time

```javascript
    superagent.get(url)
      .query({ key: key })
      .query({ q: city })
      .query({ format: 'json' })
      .query({ limit: 1 })
      .then(data => {
        const geoData = data.body[0];
        const location = new Location(city, geoData);
        locations[city] = location; // SAVE IT FOR NEXT TIME
        response.send(location);
      })
```

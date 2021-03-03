# Demos: APIs and Promises

3 Big concepts to be covered today: APIs, Promises, and Cache

We'll be using superagent (which is async and uses promises) to fetch remote API data. Some of that (the locations) we will be caching using a simple object to save network traffic.

## Demo 1 - Promises  (`demo/promises.js`)

- A home-grown promise

  ```javascript
  let longTask = (status) => new Promise( (resolve,reject) => {
    // Random time for the setTimeout so that we can simulate long/short tasks randomly
    let timer = Math.floor(Math.random() * 1000);
    setTimeout( () => {
      if( status ) { resolve(`Good (${status} / ${timer})`); }
      else { reject('Bad'); }
    },timer);
  });
  ```

  - A "new" Promise constructor takes a callback with `resolve` and `reject` as params. These are functions that get run on good and bad states
  - Here, you can send anything truthy to trigger the 'resolve' or `false` to trigger the reject.
- But how do we use this?

  ```javascript
  // this will trigger the .then() because we ran it with a truthy value
  longTask('music')
    .then( data => console.log(data) )
    .catch( error => console.error(error) );

   // this will trigger the .catch() because we ran it with false
  longTask()
    .then( data => console.log(data) )
    .catch( error => console.error(error) );
  ```

- The second demo in the promises.js file shows how calling something asynchronous multiple times in a row does not guarantee order.
  - In the promise, the timer is randomized so that every time you run this, the answers come out in a different order.
- Demo 3 shows the subsequent calls to the `longTask` happening in the `.then()` blocks. Why? Now we're guaranteed order, because they depend on each other.
- Finally, we show Promise.all() which lets you put promises into an array  and the collect all of the returned values in the same order, in an array.
  - This is there for cool factor only, not required for lab.
  - Note that students will run into this need during their projects, so it's good to give them a demo of it so that they can recall it later.

## Demo 2 - City Explorer

### Revisit and Review the simple Website demo that uses your server

- The code in this demo will be 100% the same (until we add a 2nd API later)
- Treat this rebuild as code review and another reminder that there *is* a front-end website
- Note: Now that you've taught on Async and Promises...
  - Look at those `$.ajax()` calls
  - The students should now recognize the pattern!

## Demo 2 - Fetching API Data (`demo/server/server.js`)

We're going to move into live data. We'll need to get the users' location from that input, then get the actual Latitude/Longitude from somewhere (Location IQ), and then use THAT to get the weather. Lots to do!

It might not be a bad idea to draw and map this out with the students as a group session before you start coding it out. Students get a lot of watching you execute their ideas and checking them off.

- Get their input from the search form
- Call the server to fetch the Latitude/Longitude
- Send that to the server to get the weather.

## Location

While coding this demo, just test it directly with the browser (not the full app). Simply run <http://localhost:3000/location?data=seattle>. We will connect it at the end.

- First, we're going to need to add the superagent library

  ```javascript
  const superagent = require('superagent');
  ```

- Now, let's refactor the current `getLatLong` method, which right now just requires in a .json file

    ```javascript
    function getLatLong(query) {
      const geoData = require('./data/geo.json');
      const location = new Location(query,geoData);
      return location;
    }
    ```

- Where are we going to get the data?
- <https://locationiq.com/docs#forward-geocoding>
- Go to the API's page and unlock the Geo Coding API
- Copy the key.
- Open/Note the docs page
  - Look for the Sample URL
- Once you have the key, use it with the sample URL to test it out.
- Talk through security. It's called a secret key for a reason
  - The best place for this is NOT your code (never store or hard-code a key)
  - Add it to the .env file. It'll never go to git, so it's safe
    - `GEOCODE_API_KEY`
- Now, let's code out the Location fetch
- New Version ...

    ```javascript
    function getLatLong(request,response) {
      let city = request.query.city;
      let key = process.env.GEOCODE_API_KEY;
      const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;
      superagent.get(url)
        .then( data => {
          const geoData = data.body;
          const location = new Location(request.query.city,geoData);
          response.send(location);
        })
        .catch( error => {
          console.error(error);
          response.status(500).send('Status: 500. So sorry, something went wrong.');
        });
    }
    ```

- There's a ton to unpack there. This is the first use of `superagent`, promises, .`then()`, `.catch()`
- Code this out as slowly as possible, `console.log()` inside the .then and the .catch to check your progress.
- Our primary goal for the day is to hammer in the ideas of REST/APIs and Promises, so spend as much time as you can.

> Close this by going to the City Explorer application, typing in a location and seeing that the map properly changes as you type different cities.

### More APIs

Now that we have the latitude and longitude, we'll want to use that to get more data, from other APIs.

Begin by demonstrating the process for registering for an account at Zomato, which provides restaurant data and using their documentation

Zomato API Docs: <https://developers.zomato.com/documentation#!/common/geocode>

- Register for an account
- Note the key in the email
- Add the key to your .env file
- Visit the docs
- Run some queries to see the output
  - Note that it matches the `restaurant.json` file exactly
  - This means our constructor function should be fine...

> The process of setting this up and coding it is EXACTLY the same as it was for Location IQ. This is a great opportunity for allowing the stacked learning process to take hold. Have the students navigate you through refactoring the Restaurant route from using a `.json` file to using real API data

- How does the front end request this data, though? Go to the City Explorer application and look at the URL that's being referenced when you type in a city. Copy that out and inspect it.
- You can use that copied URL while you're testing the coding of the route and then go back to the full app when you're ready to test the integration

### How easily can we add another column of data to the site?

Lead this discussion and discovery session with the students. It's a great way to recap what they know about how all of this works ... and it sets you up to "very easily" add another API to the website

- What does it take to render the restaurant column?
- As developers
  - Find a new API
  - Register for a key
  - Read the docs
  - Understand the data that comes back
- On the client (website)
  - There's a `<section>` for restaurants in the index.html
  - There's a template for each restaurant in the `<head>` of the index.html
  - The `.then()` in the browser calls `getRestaurants()`
  - The `getRestaurants()` function ...
    - calls a server route
    - renders the data that comes back using Mustache
- On the server
  - We have a new route
  - We have a new route handler
    - Uses superagent to fetch data
    - Uses a constructor to normalize the data
    - Sends the array of data to the client

### Add a new API call and a 2nd column of data

Implement the steps above, by adding an API call for places of interest from The Map Box API

- <https://docs.mapbox.com/api/search/#reverse-geocoding>

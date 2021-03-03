# Demos: Node, npm, Express

This will be our first "real" express server, so the focus of this build will be on express mechanics and how they full the "HTTP Server" role in the WRRC.

The actual work being done by the server is secondary to it's operation (although it will properly feed the front end when complete)

## Demo 1 - Node Apps  (`demo/objects.js`)

- Node is an environment (shell, place) to run javascript outside of the browser.  It can do many things
- Build a simple javascript app which contains an object that you iterate over the keys, and make some simplistic output.
  - (This is actually the "object iteration shred talk" in disguise)
- Run the file with `node objects.js`
  - Witness greatness
- Compare and contrast with what they've done in the browser
  - Console is now the terminal -- it's actual program output
  - There is no browser -- things like `window.` or `document.` won't work
  - Prove this putting DOM functions in the file and seeing errors

## Demo 2 - Express Server  (`demo/server/server.js`)

Now that we know what node is and how it can run code for us, lets do something interesting and build a server.

The biggest difference between that simple application and a server is that the app can just run and be done. Servers have to keep on running and waiting for many people to connect to it and ask for things. **Your computer can't just run an app whenever someone wants something**

- We have to make an app run and never stop
- We have to tell it how to tell the world where to find it

### Build a package.json

Before we can go anywhere, we need to create a package and install the dependencies

- Run `touch server.js` and explain that this will be our starting point for our application. Great name, right?
- Run `npm init` and answer all the questions, explaining as you go.
- Open the resulting `package.json` and go line by line through it.
- What is this file even for?
  - It tells node how to run your app the right way!
  - In fact, we need to tell it right now that we need some help
  - `npm install express dotenv cors`
  - What are those? Dependencies. Libraries that we need to help us write this app. Remember, not all code has to be yours!

### Start up server.js

Begin by bringing in some dependencies.  At this point, give them a sentence about what role they play ... saying things like:

> "We're going to require a library called 'dotenv' which is going to let us set some global variables in a safe way."
> Now, we need express, which is this amazing library that's going to handle all of those complicated tasks with HTTP, the envelope, etc for us"

server.js

```javascript
'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
```

Next, we're to create and start the server just to prove that we can. Again, walking them through some of the basic whats and whys

> "We need to 'open a port', which is literally like unlocking the door of a store and putting up a spotlight.  Here's where we are, and here's you can get in"
> "Once we have decided to do that, we create a new application out of express.  That `app` variable has quite literally all of the magic in it. Methods, variables, all sorts of greatness that we'll be getting into all week."
> "Finally, that app needs to actually start ... let's open up our store and turn on that light. Now, everyone can get to us by visiting a browser and going to port 3000 on the localhost server"

server.js

```javascript
const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );
```

- Start the server by using `nodemon`
- Notice the blinking cursor. That means it's waiting for someone to come in and shop.
- Open your browser and go to <http://localhost:3000>
- You won't get anything, but you can see it trying and giving an error
  - In fact, go to the network tab and watch!

Lets definitely dig into that port ... as you can see, we're hard coding it there. That's not going to work when you deploy this to Heroku (they can't let 100,000 people use the same port!)

So, create a file called `.env` and put this line in it:

`PORT=3000`

What does that do? Magic. The `require('dotenv')` line will actually open up that file and read in that value for you. This lets us set our port here, and lets Heroku (or Amazon) set their port there.

This does require one change:

```javascript
const PORT = 3000;

becomes:

const PORT = process.env.PORT || 3000;
```

Break that line down with the students.

### Building routes

**Lets make come magic** We need to be able to respond to someone's request.

> We'll create what's called a "Route" ... when someone asks for a specific address (like <http://localhost:3000/specialstuff>), we need to map that to something, 1:1

Build both routes and then show in the browser that they work.

<http://localhost:3000/> (notice how the '/' matches the URL and the get?)

```javascript
app.get('/', (request,response) => {
  response.send('Home Page!');
});
```

<http://localhost:3000/special-sauce> (notice how the '/special-sauce' matches the URL and the get?)

```javascript
app.get('/special-sauce', ssHandler);

function ssHandler(request,response) {
  response.send('2 all beef patties, special sauce, lettuce, cheese...')
}
```

**Unpack all of that.**

- `app.get('/route', ...)` - This is an event listener, just like jQuery and Vanilla. "When the app hears the "get" event on "/route" ... it's time to do some work.
- `, (request, response) => {}` - this is a "callback", which is a fancy way of saying "the code that has to run when that route is requested. The code in the `{}` is what ultimately gets executed.
  - Note the `/specialsauce` route has that pulled out into a separate function for readability. Very cool pattern!
- `request` - an express "request" object. It has information about the user (all of that stuff in the network tab under request headers, and even extra data that you might have put inside or outside the request envelope). This has it all.
  - We will use this to inspect what the user asked us for
- `response` - and express "response" object. This has the methods (like `send()` that let us present our data, html, whatever ... back to the browser. We generally use 3 of those methods
  - `.status()` - an http status code (numeric) to tell the browser the state of the request
    <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>us
    <https://httpstatusdogs.com/>m/
  - `.send()` - send text or html to the browser
  - `.json()` - specifically send JSON data to the browser
- Now, go back and code review those 2 routes and be ready for questions

## Handling Errors

Express tries to figure out routes in the order that you created them, and the first match is what goes to the browser. But what if you don't have the answer?<http://localhost:3000/amazing-stuff>ff

server.js

```javascript
app.use('*', (request,response) => {
  response.status(404).send('huh?');
});
```

Here, app.use() helps us out, if you put this after your other routes.  Notice that `'*'` ... that means match anything. So, if none of your routes are called 'amazing-stuff`, this router will automatically run, and throw up a 404 error.  Remember, it's got to be after all of your routes it will be the only thing that works.

Show the students what happens when you make that the first route, and then try and go to a good route.

(This might be a good time for a break...)

## Demo 3 - City Explorer

### Revisit the simple Website demo from the demo for Class 05

- Re-Code or Code-Review the website to reinforce what the website is doing and how the app all ties together.
  - It's going to feel repetitive, but students need to see the front-end website being built separately from the server!
- Points of note as you build this
  - The site starts out using `/fake-data` JSON files to feed the templates
  - Refactor just that -- point those `$.ajax()` calls to your (yet to be written) server routes.
    - As the server gets written, these will start to show data
    - Revisit this as you go
  - Today, it's fake on the server too
  - But this is important, because our company's **back-end** and **front-end** teams are working to and from the same goal -- that JSON data

### Now, revisit the server and fill those routes with live data

Now that we have a fully built server, let's put together a few routes that handle the data for our actual client

- Build out the /location route
  - Reads the query from the request
  - Calls a function to load the location.json file
    - Calls a constructor function on that data
    - Returns that data
  - Sends to the browser
  - Why all of those different functions?
    - Each function should only do one job, and do it consistently
    - This creates a pattern for us to follow as our app grows.

   Start here:

   ```javascript
    app.get('/location', (request,response) => {
      const geoData = require('./data/geo.json');
      const locationData = {
        search_query: request.query.city,
        formatted_query: geoData.results[0].formatted_address,
        latitude: geoData.results[0].geometry.location.lat,
        longitude: geoData.results[0].geometry.location.lng,
      };
      response.status(200).json(locationData);
    });
   ```

  - Visit<http://localhost:3000/location>on and look at the output
  - Let's break some of that down.
    - `request.query.city` -- that's reading the query string
    <http://localhost:3000/location?data=Seattle>
    - Look at the object now. ?data=Seattle is a key value pair
      - Express (that `app` variable) makes us an object that has anything after the ? as a key-value pair for us!
      - Play with this and show the students the network tab, adding more params with the `&`, etc.
    - We chained the response, sending a 200 code and forcing JSON as the response type.

Repeat the process with the /weather query ... kinda

What's different about the weather?

## Tie it all together ...

- go to the web application and lets see what it expects back from us.
- It needs an array of objects, with time and forecast.
- So, when we pull in the weather json file, we need to actually go through it and make it's data into that shape.
- Walk the class through that process and what might be required to make a route that makes that happen.
  - Group Whiteboard

  - Hint ... here's the target (but don't give it to them, it's their lab assignment)

   ```javascript
   function getWeather(query) {
     const weatherData = require('./data/weather.json');
     const weather = [];
     weatherData.data.forEach(day => {
       weather.push(new Weather(query,day));
     });
     return weather;
   }

   function Weather(location, day) {
    this.forecast = day.weather.description;
    this.time = day.datetime;
   }
   ```

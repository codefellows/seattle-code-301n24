# Lecture Notes: APIs and Promises

Today, we will be moving away from pulling in canned data from a file sitting on our machine and instead be fetching LIVE data from a remote service -- an API.

To do this, we'll need to do a bit of refactoring of our server code, specifically, we'll need to bring in superagent to connect to these servers asynchronously, meaning we need to get into promises and async in general.

## How does Javascript process code?

* The first thing we need to agree on is that not everything happens in sequence.
* We have already experienced some measure of "Event Driven" programming (event listeners) where code that you write doesn't actually run until something triggers it (or even, never)
* There are other instances where code doesn't run in the order it appears, or that you think it does.
* Javascript (both Node and in the browser -- they share the "V8" engine) has the ability to recognize code that might take a while to run.
  * It runs this code in a separate process, off to the side
  * When it finishes, the code that was written to handle the result then gets to run.
  * In the meantime, Javascript allows your other code to go on in sequence.
* This system is known as the "Event Loop"
  * The Javascript system runs code that can be run.
  * When it encounters something asynchronous, it starts it off to the side
  * Continues with other code
  * Picks up the async stuff when it gets back.
  * And so on.
* (This is a great time to be drawing a simple picture of this)
  * Don't do a full call stack / callback queue drawing, just the basic loop

## Async using Promises

One way that Javascript handles asynchronous tasks is with "Promises"

* A "promise" is exactly that ... your code promises to do some work and then either say "Ok I did it, here's some data" or "I failed"
  * OK = "Resolve"
    * Any data "resolved" is given to you to process
    * A code block called `.then()` handles a good promise and gets that data
  * "I Failed" = Reject
    * `.catch()` handles the rejections and gets any error as it's param
    * A `.catch()` can "return" a good value and then any subsequent `.then()` blocks can continue to work.
    * In essence, `.catch()` can patch things up if it wants.
  * **promise demo**

## Remote APIs

As we've discussed, not all data is local. To this point, going back into 201, we've had all of our data either in our app.js or we've pulled it in from a `.json` file.  Let's branch out and get something real.

* Head to [WeatherBit](https://www.weatherbit.io/)
* Notice the "API" Link (and click it)
* Create an account and login
* Right away, it'll give you some critical information
  * Secret Key
  * Sample API Link
* Click the link and witness the JSON that you get back. Wow. Real, raw data.
  * Look familiar?
* Now, back to the API page.
  * Pick that URL apart.
  * It has a root part `http://api.weatherbit.io/v2.0/forecast/daily`
  * Following that, is the query string -- key value pairs. Parse them!
  * API key ...
  * lat, lon, lang, etc
* Hit the docs link and explain what's there, how the link is formatted, etc
* WeatherBit is only one of 1,000's of APIs out there
  * Spotify
  * Yelp
  * Trails
  * Star Wars
  * etc.
* They'll all have the same sort of process
  * Login/Create Account
  * Secret Key
  * URLs formatted in special ways
  * Docs to help you out.

## ReST and APIs

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

## Bring it all together

* We're going to need some data from a few APIs to make City Explorer work.
* We'll use ReST to Read data using the HTTP "GET" method
* In our server, we need to fetch that data as needed.
* Because it could take a while, Javascript will do that asynchronously
* We will need a promise to ask for the data and process it when it's done

Luckily, there's a library out there that does all of this for us.

### Superagent

Build the new server demo, refactoring the .json files into API calls

Lean into the asynchronous nature of these calls and the mechanics of `.then()` in real use

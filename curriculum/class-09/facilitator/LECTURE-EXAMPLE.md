# Lecture Guide: Advanced Topics

## Refactoring

> **Code refactoring** is the process of restructuring existing computer code—changing the inner workings without changing its external behavior. Refactoring is intended to improve nonfunctional attributes of the software.

In Other Words ...

* It's getting annoying to scroll this enormous server app
* Our functions are big and doing multiple tasks
* It's really, really unreadable
* Every API we add ... adds to these problems

### Demo 1: Refactoring

Conduct the refactoring demo and discuss some of the strategies

### Demo 2: Modules

Conduct the modules demo and discuss some of the strategies

### BREAK

### Code Review: Locations

The location handler function is doing way too much work. It fetches data, cache's the results, formats data, and sends data. Let's be engineers and make this more "functional"

The location handler function is doing way too much work. It fetches data, formats data, and sends data. Let's be engineers and make this more "functional"

Explore the code below with the students. Identify each task that this function is doing, and suggest (get suggestions) for different functions we could write to perform those tasks.

```javascript
function locationHandler(request,response) {

  const city = request.query.city;
  let key = process.env.GEOCODE_API_KEY

  const url = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

  if ( locations[city] ) {
    response.status(200).json(locations[city]);
  }
  else {
    superagent.get(url)
      .then(data => {

        const location = new Location(city, data.body[0]); // <- Know the shape of your data coming back.

        let SQL = 'INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) RETURNING *';
        let values = [city, location.formatted_query, location.latitude, location.longitude];

        client.query(SQL, values)
          .then( results => {
            const savedLocation = results.rows[0];
            locations[city] = savedLocation;
            response.status(200).json(savedLocation);
          });
      })
      .catch( (error) => {
        console.log('ERROR', error);
        response.status(500).send('So sorry, something went wrong.');
      });
  }
}
```

Once you have a generalized plan of attack, code it out and prove that the application works the same, but is now more readable.

### Code Review: Weather, and more ...

Time permitting, follow a similar exercise, but with Weather. If time is short, whiteboard a possible solution with the students and remind them that this is assigned as part of their lab.

* Pull up the monolithic function
* Identify the pain points
* Architect a plan
  * Might the plan include making modules for each API?
* Don't build it
  * Students will be refactoring all of the non-cached API calls in lab

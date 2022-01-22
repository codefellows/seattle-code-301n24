'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// import our library that we are going to use to interact (make queries and stuff) with our mongo db
const mongoose = require('mongoose');
const Cat = require('./models/catModel');

const app = express();

app.use(express.json()); // new
app.use(cors());

const PORT = process.env.PORT || 3002;

// connecting to the cloud database called cats-database via the connection string in the .env
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// optional method that sends us a message
// more complicated but gives you a confirmation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // start your server and look for the console.log in terminal to confirm connection
  console.log('Mongoose is connected')
});

app.get('/', (request, response) => {
  response.send('Hello from the home route!');
});

// create a cats route that will allow us to look for cats and sends the cats to the client
// give me all the cats
app.get('/cats', handleGetCats);
app.post('/cats', handlePostCats);
app.delete('/cats/:id', handleDeleteCat);

async function handleGetCats(request, response) {
  try {
    // an empty object tells us to find all the cats - no specifications
    // let catsFromDB = await Cat.find({});

    // updated to search for cats with a specific location
    // let catsFromDB = await Cat.find({location: request.query.location});

    //final form
      let queryObj = {};
      if (request.query.location) {
        queryObj = {location: request.query.location}
      }
      let catsFromDB = await Cat.find(queryObj);

    if (catsFromDB) {
      response.status(200).send(catsFromDB);
    } else {
      response.status(404).send('no cats for you!');
    }
  } catch (error) {
    console.error(error);
    response.status(500).send('server error');
  }
}

async function handlePostCats(request, response) {
  // client will send over a new cat that will match the shape of our model
  // expect to add it to our database
  // should come in on the request.body
  console.log(request.body);
  try {
    let newCat = await Cat.create(request.body);
    response.status(201).send(newCat);
  } catch(error) {
    response.status(500).send("sorry, but your cat could not be added");
  }
}

async function handleDeleteCat(request, response) {
  const id = request.params.id
  try {
    let deletedCat = await Cat.findByIdAndDelete(id);
    console.log(deletedCat);
    response.status(202).send('this cat has been deleted!')
  } catch(error) {
    console.log(error);
    response.status(404).send(`unable to delete cat with id ${id}`);
  }
}

app.listen(PORT, () => console.log('Listening on PORT ', PORT));

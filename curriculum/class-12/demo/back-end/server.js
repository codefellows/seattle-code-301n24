'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3001;

const mongoose = require('mongoose');
// making a database called cats
mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

// step 1. set up the schema
const kittySchema = new mongoose.Schema({
  name: String
});

// step 2. create the model
// 'Kitten' is the name of our collection that mongo will refrence
// Cat is the name I am giving my collection
const Cat = mongoose.model('Kitten', kittySchema);

// step 3. add to the collection
// create a new cat
const goose = new Cat({ name: 'Goose' });
console.log(goose.name); // 'Goose'

// step 4. save 
// save the cat to our collection
goose.save((err, banana) => {
  if (err) return console.error(err);
  console.log(`${banana.name} was added to our kitten collection!`);
});

// get all the cats from our collection
// look in the model of Kitten for all the documents
Cat.find((err, kittens) => {
  if (err) return console.error(err);
  console.log(kittens);
});

// populate the database
const malaki = new Cat({ name: 'Makaki' });
const tangerine = new Cat({ name: 'Tangerine' });

malaki.save();
tangerine.save();

app.get('/cats', getAllCats)

// a database is full of collections
// each collection has documents

function getAllCats(request, response) {
  Kitten.find((err, cats) => {
    if(err) return console.error(err);
    response.send(cats);
  })
}



app.listen(PORT, () => console.log(`listening on ${PORT}`));

// terminal commands:
// mongo - enters mongo
// show dbs - shows all collections
// use <db> - switches to the collection you want to be in
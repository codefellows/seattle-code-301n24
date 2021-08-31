const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Cat = require('./models/cat');

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json()); // new

mongoose.connect(process.env.DATABASE_URL);

// new
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});

app.get('/cats', async (request, response) => {

  const filterQuery = {};

  if (request.query.location) {
    filterQuery.location = request.query.location;
  }

  const cats = await Cat.find(filterQuery);

  response.send(cats);
});

// new
app.post('/cats', async (request, response) => {
  const { name, color, hasClaws, location } = request.body;
  const newCat = await Cat.create({ name, color, hasClaws, location });
  response.send(newCat);
});

// new
app.delete('/cats/:id', async (request, response) => {
  const id = request.params.id;
  await Cat.findByIdAndDelete(id);
  response.send('success');
});

app.listen(PORT, () => console.log('Listening on PORT', PORT));



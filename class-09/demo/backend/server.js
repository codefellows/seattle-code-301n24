'use strict';

// On the backend (Node app), we use require() to "pull in" a module
// Every module, somewhere has a line like "module.exports = ...."

// 1st things to import are node modules or 3rd party things (code we didn't write)
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

// Next, we import our own modules (stuff we did write)
const jobsHandler = require('./handlers/jobs.js');

const PORT = process.env.PORT || 3001;

app.use(cors());

// When someone does a get request for /jobs run the getJobs handler function
app.get('/jobs', jobsHandler.getJobs);


app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});

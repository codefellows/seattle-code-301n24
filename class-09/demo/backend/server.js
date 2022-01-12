'use strict';

const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/jobs', getJobs);

function getJobs(request, response) {
  const url = 'https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true';
  axios
    .get(url)
    .then(res => formatJobs(res.data))
    .then(jobs => response.send(jobs))
    .catch(err => {
      console.log(err);
    });
}

class Job {
  constructor(job) {
    console.log(job.offices);
    this.title = job.title;
    this.url = job.absolute_url;
    this.description = job.content;
    this.departments = this.getNames(job.departments);
    this.offices = this.getNames(job.offices);
    this.location = job.location;
  }

  getNames(objects) {
    let names = [];
    for (let i = 0; i < objects.length; i++) {
      names.push(objects[i].name);
    }

    return names;
  }
}

function formatJobs(data) {
  return data.jobs.map(job => new Job(job));
}

app.listen(PORT, () => {
  console.log('Server is listening');
});

'use strict';

const axios = require('axios');
const Job = require('../classes/Job.js');

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

// Helper function, used by this module, but not needed elsewhere
// Therefore, we don't import it!
function formatJobs(data) {
  return data.jobs.map(job => new Job(job));
}

// Effectively, these are the same ... the 2nd one lets you export many things. The first one, only exports the one thing.

// module.exports = getJobs;

module.exports = {
  getJobs: getJobs
};
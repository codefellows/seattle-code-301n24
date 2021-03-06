'use strict';

const superagent = require('superagent');

function getJobs(request, response) {
  console.log('in Jobs')
  const url=`http://api.dataatwork.org/v1/jobs/autocomplete?contains="software"`;
  superagent
    .get(url)
    .then(res => {
      const finalJobArray = res.body.map(job => new Job(job));
      response.status(200).send(finalJobArray);
    })
    .catch(err => {
      console.error(err);
      response.status(500).send(`server error ${err}`);
    })
}

function Job(obj) {
  this.name = obj.suggestion;
}

module.exports = getJobs;

'use strict';

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

// On the node.js side of the house, we use module.exports to export "the thing" from a module
module.exports = Job;
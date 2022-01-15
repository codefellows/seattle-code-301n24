'use strict';

class Picture {
  constructor(image) {
    this.src = image.urls.regular;
    this.alt = image.alt_description;
    this.photographer = image.user.name
  }
}


module.exports = Picture

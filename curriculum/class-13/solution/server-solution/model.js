'use strict';

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, uppercase: true, enum: ['MYSTERY', 'THRILLER', 'SCIFI', 'NON-FICTION', 'FICTION', 'HORROR'] },
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;
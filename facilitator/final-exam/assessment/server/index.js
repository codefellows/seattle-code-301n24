'use strict';

const { default: MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

require('dotenv').config();

const server = require('./src/server.js');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
};

const mongoServer = new MongoMemoryServer();

mongoServer.getUri()
  .then((connString) => mongoose.connect(connString, mongooseOptions) )
  .then( () => server.start(process.env.PORT) );

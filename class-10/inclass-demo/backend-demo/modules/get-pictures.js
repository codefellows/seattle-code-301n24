'use strict';

const axios = require('axios');
const Picture = require('./pictures-class');

const inMemoryDB = {};

// our cache aka inMemoryDB should have / do what?
// inMemoryDB.searchQuery = searchQuery // this is suspect, lets not create a bug
//  time?  data dependant
// inMemoryDB.timestamp  = Date.now();  some large  number - time in ms since a starting point (jan 1, 1970)
// 1000 * 60 * 60 * 24 * 7

const getPictures = async (req, res) => { 
  let searchQuery = req.query.searchQuery;

  // if inMemoryDB HAS a property for the SPECIFC search query AND the timestamp is valid, just use that data

  if(inMemoryDB[searchQuery] && (Date.now() - inMemoryDB[searchQuery].timeStamp) < (1000 * 10)){
    console.log('cache hit, HOORAY!');
    res.send(inMemoryDB[searchQuery].pictures)
  } else {
    let results = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  
    let picArray = results.data.results.map(pic => new Picture(pic))
    
    // if inMemoryDB DOES NOT HAVRE a property for the SPECIFIC query, lets create it AND give it a timestamp
    console.log('cache miss, BOO');
    inMemoryDB[searchQuery] = {
      pictures: picArray,
      timeStamp: Date.now()
    }
    // console.log(inMemoryDB)
    res.send(picArray);

  }

}

module.exports = getPictures

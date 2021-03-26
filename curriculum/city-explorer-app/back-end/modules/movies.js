'use strict';

const superagent = require('superagent');
let cache = require('./cache.js');

module.exports = getMovies;

function getMovies(location) {
  const key = 'movies-' + location;
  const url = 'https://api.themoviedb.org/3/search/movie/';
  const queryParams = {
    api_key:process.env.MOVIE_API_KEY,
    langeuage:'en-US',
    page: 1,
    query: location,
  };

  if (!cache[key]) {
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = superagent.get(url)
    .query(queryParams)
    .then(data => parseMoviesData(data.body));
  }
  return cache[key].data;
}

function parseMoviesData(data) {
  try {
    const movies = data.results.map(movie => {
      return new Movie(movie);
    });
    return Promise.resolve(movies);
  } catch(e) {
    return Promise.reject(e);
  }
}

function Movie(movie) {
  this.tableName = 'movies';
  this.title = movie.title;
  this.overview = movie.overview;
  this.averageVotes = movie.vote_average;
  this.totalVotes = movie.vote_count;
  this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  this.popularity = movie.popularity;
  this.releasedOn = movie.release_date;
  this.createdAt = Date.now();
}

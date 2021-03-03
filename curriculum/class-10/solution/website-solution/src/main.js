
import React from 'react';
import Map from './map.js';
import Weather from './weather';
import axios from 'axios';
import Search from './search';
import Movie from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayResutls: false,
      locationObj: {},
      movies: [],
      weather: []
    }
  }

  handleLocationSearch = async (city) => {
    this.setState({ displayResutls: true });
    console.log('main - search', city);
    
    try {
      const locationURL = `http://localhost:3001/location?city=${city}`;
      const locationResults = await axios.get(locationURL);
      const weatherURL = `http://localhost:3001/weather`;
      const weatherResults = await axios.get(weatherURL, { params: locationResults.data });

      const movieURL = `http://localhost:3001/movies`;
      const movieResults = await axios.get(movieURL, {params: locationResults.data});

      console.log({movieResults});

      this.setState({ locationObj: locationResults.data, weather: weatherResults.data, movies: movieResults.data });

    } catch(err) {
      console.error('ERROR', err);
    }
  }

  render(){
    console.log('main', this.state)
    return(
      <div id="main">
        <Search  
          submitLocation={this.handleLocationSearch}
        />

        {this.state.displayResutls && this.state.locationObj.searchQuery ?
          <>
            <Map 
            location={this.state.locationObj}
            />
            <CardGroup>
              <Weather 
                weather={this.state.weather}
              />
              <Movie 
                movies={this.state.movies}
              />
            </CardGroup>
          </>
        : ''}


      </div>
    )
  }
}

export default Main;

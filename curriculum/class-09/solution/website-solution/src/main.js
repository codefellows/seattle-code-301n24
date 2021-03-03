
import React from 'react';
import Map from './map.js';
import Weather from './weather';
import axios from 'axios';
import Search from './search';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayResutls: false,
      locationObj: {},
      weather: []
    }
  }

  handleLocationSearch = async (city) => {
    this.setState({ displayResutls: true });
    
    try {
      const locationURL = `http://localhost:3001/location?city=${city}`;
      const locationResults = await axios.get(locationURL);
      // console.log({locationResults});
      const weatherURL = `http://localhost:3001/weather`
      const weatherResults = await axios.get(weatherURL, { params: locationResults.data });

      this.setState({ locationObj: locationResults.data, weather: weatherResults.data });

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
          <div>
            <Map 
              location={this.state.locationObj}
            />
            <Weather 
              weather={this.state.weather}
            />
          </div>
        : ''}


      </div>
    )
  }
}

export default Main;

/* eslint-disable no-undef */
import React from 'react';
import Map from './map.js';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayResutls: false,
      locationObj: {},
      searchQuery: '',
      weather: []
    }
  }

  handleLocationSearch = async (e) => {
    e.preventDefault();
    console.log('in handle location search', e.target.search.value);
    this.setState({ displayResutls: true });

    try {
      const locationURL = `http://localhost:3001/location?city=${this.state.searchQuery}`;

      const locationResults = await axios.get(locationURL)
      console.log('location results', locationResults.data)
      this.setState({ locationObj: locationResults.data });

    } catch(err) {
      console.error('ERROR', err);
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render(){
    return(
      <div id="main">
        <form onSubmit={this.handleLocationSearch} id="search-form">
          <label>Search for a location</label>
          <input onChange={this.updateCity} type="text" name="search" id="input-search" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>

        {this.state.displayResutls && this.state.locationObj.searchQuery ? 
          <div>
            <Map 
              location={this.state.locationObj}
            />
          </div>
        : ''}

      </div>
    )
  }
}

export default Main;

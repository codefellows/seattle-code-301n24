import React from 'react';
import CitySearch from './citySearch';
import axios from 'axios';
import LatLon from './latlon';
import Map from './Map';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      latitude: '',
      longitude: '',
      displayMap: false
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  displayLatLon = async () => {
    console.log('display loat lon', this.state.searchQuery)
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url)
    this.setState({ 
      latitude: location.data[0].lat, 
      longitude: location.data[0].lon, 
      displayMap: true });
  }

  render() {
    return(
      <div>
        <CitySearch 
          updateCity={this.updateCity}
          displayLatLon={this.displayLatLon}
          />

        {this.state.displayMap && 
          <>
            <LatLon
              city={this.state.searchQuery}
              lat={this.state.latitude}
              lon={this.state.longitude}
            />

            <Map
              img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.state.latitude},${this.state.longitude}&size=200x200&format=jpg&zoom=8`}
              city={this.state.searchQuery}
            />
          </>
        }

      </div>
    )
  }
}

export default Main;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
  render() {
    console.log('map', this.props)
    return(
      <div id="map">
        <h3>Map of {this.props.location.searchQuery}</h3>
        <Image src={this.props.location.image_url} roundedCircle />
      </div>
    )
  }
}

export default Map;

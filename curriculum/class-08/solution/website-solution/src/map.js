import React from 'react';

class Map extends React.Component {
  render() {
    console.log('map', this.props)
    return(
      <div id="map">
        <h3>Map of {this.props.location.searchQuery}</h3>
        <img src={this.props.location.image_url} alt={this.props.searchQuery} title={this.props.searchQuery} />
      </div>
    )
  }
}

export default Map;

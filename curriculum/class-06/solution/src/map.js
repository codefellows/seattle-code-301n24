import React from 'react';

class Map extends React.Component {
  render() {
    return(
      <img src={this.props.img_url} alt={this.props.city} title={this.props.city} />
    )
  }
}

export default Map;

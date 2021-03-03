import React from 'react';

class Pokemon extends React.Component {
  render() {
    return(
      <span>{this.props.name}</span>
    )
  }
}

export default Pokemon;
import React from 'react';

class Cats extends React.Component {
  render() {
    return(
      this.props.cats.map((cat, idx) => (
        <div key={idx}>
          {cat.name}
        </div>
      ))
    )
  }
}

export default Cats;
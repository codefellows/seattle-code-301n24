import React from 'react';

class Cats extends React.Component {
  render() {
    return (
      <>
        <h2>World of Cats</h2>
        {this.props.cats.length && this.props.cats.map((cat, idx) => (
          <div key={idx}>
            {cat.name}
          </div>
        ))}
      </>
    )
  }
}

export default Cats;
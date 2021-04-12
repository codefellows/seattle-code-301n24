import React from 'react';
import axios from 'axios';

class Gifts extends React.Component {
  deleteGift = async (index) => {
    const newGifts = this.props.gifts.filter((gift, i) => i !== index);

    this.props.removeAGift(newGifts);
    
    await axios.delete(`http://localhost:3001/gift/${index}`, {params: {email: this.props.email}});
  }

  render() {
    return(
      <>
      <h2>My Cats</h2>
      {this.props.gifts.length && this.props.gifts.map((gift, idx) => (
        <div key={idx}>
          {gift.name}
          <button onClick={() => this.deleteGift(idx)}>delete</button>
        </div>
      ))}
      </>
    )
  }
}

export default Gifts;
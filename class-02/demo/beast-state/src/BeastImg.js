import React from 'react';
import Image from 'react-bootstrap/Image';

class BeastImage extends React.Component {

  constructor(props) {
    super(constructor);
    this.state = {
      "status": "Yay"
    }
  }

  handleClick = () => {
    let newStatus = '';
    if (this.state.status === "Nay"){
      newStatus =  "Yay"
    } else {
      newStatus = "Nay"
    };

    this.setState({
      status: newStatus
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {/* Use the rounded, roundedCircle and thumbnail props to customise the image. */}
        {/* Use the fluid to scale image nicely to the parent element. */}
        <Image src={this.props.image_url} alt="some horned beast" rounded fluid />
        <h3>{this.state.status}</h3>
      </div>
    );
  }
}

export default BeastImage;

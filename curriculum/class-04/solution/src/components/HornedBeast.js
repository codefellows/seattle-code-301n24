import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }

  addFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
    this.props.displayAsModal(this.props.beast);
  }

  render() {
    return (
      <Card
        style={{ width: '18rem' }}
        bg="dark"
        text="light"
        onClick={this.addFavorite}
      >
        <Card.Img variant="top" src={this.props.beast.image_url} />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>
            ❤️ = {this.state.favorites}
          </Card.Text>
          <Card.Text>
            {this.props.beast.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
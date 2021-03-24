import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return(
      <div id="weather">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.movie.title}</Card.Title>
            <Card.Img variant="top" src={this.props.movie.image_url} />
            <Card.Text>{this.props.movie.overview}</Card.Text>
            <Card.Text>{this.props.movie.average_votes}</Card.Text>
            <Card.Text>{this.props.movie.total_votes}</Card.Text>
            <Card.Text>{this.props.movie.popularity}</Card.Text>
            <Card.Text>{this.props.movie.released_on}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Movie;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CitySearch extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.displayLatLon();
  }

  render() {
    console.log('citysearch', this.props)
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="cityName">
          <Form.Label>Enter a City</Form.Label>
          <Form.Control onChange={this.props.updateCity} type="text" placeholder="Enter City" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    )
  }
}

export default CitySearch;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: ''
    }
  }

  submitLcoation = (e) => {
    e.preventDefault();
    this.props.submitLocation(this.state.location);
  }

  updateLocation = (e) => {
    this.setState({ location: e.target.value });
  }

  render() {
    console.log('search', this.props, this.state)
    return(
    <Form onSubmit={this.submitLcoation}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search for a location</Form.Label>
        <Form.Control name="search" onChange={this.updateLocation} type="text" placeholder="Enter a City" />
      </Form.Group>
      <Button type="submit">Explore</Button>
    </Form>
    )
  }
}

export default Search;
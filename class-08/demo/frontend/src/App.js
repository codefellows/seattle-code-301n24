import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './Photos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: [],
    }
  }

  updateSearchQuery = (e) => this.setState({searchQuery: e.target.value});

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}?searchQuery=${this.state.searchQuery}`;
    const response = await axios.get(url);
    this.setState({photos: response.data});
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="searchQuery">
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control onChange={this.updateSearchQuery} type="text" placeholder="Enter a search term" />
          </Form.Group>
        </Form>
        <Photos photos={this.state.photos} />
      </div>
    );
  }
}

export default App;

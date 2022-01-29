import axios from "axios";
import React from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SERVER = 'https://my-snacks-api.herokuapp.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: [],
      selectedSnack: ''
    }
  }

  componentDidMount() {
    this.getSnacks();
  }

  async getSnacks() {
    try {
      const response = await axios.get(`${SERVER}/snacks`);
      console.log("get all the snacks: ", response.data)
      this.setState({ snacks: response.data});
    } catch(error) {
      console.error(error);
    }
  }

  async createSnack(snackInfo) {
    try {
      const response = await axios.post(`${SERVER}/snacks`, snackInfo);
      console.log("create a snack: ", response.data);
      this.setState({ snacks: [...this.state.snacks, response.data]});
    } catch(error) {
      console.error(error);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.snackName.value);
    const snackInfo = {
      name: event.target.snackName.value,
      description: event.target.snackDescription.value
    }
    console.log(snackInfo);
    this.createSnack(snackInfo);
    this.getSnacks();
  }

  async deleteSnack(id) {
    try {
      const response = await axios.delete(`${SERVER}/snacks/${id}`);
      console.log(response.data);
      this.getSnacks();
    } catch(error) {
      console.error(error);
    }
  }

  // async updateSnack(snackToBeUpdated) {
  //   try {
  //     await axios.put(`${SERVER}/snacks/${snackToBeUpdated._id}`, snackToBeUpdated);
  //     const updatedSnacks = this.state.snacks.map(snack => {
  //       if (snack._id === snackToBeUpdated._id) {
  //         return snackToBeUpdated;
  //       } else {
  //         return snack;
  //       }
  //     })
  //     this.setState({snacks: updatedSnacks});
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  // handleUpdate(event) {
  //   console.log(this.state);
  //   event.preventDefault();
  //   const snackInfo = {
  //     name: event.target.snackName.value,
  //     description: event.target.snackDescription.value,
  //     _id: this.state.selectedSnack
  //   }
  //   this.updateSnack(snackInfo);
  // }

  // grabSnackId(id) {
  //   // TODO: grab the snack._id
  //   console.log("type of id: ", typeof id, id);
  //   this.setState({selectedSnack: id});
  //   console.log(this.state);
  //   // render the update form
  // }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Create a Snack</Form.Label>
          <Form.Group controlId="snackName">
            <Form.Control type="text" placeholder="snack name"  />
          </Form.Group>
          <Form.Group controlId="snackDescription">
            <Form.Control type="text" placeholder="snack description" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {this.state.snacks.map(snack => (
          <Card key={snack._id} style={{ width:'18rem' }}>
          <Card.Body>
            <Card.Title>{snack.name}</Card.Title>
            <Card.Text>{snack.description}</Card.Text>
            <Button onClick={() => this.deleteSnack(snack._id)}>Eat this snack!</Button>
            <Button onClick={() => this.grabSnackId(snack._id)}>Update this snack!</Button>
            {/* <Button onClick={this.deleteSnack}>Eat this snack!</Button> */}
          </Card.Body>
          </Card>
        ))};
        <Form onSubmit={this.handleUpdate}>
          <Form.Label>Update a Snack</Form.Label>
          <Form.Group controlId="snackName">
            <Form.Control type="text" placeholder="snack name"  />
          </Form.Group>
          <Form.Group controlId="snackDescription">
            <Form.Control type="text" placeholder="snack description" />
          </Form.Group>
          <Button type="submit">Update!</Button>
        </Form>
      </div>
    );
  }
}

export default App;

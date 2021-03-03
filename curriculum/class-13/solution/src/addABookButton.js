import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class AddABookButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      name:'',
      description:'',
      genre:'fiction'
    }
  }

  addABook = () => {
    // create
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  createBook = async() => {
    const newBook = {
      name: this.state.name,
      description: this.state.description,
      genre: this.state.genre
    }

    await axios.post('http://localhost:3001/books', newBook);
    this.setState({ show: false });
    this.props.updateBookArray(newBook);
  }

  render() {
    return(
      <>
        <Button onClick={this.addABook}>Add a Book</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book To Favorites</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Book Name</Form.Label>
              <Form.Control onChange={(e)=> this.setState({name:e.target.value})} type="text" placeholder="book name" />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Book description</Form.Label>
              <Form.Control onChange={(e)=> this.setState({description:e.target.value})}type="text" placeholder="book description" />
            </Form.Group>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control onChange={(e)=> this.setState({genre:e.target.value})} as="select">
                <option></option>
                <option value="mystery">Mystery</option>
                <option value="thriller">Thriller</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="horror">Horror</option>
                <option value="sci-fi">Sci-Fi</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.createBook}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default AddABookButton;
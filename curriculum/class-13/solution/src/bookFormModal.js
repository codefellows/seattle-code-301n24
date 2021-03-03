import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const API = 'http://localhost:3001';

class BookFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      description: '',
      genre: 'FICTION'
    }
  }

  handleClose = () => {
    this.props.close();
  }

  createBook = async() => {
    const newBook = {
      name: this.state.name,
      description: this.state.description,
      genre: this.state.genre
    }

    await axios.post(`${API}/books`, newBook);
    this.props.close();
    this.props.updateBookArray(newBook);
  }

  render() {
    return(
      <Modal show={this.props.show} onHide={this.handleClose}>
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
            <Form.Control defaultValue='' onChange={(e)=> this.setState({genre:e.target.value})} as="select">
              <option></option>
              <option value="MYSTERY">Mystery</option>
              <option value="THRILLER">Thriller</option>
              <option value="FICTION">Fiction</option>
              <option value="NON-FICTION">Non-Fiction</option>
              <option value="HORROR">Horror</option>
              <option value="SCI-FI">Sci-Fi</option>
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
    )
  }
}

export default BookFormModal;

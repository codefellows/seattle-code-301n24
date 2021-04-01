import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

const API = 'http://localhost:3001';

class BookFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: !this.props.newBook ? this.props.book.name : '',
      description: !this.props.newBook ? this.props.book.description :  '',
      status: !this.props.newBook ? this.props.book.status : 'LIFE-CHANGING'
    }
  }

  handleClose = () => {
    this.props.close();
  }

  createBook = async() => {
    const bookResults = await axios.post(`${API}/books`, {
      email: this.props.auth0.user.email,
      name: this.state.name,
      description: this.state.description,
      status: this.state.status
    });
    this.props.close();
    this.props.updateBookArray(bookResults.data);
  }

  updateBook = async() => {
    const updatedBookObj = await axios.put(`${API}/books/${this.props.index}`, { 
      email: this.props.auth0.user.email, 
      name: this.state.name, 
      description: this.state.description, 
      status: this.state.status 
    });

    this.props.updateBookArray(updatedBookObj.data);
    this.props.close();
  }

  render() {
    return(
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.newBook ? 'Add Book To Favorites' : 'Update Book'}</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Book Name</Form.Label>
            <Form.Control onChange={(e)=> this.setState({name:e.target.value})} type="text" placeholder={this.props.newBook ? "book name" : this.props.book.name} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control onChange={(e)=> this.setState({description:e.target.value})} type="text" placeholder={this.props.newBook ? "book description" : this.props.book.description} />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control defaultValue='' onChange={(e)=> this.setState({status:e.target.value})} as="select">
              <option></option>
              <option value="LIFE-CHANGING">Life Changing</option>
              <option value="FAVORITE FIVE">Favorite Five</option>
              <option value="RECCOMENDED TO ME">Reccomended To Me</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.newBook ? this.createBook : this.updateBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default withAuth0(BookFormModal);

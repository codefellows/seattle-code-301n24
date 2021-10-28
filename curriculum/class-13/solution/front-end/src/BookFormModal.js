import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class BookFormModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.book?.name || '',
      description: props.book?.description || '',
      status: props.book?.status || 'LIFE-CHANGING',
      method: props.book ? 'put' : 'post',
      title: props.book ? 'Update Favorite' : 'Add Book to Favorites'
    };
  }


  handleClose = () => {
    this.props.close();
  }

  saveBook = async () => {

    const config = {
      method: this.state.method,
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books/',
      data: {
        email: this.props.user.email,
        name: this.state.name,
        description: this.state.description,
        status: this.state.status,
      }
    }

    if (this.state.method === 'put') {
      config.url = `/books/${this.props.book._id}/?email=${this.props.user.email}`
    }

    const bookResults = await axios(config);
    this.props.close();
    this.props.onSave(bookResults.data);

  };



  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Book Name</Form.Label>
            <Form.Control onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder="book name" defaultValue={this.state.name} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control onChange={(e) => this.setState({ description: e.target.value })} type="text" placeholder="book description" defaultValue={this.state.description} />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control defaultValue={this.state.status} onChange={(e) => this.setState({ status: e.target.value })} as="select">
              <option></option>
              <option value="LIFE-CHANGING">Life Changing</option>
              <option value="FAVORITE FIVE">Favorite Five</option>
              <option value="RECOMMENDED TO ME">Recommended To Me</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.saveBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookFormModal;

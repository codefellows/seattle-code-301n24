import React from 'react';
import axios from 'axios';
import {Card, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddABookButton from './AddABookButton';
import { withAuth0 } from '@auth0/auth0-react';

const API = 'http://localhost:3001';

class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: []
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get(`${API}/books`, {params: {email: this.props.auth0.user.email}});
    console.log('get books', books.data)
    this.setState({ books: books.data });
  }

  updateBookArray = (books) => this.setState({books});

  removeBook = (idx) => {
    const id = this.state.books[idx]._id;
    let newBooks = this.state.books;
    newBooks = newBooks.filter((book, i) => i !== idx);
    this.setState({ books: newBooks });
    
    axios.delete(`${API}/books/${id}`, {params: {email: this.props.auth0.user.email}}).then(() => {
    }).catch(err => console.error(err));
  }

  render() {
    return(
      <>
        <h2>My favorite books</h2>
        <AddABookButton updateBookArray={this.updateBookArray} />
        <CardColumns>
          {this.state.books.length && this.state.books.map((book, idx) => (
            <Card key={idx}>
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  {book.description}
                  <Button onClick={() => this.removeBook(idx)}>Delete</Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{book.status}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
      </>
    )
  }
}

export default withAuth0(BestBooks);

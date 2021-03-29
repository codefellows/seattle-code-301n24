import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddABookButton from './AddABookButton';

const API = 'http://localhost:3001';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: []
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get(`${API}/books`);
    this.setState({ books: books.data });
  }

  updateBookArray = (book) => this.setState({books:[...this.state.books, book]});

  removeBook = (idx) => {
    const id = this.state.books[idx]._id;
    axios.delete(`${API}/books`, {params: { id }}).then(() => {
      let newBooks = this.state.books;
      newBooks = newBooks.filter((book, i) => i !== idx);
      this.setState({ books: newBooks });
    })
  }

  render() {
    return(
      <>
        <h2>My favorite books</h2>
        <AddABookButton updateBookArray={this.updateBookArray} />
        {this.state.books.length && this.state.books.map((book, idx) => (
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.description}
                <Button onClick={() => this.removeBook(idx)}>Delete</Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{book.genre}</small>
            </Card.Footer>
          </Card>
        ))}
      </>
    )
  }
}

export default MyFavoriteBooks;
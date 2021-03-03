import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddABookButton from './addABookButton';
import BookFormModal from './bookFormModal';

const API = 'http://localhost:3001';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: [],
      show: false
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get(`${API}/books`);
    this.setState({ books: books.data });
  }

  updateNewBookArray = (book) => this.setState({books:[...this.state.books, book]});
  close = () => this.setState({ show: false });

  removeBook = (idx) => {
    const id = this.state.books[idx]._id;
    axios.delete(`${API}/books`, {params: { id }}).then(() => {
      let newBooks = this.state.books;
      newBooks = newBooks.filter((book, i) => i !== idx);
      this.setState({ books: newBooks });
    })
  }

  updateBookArray = (book) => {
    let newBooks = this.state.books;

    let i = -1

    newBooks.forEach((oriBook, idx) => {
      if(oriBook._id === book._id) i = idx;
    });

    newBooks.splice(i, 1, book);

    this.setState({ books: newBooks });
  }

  render() {
    console.log('favorite books: state', this.state)
    return(
      <>
        <h2>My favorite books</h2>
        <AddABookButton updateBookArray={this.updateNewBookArray} />
        {this.state.books.length && this.state.books.map((book, idx) => (
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Text>
                {book.description}
                <Button onClick={() => this.removeBook(idx)}>Delete</Button>
                <Button onClick={() => this.setState({show: true})}>Update</Button> 
                <BookFormModal
                  book={book}
                  close={this.close}
                  show={this.state.show}
                  updateBookArray={this.updateBookArray}
                />
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

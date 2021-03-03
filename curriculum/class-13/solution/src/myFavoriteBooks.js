import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddABookButton from './addABookButton';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: []
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get('http://localhost:3001/books');
    this.setState({ books: books.data });
  }

  updateBookArray = (book) => this.setState({books:[...this.state.books, book]});

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

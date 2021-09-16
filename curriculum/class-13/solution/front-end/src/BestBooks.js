import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BookButton from './BookButton';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = async () => {

    try {

      const config = {
        params: { email: this.props.user.email },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
      };


      const response = await axios(config);

      this.setState({ books: response.data });

    } catch (err) {
      console.error(err);
    }

  }

  updateBookArray = (book) => {
    const updatedBooks = [...this.state.books, book];
    this.setState({ books: updatedBooks })
  };

  handleBookUpdate = (bookToUpdate) => {
    const updatedBooks = this.state.books.map(book => {
      if (book._id === bookToUpdate._id) {
        return bookToUpdate;
      } else {
        return book;
      }
    });

    this.setState({ books: updatedBooks });
  }

  removeBook = (book) => {
    const id = book._id;
    let newBooks = this.state.books;
    newBooks = this.state.books.filter(b => b._id !== id);
    this.setState({ books: newBooks });

    const config = {
      params: { email: this.props.user.email },
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${id}`
    }
    axios(config);
  }


  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <BookButton label="Add a Book" user={this.props.user} onSave={this.updateBookArray} />

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 h-50"
                  src="/book.jpg"
                  alt={book.name}
                />
                <Carousel.Caption>
                  <h3>{book.name}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                  <Button onClick={() => this.removeBook(book)}>Delete</Button>
                  <BookButton label="Update" user={this.props.user} onSave={this.handleBookUpdate} book={book} />
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

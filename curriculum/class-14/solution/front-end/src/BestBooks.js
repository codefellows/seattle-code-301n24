import React from 'react';
import axios from 'axios';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddABookButton from './AddABookButton';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';

const API = 'http://localhost:3001';

class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: [],
      displayBookForm: false,
      newBook: true,
      updateIdx: -1,
      show: true
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get(`${API}/books`, {params: {email: this.props.auth0.user.email}});
    console.log('get books', books.data)
    this.setState({ books: books.data });
  }

  handleClose = () => {
    this.setState({ displayBookForm: false });
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
    console.log('best books state', this.state)
    return(
      <>
        <h2>My favorite books</h2>
        <AddABookButton 
          addABook={() => this.setState({ displayBookForm: true })}
        />

        {this.state.displayBookForm && 
          <BookFormModal
            close={this.handleClose}
            updateBookArray={this.updateBookArray}
            show={this.state.show}
            book={this.state.books[this.state.updateIdx]}
            newBook={this.state.newBook}
            index={this.state.updateIdx}
          />
        }

        <Carousel>
          {this.state.books.length && this.state.books.map((book, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={book.img}
                alt={book.name}
                />
              <Carousel.Caption>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </Carousel.Caption>
              <Button onClick={() => this.removeBook(idx)}>Delete</Button>
              <Button onClick={() => this.setState({displayBookForm:true, newBook: false, updateIdx: idx})}>Update</Button>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    )
  }
}

export default withAuth0(BestBooks);

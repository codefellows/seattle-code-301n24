import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Carousel } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: []
    }
  }

  componentDidMount = () => {
    // get the jwt and send in the headers
    this.props.auth0.getIdTokenClaims()
      .then(async res => {
        const jwt = res.__raw;
        // make a call to the backend to get the the books and display them
        const config = {
          params: {email: this.props.auth0.user.email},
          headers: {"Authorization" : `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/books'
        }
        const books = await axios(config);

        this.setState({ books: books.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return(
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

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
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    )
  }
}

export default withAuth0(BestBooks);

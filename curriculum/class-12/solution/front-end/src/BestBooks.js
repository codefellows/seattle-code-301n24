import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { CardColumns } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: []
    }
  }

  componentDidMount = async () => {
    // make a call to the backend to get the the books and display them
    const books = await axios.get('http://localhost:3001/books', {params: {email: this.props.auth0.user.email }});
    this.setState({ books: books.data });
  }

  render() {
    console.log(this.props.auth0);
    return(
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length && this.state.books.map((book, idx) => (
          <CardColumns>
            <Card key={idx}>
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  {book.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{book.status}</small>
              </Card.Footer>
            </Card>
          </CardColumns>
        ))}
      </>
    )
  }
}

export default withAuth0(BestBooks);

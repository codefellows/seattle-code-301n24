import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: need a button component to log the user in  */}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;

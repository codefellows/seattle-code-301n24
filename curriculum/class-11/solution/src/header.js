import React from 'react';
import Logout from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import './header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        {this.props.auth0.isAuthenticated ? <Logout /> : <LoginButton />}
      </Navbar>
    )
  }
}

export default withAuth0(Header);

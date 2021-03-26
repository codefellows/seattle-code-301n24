import React from 'react';
import Logout from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <BrowserRouter>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="login">Login</Link>
          </Nav>
        </BrowserRouter>
        <Logout />
      </Navbar>
    )
  }
}

export default Header;

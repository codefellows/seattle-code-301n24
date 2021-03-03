import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render(){
    return(
      <Navbar bg="light" expand="lg">  
        <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
        <p>Enter a location below to learn about the weather, restaurants, movies, and more!</p>
      </Navbar>
    )
  }
}

export default Header;

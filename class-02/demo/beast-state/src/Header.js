import React from "react";
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
  render() {
    return (
      // A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more
      <Navbar className="header">
        {/* A simple flexible branding component.  */}
        <Navbar.Brand>
          <h1>{this.props.title}</h1>
        </Navbar.Brand>
      </Navbar>
    )
  };
};

export default Header;

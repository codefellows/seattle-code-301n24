import React from "react";
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  render() {
    return (
      // A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more
      <Navbar className="footer">
        {/* A simple flexible branding component.  */}
        <Navbar.Brand>
          <h1>{this.props.text}</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;

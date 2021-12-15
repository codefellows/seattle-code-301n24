import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import beastImgs from './data.json';

class App extends React.Component {
  render() {
    return (
      // Containers provide a means to center and horizontally pad your site’s contents. 
      /// Use Container for a responsive pixel width.
      <Container className="App">
        <Header title='Beast Judge' />
        <Main imageURLs={beastImgs} />
        <Footer text='Tell me what you want, what you really really want!' />
      </Container>
      );
  }
}

export default App;

import React from 'react';
import Parent from './parent.js';
import Header from './header';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Billy is a teenager'} />
        <Parent />
      </Container>
    );
  }
}

export default App;
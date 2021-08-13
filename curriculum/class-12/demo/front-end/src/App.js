import React from 'react';
import axios from 'axios';
import Cats from './Cats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  async componentDidMount() {
    // const SERVER = 'http://localhost:3001';
    const SERVER = process.env.REACT_APP_SERVER;

    try {
      const response = await axios.get(`${SERVER}/cats`);
      this.setState({ cats: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Cats cats={this.state.cats} />
      </>
    )
  }
}

export default App;

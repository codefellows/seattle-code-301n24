import React from 'react';
import axios from 'axios';
import Cats from './Cats';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount = async () => {
    const SERVER = 'http://localhost:3001';
    try {
      const cats = await axios.get(`${SERVER}/cats`);
      this.setState({ cats: cats.data });

    } catch(error){
      console.log(error);
    }
  }

  render() {
    return(
      <Cats cats={this.state.cats} />
    )
  }
}

export default App;

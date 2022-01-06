import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      suppliesList: []
    }
  }

  getFood = async () => {
    const url = 'http://localhost:3001';
    const shoppingList = await axios.get(`${url}/shoppingList?type=food`);
    this.setState({shoppingList: shoppingList.data});
  }

  getSupplies = async () => {
    const url = 'http://localhost:3001';
    const shoppingList = await axios.get(`${url}/shoppingList?type=supplies`);
    this.setState({suppliesList: shoppingList.data});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getFood}>Get Food list from server</button>
        <button onClick={this.getSupplies}>Get Supplies list from server</button>
        <ul>
          {this.state.shoppingList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <ul>
          {this.state.suppliesList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

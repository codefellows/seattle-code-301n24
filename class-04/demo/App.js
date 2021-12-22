import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import './App.css';

const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: allNumerals
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    const selection = e.target.value;
    let updatedNums;

    if (selection === "odd") {
      updatedNums = allNumerals.filter(num => num % 2 === 1);
      this.setState({nums: updatedNums});
    } else if (selection === "even") {
      updatedNums = allNumerals.filter(num => num % 2 === 0);
      this.setState({nums: updatedNums});
    } else {
      this.setState({nums: allNumerals});
    }
  }

  render() {
    return (
      <div className="App">
        <Form>
          <Form.Label>Numeral Filter</Form.Label>
          <br/>
          <Form.Select onChange={this.handleChange}>
            <option value="none">Unfiltered Numbers</option>
            <option value="odd">Filtered Odd Numbers</option>
            <option value="even">Filtered Even Numbers</option>
          </Form.Select>
        </Form>
        <p>{this.state.nums}</p>
      </div>
  );
}
}

export default App;

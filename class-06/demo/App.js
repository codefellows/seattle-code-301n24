import React from "react";
import "./App.css";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeSearchedFor: "",
      locationObject: {}
    }
  }

  saveCitySearchedFor = (event) => {
    console.log(event.target.value);
    this.setState({cityWeSearchedFor: event.target.value})
  };

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityWeSearchedFor}&format=json`;
    console.log("URL: ", url);
    const response = await axios.get(url);
    console.log("Response Object: ", response.data[0]);
    this.setState({locationObject: response.data[0]});
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.saveCitySearchedFor} placeholder="search for a city" ></input>
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.locationObject.place_id &&
        <h2>The city we searched for is: {this.state.locationObject.display_name}</h2>
        }
      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// install version "react-router-dom": "^5.2.1"

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  // componentDidMount() is invoked immediately after a component is rendered
  componentDidMount() {
    this.getCats();
  }

  // start the location param with a default value of null only if no argument is passed
  async getCats(location = null) {
    let apiUrl = `${SERVER}/cats`;

    if (location) {
      apiUrl += `?location=${location}`;
    }

    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.getCats(location);
  }

  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* everything outside of the switch will just be on your screen always */}
          <Switch>
             {/* everything inside the switch will only show depend on the route/path of your url */}

            <Route exact path="/">
              <div>
                <Cats cats={this.state.cats} />
                {/* a form that searches for cats from a specific location */}
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>
              </div>
            </Route>

            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>

          </Switch>
        </Router>
      </>
    )
  }
}

export default App;

import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./Header.js";
import Parent from "./Parent.js";
import OverdraftModal from "./OverdraftModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showOverdraft = () => {
    this.setState({show: true});
  }

  onHide = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <Container className="App">
        <Header title={'This is the Parent/Child Demo'}/>
        <Parent showOverdraft={this.showOverdraft}/>
        <OverdraftModal show={this.state.show} onHide={this.onHide} />
      </Container>
      )
  }
}

export default App;

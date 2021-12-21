import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer.js';
import beastData from "./data.json";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: {}
    }
  }

  showModal = (beastTitle) => {
    const selectedBeast = beastData.find(beastObj => beastObj.title === beastTitle);
    this.setState({
      show: true,
      selectedBeast: selectedBeast
    });
  };

  handleClose = () => {
    this.setState({show: false});
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SelectedBeast 
          show={this.state.show}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        />
        <Main 
          beastData={beastData} 
          showModal={this.showModal}
        />
        <Footer />
      </div>
  );
}
}

export default App;

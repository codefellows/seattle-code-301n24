import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import rawData from './data.json';
import SelectedBeast from './selectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: rawData,
      displayModal: false,
      selectedBeast: {},
    }
  }

  displayAsModal = (name) => {
    const selectedBeast = rawData.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true });
  }

  handleClose = () => {
    this.setState({ displayModal: false });
  }

  updateAllBeasts = (allBeasts) => {
    this.setState({ allBeasts });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          displayAsModal={this.displayAsModal}
          displayFilteredImages={this.updateAllBeasts}
          rawData={rawData}
        />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.displayModal}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

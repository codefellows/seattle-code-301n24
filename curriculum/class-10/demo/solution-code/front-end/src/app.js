import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ingredient:'',
      recipes: []
    }
  }


  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;

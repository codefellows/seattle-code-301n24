import React from 'react';
import Login from './login';
import MyFavoriteBooks from './myFavoriteBooks';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: conditionally render the components so that the user only sees the `Login` if they are NOT logged in and they don't see the `Login` if they are logged in.

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loginShow: true
    }
  }

  closeLogin = () => this.setState({ loginShow: false })

  render() {
    return(
      <>
        <Login 
          show={this.state.loginShow}
          handleClose={this.closeLogin}
        />

        <MyFavoriteBooks />
      </>
    )
  }
}

export default Main;

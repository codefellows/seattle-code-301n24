import React from 'react';
import Login from './login';
import MyFavoriteBooks from './myFavoriteBooks';
import UserProfile from './profile';
import { withAuth0 } from '@auth0/auth0-react';


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
      !this.props.auth0.isAuthenticated ? 
        <Login 
          show={this.state.loginShow}
          handleClose={this.closeLogin}
        />
        :
        <>
          <MyFavoriteBooks />
          <UserProfile />
        </>
    )
  }
}

export default withAuth0(Main);

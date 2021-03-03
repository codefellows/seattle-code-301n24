import React from 'react';
import Login from './loginButton';
import LogoutButton from './logoutButton';
import MyFavoriteBooks from './myFavoriteBooks';
import UserProfile from './profile';
import { withAuth0 } from '@auth0/auth0-react';

class Main extends React.Component {

  render() {
    return(
      !this.props.auth0.isAuthenticated ? 
        <Login />
        :
        <>
          <MyFavoriteBooks />
          <UserProfile />
          <LogoutButton />
        </>
    )
  }
}

export default withAuth0(Main);

import React from 'react';
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import UserProfile from './Profile';
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
      <MyFavoriteBooks />
    )
  }
}

export default withAuth0(Main);

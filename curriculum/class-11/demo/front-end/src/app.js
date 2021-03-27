import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

class App extends React.Component {
  render(){
    return(
      <LoginButton />
    )
  }

}

export default withAuth0(App);

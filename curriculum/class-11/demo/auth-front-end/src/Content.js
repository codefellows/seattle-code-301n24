import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Content extends React.Component {
  componentDidMount = () => {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;
        axios.get(`${process.env.REACT_APP_SERVER}/test`, { headers: {"Authorization" : `Bearer ${jwt}`} })
        .then(axiosResults => console.log(axiosResults.data))
        .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    return(
      <h1>Future Content</h1>
    )
  }
}

export default withAuth0(Content);

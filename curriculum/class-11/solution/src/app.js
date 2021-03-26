import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <Main /> : <Login /> }
              </Route>
              <Route path="/profile" component={withRouter(Profile)}/>
            </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);

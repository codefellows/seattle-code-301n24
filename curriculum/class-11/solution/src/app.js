import React from 'react';
import Header from './Header';
import MyFavoriteBooks from './MyFavoriteBooks';
import Footer from './Footer';
import IsLoadingAndError from './IsLoadingAndError';
import Login from './Login';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login /> }
                </Route>
                <Route path="/profile" component={Profile}/>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

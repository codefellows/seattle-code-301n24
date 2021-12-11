import React from 'react';
import Snack from './Snack';

class Main extends React.Component {
  render() {
    return (
      <>
        <p>Main coming soon...</p>
        <Snack title={'Uncrustables'} description={'yummy frozen PB&J'}/>
        <Snack title={'Parm Goldfish'}/>
        <Snack title={'Saltine Crackers & PeanutButter'}/>
      </>
    )
  }
};

export default Main;

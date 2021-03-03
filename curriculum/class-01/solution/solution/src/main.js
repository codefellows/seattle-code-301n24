import React from 'react';
import HornedBeast from './hornedBeast.js';

class Main extends React.Component {
  render() {
    return(
      <HornedBeast 
        title="Bob"
        src="https://images.unsplash.com/photo-1573871666457-7c7329118cf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        description="a horn"
      />
    )
  }
}

export default Main;
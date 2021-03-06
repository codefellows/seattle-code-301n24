import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  componentDidMount = async () => {
    const API = 'http://localhost:3001';
    const jobs = await axios.get(`${API}/jobs`);
    this.setState({ jobs: jobs.data })
  }

  render() {
    return(
      <>
        {this.state.jobs.length && this.state.jobs.map((job, idx) => (
          <div key={idx}>
            {job.name}
          </div>
        ))}
      </>
    )
  }
}

export default Main;
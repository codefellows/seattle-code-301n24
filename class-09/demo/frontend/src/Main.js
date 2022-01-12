import React from 'react';
import axios from 'axios';

// let data = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  } 

  componentDidMount = async () => {
    const API_URL = 'http://localhost:3001';
    const response = await axios.get(`${API_URL}/jobs`);
    console.log(response.data);
    this.setState({ jobs: response.data });
  }

  render() {
    return (
      <div>
        {this.state.jobs.map((job, idx) => (
          <div key={idx}>
            <h3>{job.title}</h3>
            <a href={job.url}>Apply Now!</a>
            <p>{job.description}</p>
            <p>{job.location.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Main;

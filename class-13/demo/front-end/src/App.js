import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import CatForm from './CatForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  // componentDidMount() is invoked immediately after a component is rendered
  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats() {
    try {
      const response = await axios.get(`${SERVER}/cats`);
      this.setState({ cats: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  handleCreate = async catInfo => {
    try {
      const response = await axios.post(`${SERVER}/cats`, catInfo);
      const newCat = response.data;
      this.setState({
        cats: [...this.state.cats, newCat]
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleDelete = async id => {
    try {
      // alert('do you want to delete?')
      await axios.delete(`${SERVER}/cats/${id}`);
      const remainingCats = this.state.cats.filter(cat => cat._id !== id);
      this.setState({
        cats: remainingCats
      })
    } catch (error) {
      console.error(error);
    }
  }

  handleUpdate = async catToBeUpdated => {
    try {
      await axios.put(`${SERVER}/cats/${catToBeUpdated._id}`, catToBeUpdated);
      
      const updatedCats = this.state.cats.map(existingCat => {
        if (existingCat._id === catToBeUpdated._id) {
          return catToBeUpdated;
        } else {
          return existingCat;
        }
      });

      this.setState({
        cats: updatedCats
      })

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Container>
        <h1>World of Cats</h1>
        {/* creates a new cat */}
        <CatForm onCreate={this.handleCreate} />
        <Cats cats={this.state.cats} onDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </Container>
    )
  }
}

export default App;

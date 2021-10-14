import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';
import rawData from './data.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: rawData
    }
  }

  filter = (e) => {
    const numHorns = parseInt(e.target.value);
    let gallery = rawData;
    if (numHorns) {
      gallery = rawData.filter((creature) => creature.horns === numHorns);
    }
    this.setState({ allBeasts: gallery });
  };

  render() {
    return (
      <div id="beast-container">
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow...</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <CardColumns>
          {this.state.allBeasts.map((beast, idx) => (
            <HornedBeast
              key={idx}
              index={idx}
              beast={beast}
              displayAsModal={this.props.displayAsModal}
            />
          ))}
        </CardColumns>

      </div>
    )
  }
}

export default Main;
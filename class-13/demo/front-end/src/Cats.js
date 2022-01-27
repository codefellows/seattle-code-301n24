import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UpdateCatForm from './UpdateCatForm';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: null
    }
  }

  handleCatSelect = (cat) => {
    this.setState({ selectedCat: cat });
  };

  onClose = () => {
    this.setState({ selectedCat: null });
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.props.cats.length && this.props.cats.map(cat => (
            <ListGroup.Item key={cat._id} >
              <Cat info={cat} onDelete={this.props.onDelete} onSelect={this.handleCatSelect} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        {this.state.selectedCat && (
          <UpdateCatForm cat={this.state.selectedCat} onUpdate={this.props.onUpdate} onClose={this.onClose} show={this.state.selectedCat !== null} />
        )}
      </>
    )
  }
}

class Cat extends React.Component {

  delete = () => {
    this.props.onDelete(this.props.info._id);
  }

  update = () => {
    // show some form so that we can update the cat's details
    this.props.onSelect(this.props.info);
  }

  render() {
    return (
      <>
        <h3>
          {this.props.info.name}
          ,color: {this.props.info.color}
          ,hasClaws: {String(this.props.info.hasClaws)}
        </h3>
        <p>
          <span onClick={this.delete}>[Delete]</span>
          <span onClick={this.update}>[Update]</span>
        </p>
      </>

    );
  }
}

export default Cats;
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BookFormModal from '../../../class-14/solution/src/bookFormModal';

class AddABookButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
    }
  }

  addABook = () => {
    // create
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return(
      <>
        <Button onClick={this.addABook}>Add a Book</Button>
        <BookFormModal
          close={this.handleClose}
          updateBookArray={this.props.updateBookArray}
          show={this.state.show}
        />
      </>
    )
  }
}

export default AddABookButton;
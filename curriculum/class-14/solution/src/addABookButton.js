import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './bookFormModal';

class AddABookButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
    }
  }

  addABook = () => this.setState({ show: true });
  close = () => this.setState({ show:false });

  render() {
    return(
      <>
        <Button onClick={this.addABook}>Add a Book</Button>
        <BookFormModal
          close={this.close}
          show={this.state.show}
          updateBookArray={this.props.updateBookArray}
        />
      </>
    )
  }
}

export default AddABookButton;
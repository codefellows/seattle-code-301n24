import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

export default class BookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  handleClick = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>{this.props.label}</Button>
        <BookFormModal
          user={this.props.user}
          close={this.handleClose}
          onSave={this.props.onSave}
          show={this.state.show}
          book={this.props.book}
        />
      </>
    )
  }
}

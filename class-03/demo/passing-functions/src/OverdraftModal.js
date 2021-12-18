import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class OverdraftModal extends React.Component {
  render() {
    return (
      <div className="OverdraftModal">
        <Modal show={this.props.show} onHide={this.props.onHide} >
          <Modal.Header closeButton>
            <Modal.Title>Overdraft Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the last time, Billy! No more money for you!</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      )
  }
}

export default OverdraftModal;

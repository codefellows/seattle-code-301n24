import React from 'react';
import teen from './assets/teen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Square extends React.Component {

  askParentForMoney = () => {
    this.props.askForMoney();
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={teen} />
        <Card.Body>
          <Card.Title>Billy</Card.Title>
          <Card.Text>
            I am the Billy. I have {this.props.billysMoney} dollars. 
          </Card.Text>
          <Button onClick={this.askParentForMoney} variant="primary">Ask parent for more money</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Square;
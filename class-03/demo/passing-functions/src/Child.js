import React from "react";
import Card from "react-bootstrap/Card";
import teen from "./assets/teen.jpg";
import Button from "react-bootstrap/Button";

class Child extends React.Component {

  askFor10Dollars = () => {
    this.props.askForMoney(10)
  }

  askFor20Dollars = () => {
    this.props.askForMoney(20)
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Title>Billy</Card.Title>
          <Card.Img src={teen} alt="I am Billy, I am the teen!" />
          <Card.Text>I am the Billy. I have {this.props.billysMoney}! MuahHAHAHA!</Card.Text>
          <Button onClick={this.askFor10Dollars}>Ask for $10</Button>
          <Button onClick={this.askFor20Dollars}>Ask for $20</Button>
        </Card>
      </>
      )
  }
}

export default Child;

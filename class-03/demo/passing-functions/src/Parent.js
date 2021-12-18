import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mom from "./assets/mom.jpg";
import Child from "./Child.js";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100,
      billysMoney: 0,
    };
  }

  askForMoney = (amountOfMoney) => {
    if (this.state.money <= 0) {
      this.props.showOverdraft();
    } else {
      this.setState({
        billysMoney: this.state.billysMoney + amountOfMoney,
        money: this.state.money - amountOfMoney,
      });
    }


  };

  render() {
    return (
      <>
        <CardGroup>
          <Card className="Parent" style={{ width: "18rem" }}>
            <Card.Title>Parent</Card.Title>
            <Card.Img src={mom} alt="Picture of Back to the Future Mom" />
            <Card.Text>
              I am the Parent and I have {this.state.money} dollars.
            </Card.Text>
          </Card>
          <Child
            billysMoney={this.state.billysMoney}
            askForMoney={this.askForMoney}
          />
        </CardGroup>
      </>
    );
  }
}

export default Parent;

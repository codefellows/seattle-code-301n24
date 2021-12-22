import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { numerals: allNumerals };
  }

  handleChange = (event) => {
    const selection = event.target.value;
    let updatedNumerals;

    if (selection === "odd") {
      updatedNumerals = allNumerals.filter((numeral) => numeral % 2 === 1);
      this.setState({ numerals: updatedNumerals });
    } else if (selection === "even") {
      updatedNumerals = allNumerals.filter((numeral) => numeral % 2 === 0);
      this.setState({ numerals: updatedNumerals });
    } else {
      this.setState({ numerals: allNumerals });
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Filter Numerals</Form.Label>
          <Form.Select
            onChange={this.handleChange}
            aria-label="Default select example"
          >
            <option value="none">Unfiltered</option>
            <option value="odd">Odds</option>
            <option value="even">Evens</option>
          </Form.Select>
        </Form>
        <p>{this.state.numerals}</p>
      </Container>
    );
  }
}

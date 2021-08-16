import { Component } from 'react'
import './App.css'
function App() {
  return (
    <div className="App">
      <h1>Three By Three</h1>
      <Grid />
    </div>
  );
}

class Grid extends Component {
  render() {
    return <div className="grid">
      <Row rowNum={0} />
      <Row rowNum={1} />
      <Row rowNum={2} />
    </div>
  }
}

function Row(props) {
  const startSquareValue = (props.rowNum * 3) + 1;

  return (
    <div className="row">
      <Square value={startSquareValue} />
      <Square value={startSquareValue + 1} />
      <Square value={startSquareValue + 2} />
    </div>
  )
}

class Square extends Component {
  render() {
    return <button className="square">{this.props.value}</button>
  }
}

export default App;

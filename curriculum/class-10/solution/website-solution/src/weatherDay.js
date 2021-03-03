import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    console.log('weather day', this.props)
    return(
      <div id="weather">
        <Card>
          <Card.Body>
            <Card.Title>{this.props.day.forecast}</Card.Title>
            <Card.Text>{this.props.day.time}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default WeatherDay;

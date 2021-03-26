import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    return(
      <div id="weather">
        <CardDeck style={{ width: '18rem' }}>
          <h3>Weather:</h3>
          {this.props.weather.map((day, idx) => (
            <WeatherDay 
              key={idx}
              day={day}
            />
          ))
          }
          {this.props.weather[0] &&
            <em>As of {(new Date(this.props.weather[0].createdAt)).toLocaleString()}</em>
          }
        </CardDeck>
      </div>
    )
  }
}

export default Weather;

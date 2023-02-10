/** @format */

import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';

const Weather = ({ weatherData }) => {
  let windDirection;

  const sunrise = new Date(weatherData.sys.sunrise);
  const dateHours = sunrise.getHours();
  const dateMinutes = sunrise.getMinutes();
  console.log(weatherData.sys.sunrise);
  // console.log(dateHours);
  // console.log(dateMinutes);

  const windDirectionChecker = (d) => {
    switch (true) {
      case 0:
      case 360:
        windDirection = 'N';
        break;
      case 90:
        windDirection = 'E';
        break;
      case 180:
        windDirection = 'S';
        break;
      case 270:
        windDirection = 'W';
        break;
      case d > 0 && d < 90:
        windDirection = 'NE';
        break;
      case d > 90 && d < 180:
        windDirection = 'SE';
        break;
      case d > 180 && d < 270:
        windDirection = 'SW';
        break;
      case d > 270 && d < 360:
        windDirection = 'NW';
        break;
      default:
        windDirection = '-';
        break;
    }
  };

  windDirectionChecker(weatherData.wind.deg);

  console.log(weatherData.weather[0].description);

  return (
    <div className='card-container'>
      <Card className='card-div'>
        <Card.Content>
          <Card.Header className='header'>
            {weatherData.name}
          </Card.Header>
          <p>Temperature: {weatherData.main.temp} degrees celsius</p>
          <p>
            Feels Like: {weatherData.main.feels_like} degrees celsius
          </p>
          <p>The wind is blowing in from the: {windDirection}</p>
          <p>Wind speed is {weatherData.wind.speed} KM/h</p>
          <p>Wind gusts are reaching {weatherData.wind.gust} KM/h</p>
          <p>{weatherData.weather[0].description}</p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Weather;

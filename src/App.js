/** @format */

import './App.css';
import React, { useState, useEffect } from 'react';
import Weather from './components/Weather/Weather';

function App() {
  const [lat, setLat] = useState(undefined);
  const [lon, setLon] = useState(undefined);
  const [data, setData] = useState([]);

  // console.log('process', process);
  const REACT_APP_API_URL =
    'https://api.openweathermap.org/data/2.5/weather?';
  const REACT_APP_API_KEY = 'b85380eb92ef20e64b69f7bc894e07ae';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lon && lat) {
      fetch(
        `${REACT_APP_API_URL}lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [lon, lat]);

  return (
    <div className='App'>
      {typeof data.main !== 'undefined' ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <h1>Loading the weather data</h1>
        </div>
      )}
    </div>
  );
}

export default App;

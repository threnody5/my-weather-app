/** @format */

import './App.css';
import React, { useState, useEffect } from 'react';
import Weather from './components/Weather/Weather';

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);

  const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  const REACT_APP_API_KEY = 'b85380eb92ef20e64b69f7bc894e07ae';

  // useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
      await fetch(
        `${REACT_APP_API_URL}lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}&units=metric`
      )
          .then((response) => response.json())
          .then((result) => {
            setData(result);
            console.log(result);
          })
          .catch((e) => {
            console.error(e);
          })
    };
    
    // };
  // }, [lon, lat]);

  // if ()

  return (
    <div className='App'>
      {typeof data.main !== 'undefined' ? <Weather weatherData={data} /> : <div></div>}
      <div><button onClick={fetchData}>Pull Weather</button></div>
    </div>
  );
}

export default App;

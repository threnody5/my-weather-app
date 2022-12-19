/** @format */

import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.REACT_APP_API_KEY}`
      )
        // .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return <div className='App'></div>;
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    showWeather();
  }, []);
  
  function showWeather(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(weatherApiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {});
  }
  
  return (
    <div className="App">
      <WeatherCard weatherData={weatherData} />
      <Search />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState();

  //show Stockholm weather as the default city
  useEffect(() => {
    showWeather("stockholm");
  }, []);

  //add the weather of the user's choice
  useEffect(() => {}, [city]);

  function showWeather(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(weatherApiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {});
  }
  console.log(weatherData);
  return (
    <div className="App">
      {weatherData &&
      <>
      <WeatherCard weatherData={weatherData} />
      <Search setCity={setCity} />
      </>
      }
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState();
  const [showError, setShowError] = useState(false);

  //show Stockholm weather as the default city
  useEffect(() => {
    showWeather("stockholm");
  }, []);

  //add the weather of the user's choice
  useEffect(() => {
    if (city) {
      showWeather(city);
    }
  }, [city]);

  //call API, get the waether data, show at most 5 cities at the same time
  function showWeather(city) {
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2ba4b7c95e0f3e8dedeafe2da9d569f&units=metric`;
    axios
      .get(weatherApiUrl)
      .then((response) => {
        const exsitingWeatherData =
          weatherData.length > 4 ? weatherData.slice(1) : weatherData;
        setWeatherData([...exsitingWeatherData, response.data]);
        setShowError(false);
      })
      .catch(() => setShowError(true));
  }

  return (
    <div className="App">
      {showError && <div className="error">City not found 🙁, try again!</div>}
      {weatherData && (
        <div className="cards">
          {weatherData.map((data, i) => (
            <WeatherCard weatherData={data} key={i} />
          ))}
          <Search setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;

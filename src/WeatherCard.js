import { format } from "date-fns";
import "./WeatherCard.css";

export default function WeatherCard({ weatherData }) {
  const formatedTime = format(new Date(), "iii HH:mm");
  const formatedDate = format(new Date(), "d MMM");
  const iconMapping = {
    "01d": "day",
    "02d": "few-clouds",
    "03d": "scattered-clouds",
    "04d": "cloudy",
    "09d": "shower-rain",
    "10d": "rain",
    "11d": "thunder",
    "13d": "snow",
    "01n": "night",
    "02n": "cloudy",
    "03n": "cloudy",
    "04n": "cloudy",
    "09n": "shower-rain",
    "10n": "rainy",
    "11n": "thunder",
    "13n": "snow",
  };

  return (
    <div className="weatherCard">
      <div className="timeDate">
        <span className="time">{formatedTime}</span>
        <span className="date">{formatedDate}</span>
      </div>
      <div className="weatherIcon">
        <img
          className="icon"
          src={`icons/${iconMapping[weatherData.weather[0].icon]}.svg`}
          alt={weatherData.weather[0].description}
        />
      </div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°</div>
      <div className="feelsLike">
        Feels Like {Math.round(weatherData.main.feels_like)}°
      </div>
      <div className="description">{weatherData.weather[0].description}</div>
      <hr className="line" />
      <div className="location">
        <div className="city">{weatherData.name}</div>
        <div className="country">{weatherData.sys.country}</div>
      </div>
    </div>
  );
}

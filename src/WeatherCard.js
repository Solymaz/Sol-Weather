import "./WeatherCard.css";

export default function WeatherCard(weatherData) {
  return (
    <div className="weatherCard">
      <div className="time"></div>
      <div className="date"></div>
      <div className="weatherIcon"></div>
      <div className="temperature"></div>
      <div className="description"></div>
    </div>
  );
}

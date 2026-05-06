import "./WeatherCard.css";

function WeatherCard({ slot }) {
  const time = slot.dt_txt.split(" ")[1].slice(0, 5);
  const temp = Math.round(slot.main.temp);
  const description = slot.weather[0].description;
  const icon = slot.weather[0].icon;

  return (
    <div className="weather-card">
      <p>{time}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className="temp">{temp}°C</p>
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;

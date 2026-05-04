function WeatherCard({ slot }) {
  const time = slot.dt_txt.split(" ")[1].slice(0, 5);
  const temp = Math.round(slot.main.temp);
  const description = slot.weather[0].description;

  return (
    <div>
      <p>{time}</p>
      <p>{temp}°C</p>
      <p>{description}</p>
    </div>
  );
}

export default WeatherCard;
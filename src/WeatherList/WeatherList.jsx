import { v4 as uuidv4 } from "uuid";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherList.css";

function WeatherList({ forecast }) {
  return (
    <div className="weather-list">
      {Object.entries(forecast).map(([day, hours]) => (
        <div className="weather-day" key={uuidv4()}>
          <h3>{day}</h3>
          <div className="weather-hours">
          {hours.map((slot) => (
            <WeatherCard key={uuidv4()} slot={slot} />
          ))}
        </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherList;
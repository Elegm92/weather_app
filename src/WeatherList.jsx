import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./WeatherCard";

function WeatherList({ forecast }) {
  return (
    <div>
      {Object.entries(forecast).map(([day, hours]) => (
        <div key={uuidv4()}>
          <h3>{day}</h3>
          {hours.map((slot) => (
            <WeatherCard key={uuidv4()} slot={slot} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default WeatherList;
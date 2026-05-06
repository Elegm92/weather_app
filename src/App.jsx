import { useState, useEffect } from "react";
import axios from "axios";
import WeatherList from "./WeatherList";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function groupByDay(list) {
  return list.reduce((acc, item) => {
    const day = item.dt_txt.split(" ")[0];
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {});
}

function App() {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: "Madrid",
        appid: API_KEY,
        units: "metric",
        lang: "es",
      },
    }).then(({ data }) => {
      const grouped = groupByDay(data.list);
      setForecast(grouped);
    });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {Object.keys(forescast).length > 0 && <WeatherList forecast={forecast}/>}
    </div>
  );
}

export default App;
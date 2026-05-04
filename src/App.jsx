import { useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: "Madrid",
        appid: API_KEY,
        units: "metric",
        lang: "es",
      },
    }).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
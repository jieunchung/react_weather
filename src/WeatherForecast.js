import React, { useState, useEffect } from "react";
import WeatherForecastData from "./WeatherForecastData";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div className="row forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 7) {
            return (
              <div className="col" key={index}>
                <WeatherForecastData data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "ceaf6bfc5bcf7b020bba053d944137d0";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

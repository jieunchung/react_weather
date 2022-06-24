import React from "react";
import Icon from "./Icon";

export default function WeatherForecastData(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <Icon icon={props.data.weather[0].icon} size={30} />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}

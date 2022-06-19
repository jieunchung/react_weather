import React from "react";
import Icon from "./Icon";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-6">
        <span className="icon">
          <Icon />
        </span>
        <span className="main-temp">{Math.round(props.data.temp)}</span>
        <span className="unit"> °C</span>

        <ul className="main-details">
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}m/s</li>
          <li>Realfeel: {Math.round(props.data.feelsLike)}°C</li>
        </ul>
      </div>
      <div className="col-6 city-details">
        {props.data.name}
        <div className="main-description">{props.data.description}</div>
      </div>
    </div>
  );
}

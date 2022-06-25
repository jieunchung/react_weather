import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <span>
      <span className="main-temp">{Math.round(props.temp)}</span>
      <span href="/" className="unit celsius">
        {" "}
        °C{" "}
      </span>
      <div className="main-details">
        <div>Humidity: {props.humidity}%</div>
        <div>Wind: {props.wind}m/s</div>
        <div>Realfeel: {Math.round(props.feel)}°C</div>
      </div>
    </span>
  );
}

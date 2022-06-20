import React from "react";
import Icon from "./Icon";
import "./Weather.css";
import Date from "./Date";
import Temperature from "./Temperature";

export default function Weather(props) {
  return (
    <div className="row">
      <div className="col-6">
        <span className="icon float-left">
          <Icon icon={props.data.icon} />
        </span>
        <Temperature temp={props.data.temp} />
        <div className="main-details">
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind}m/s</div>
          <div>Realfeel: {Math.round(props.data.feelsLike)}°C</div>
        </div>
      </div>

      <div className="col-6 city-details">
        {props.data.name}
        <div className="main-time">
          <Date date={props.data.date} />
        </div>
        <div className="main-description">{props.data.description}</div>
      </div>
    </div>
  );
}

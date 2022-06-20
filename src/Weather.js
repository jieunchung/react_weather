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
        <Temperature
          temp={props.data.temp}
          humidity={props.data.humidity}
          wind={props.data.wind}
          feel={props.data.feelsLike}
        />
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

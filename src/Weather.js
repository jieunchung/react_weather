import React from "react";
import Icon from "./Icon";
import "./Weather.css";
import Date from "./Date";
import Temperature from "./Temperature";

export default function Weather(props) {
  if (props.data.name === "Uppsala County") {
    return (
      <div className="row">
        <div className="col-6">
          <span className="icon float-left">
            <Icon icon={props.data.icon} size={50} />
          </span>
          <Temperature
            temp={props.data.temp}
            humidity={props.data.humidity}
            wind={props.data.wind}
            feel={props.data.feelsLike}
          />
        </div>

        <div className="col-6 city-details">
          <div className="city-name">Uppsala</div>
          <div className="main-time">
            <Date date={props.data.date} />
          </div>
          <div className="main-description">{props.data.description}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-6">
          <span className="icon float-left">
            <Icon icon={props.data.icon} size={50} />
          </span>
          <Temperature
            temp={props.data.temp}
            humidity={props.data.humidity}
            wind={props.data.wind}
            feel={props.data.feelsLike}
          />
        </div>

        <div className="col-6 city-details">
          <div className="city-name">{props.data.name}</div>
          <div className="main-time">
            <Date date={props.data.date} />
          </div>
          <div className="main-description">{props.data.description}</div>
        </div>
      </div>
    );
  }
}

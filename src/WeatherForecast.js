import React from "react";
import Icon from "./Icon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row forecast">
      <div className="col">
        <div className="forecast-day">Thu</div>
        <div className="forecast-icon">
          <Icon icon={"09d"} size={30} />
        </div>
        <div className="forecast-temp">
          <span className="forecast-temp-max">20°</span>
          <span className="forecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}

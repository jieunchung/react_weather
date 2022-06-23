import React from "react";
import Icon from "./Icon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ceaf6bfc5bcf7b020bba053d944137d0";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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

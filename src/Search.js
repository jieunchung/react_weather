import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import Icon from "./Icon.js";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function getWeather(response) {
    setLoaded(true);
    return setWeather({
      name: response.data.name,
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function searchValue(event) {
    event.preventDefault();
    let apiKey = "ceaf6bfc5bcf7b020bba053d944137d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function updateValue(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="form-inline" onSubmit={searchValue}>
      <div className="form-group mx-sm-3 mb-2">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              onChange={updateValue}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary mx-sm-3"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-8">
            <span className="icon">
              <Icon />
            </span>
            <span className="main-temp">{Math.round(weather.temp)}</span>
            <span className="unit"> °C</span>

            <ul className="main-details">
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}m/s</li>
              <li>Realfeel: {Math.round(weather.feelsLike)}°C</li>
            </ul>
          </div>
          <div className="col-4 city-details">
            {weather.name}
            <div className="main-description">{weather.description}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

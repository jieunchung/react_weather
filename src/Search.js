import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setData({
      ready: true,
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

  function searchValue() {
    let apiKey = "ceaf6bfc5bcf7b020bba053d944137d0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchValue();
  }

  function updateValue(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control form-input"
              type="search"
              placeholder="Enter a city..."
              onChange={updateValue}
            />
          </div>
          <div className="col-4">
            <input
              className="btn mx-sm-3 w-100 form-btn"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
    </form>
  );

  if (data.ready) {
    return (
      <div>
        {form}
        <Weather data={data} />
      </div>
    );
  } else {
    searchValue();
    return "Please try refreshing the page";
  }
}

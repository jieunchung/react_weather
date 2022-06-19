import axios from "axios";
import React, { useState } from "react";
import "./App.css";

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
    <form onSubmit={searchValue}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateValue}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

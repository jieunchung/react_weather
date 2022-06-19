import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState("");

  function getWeather(response) {
    return alert(`it is currently ${response.data.main.temp} in ${city}`);
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
  return (
    <form onSubmit={searchValue}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateValue}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  let fahrenheitTemp = (props.temp * 9) / 5 + 32;

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="main-temp">{Math.round(props.temp)}</span>
        <span className="unit celsius active"> °C </span>
        <a href="/" className="fahrenheit" onClick={showFahrenheit}>
          °F
        </a>{" "}
      </span>
    );
  } else {
    return (
      <span>
        <span className="main-temp">{Math.round(fahrenheitTemp)}</span>
        <a href="/" className="unit celsius" onClick={showCelsius}>
          {" "}
          °C{" "}
        </a>
        <span className="fahrenheit active">°F</span>{" "}
      </span>
    );
  }
}

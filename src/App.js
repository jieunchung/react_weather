import React from "react";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Search defaultCity="Uppsala" />
        </div>
        <WeatherForecast />
      </div>
      <Footer />
    </div>
  );
}

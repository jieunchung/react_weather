import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>React Weather App</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}

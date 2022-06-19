import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Search defaultCity="Los Angeles" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

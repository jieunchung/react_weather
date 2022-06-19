import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  );
}

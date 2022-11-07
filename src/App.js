import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <button className="btn btn-primary">hallo</button>
        <p>
          open-sourced at {""}
          <a
            className="0pen-source-link"
            href="https://github.com/bjohne/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          by Betina Johne{" "}
        </p>
      </div>
    </div>
  );
}

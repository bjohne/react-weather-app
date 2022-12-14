import React from "react";

import "./App.css";
import Weather from "./Weather";
import image from "./img/BlueSky3.png";

export default function App() {
  return (
    <div className="App">
      <div
        className="BackgroundImage"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container">
          <Weather defaultCity="Amsterdam" />
        </div>
        <div className="open-source-link">
          <a
            href="https://github.com/bjohne/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code&nbsp;
          </a>
          by Betina Johne
        </div>
      </div>
    </div>
  );
}

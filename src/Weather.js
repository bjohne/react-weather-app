import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-6">
          <form className="form">
            <input type="search" placeholder="Enter city" autocomplete="off" />
            <button>
              <i className="fas fa-search"></i>
            </button>

            <button className="btn-currentLocation">
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </form>
          <br />
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <div className="cityFirst">Amsterdam</div>
          <br />
          <ul className="list-group">
            <li>
              Humidity:
              <span className="humidity"> 65</span>%
            </li>
            <li>
              Wind:
              <span className="wind">12</span>km/h
            </li>
            <li className="currentDescription">Drizzle</li>
          </ul>
        </div>
      </div>
      <h1 className="currentTemperature">
        <span className="currentTempDegrees">23</span>
        <span className="currentTempUnit">°C</span>
      </h1>
      <p className="currentIcon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Icon"
        />
      </p>
      <div className="forecast-text">
        This week's weather in {""}
        <span className="citySecond">Amsterdam</span>
        <br />
        <span className="last-update">
          last update : <span className="current-date"></span>
        </span>
      </div>
      <br />
      <div className="weather-forecast"></div>
    </div>
  );
}

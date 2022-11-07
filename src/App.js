import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
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

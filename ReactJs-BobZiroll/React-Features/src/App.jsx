import React from "react";
import reactLogo from "./assets/react.svg";
import reactHalfLogo from "./assets/reacthalf.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <a href="#" className="logo-button">
          <img src={reactLogo} className="logo" alt="React logo" />
          ReactFacts
        </a>
        <nav>React Course-Project1</nav>
      </header>

      <div className="content">
        <main>
          <h1>Fun facts about React</h1>
          <ul>
            <li>Was first Release in 2013</li>
            <li>Was Originally created by Jorden Walker</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power Thousands of enterprise apps,including mobile apps</li>
          </ul>
        </main>
        <div className="react-image">
          <img
            src={reactHalfLogo}
            className="react-half-logo"
            alt="React Half Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

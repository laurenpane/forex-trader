// AIMS:
//UI retrieves FX prices, then trades when a certain price is met with a counterparty. Payment then settled on both sides and with the application.
//Due to compliance, some clients can’t trade with each other or can’t trade at all using us, so you reject their payments.
//When application does an end of day, and it does reconciliation, makes sure all payments are made and have no differences. Show daily commission made.

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Notifications from './components/Notifications'
import ProgressBar from './components/ProgressBar'

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
      <Notifications id="notificationComponent" right="100" />
      <ProgressBar id="progressBar" />
    </div>
  );
}

export default App;

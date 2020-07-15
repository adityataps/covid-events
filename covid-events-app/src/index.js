import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { setGlobal } from 'reactn';

setGlobal({
    page: 'home',
    summaryCheck: false,
    progress: 0,
    risk: 0,
    youRisk: 0,
    attendeesRisk: 0,
    distancingRisk: 0,
    durationRisk: 0,
    foodRisk: 0,
    locationRisk: 0,
    name: 'None',
    age: 0,
    attendees: 0,
    location: 'None',
    duration: 0,
    food: 'None',
    ppe: 'None',
    distancing: 'None',

    visitedYou: false,
    visitedAttendees: false,
    visitedGuestlist: false,
    visitedLocation: false,
    visitedDuration: false,
    visitedFood: false,
    visitedPPE: false,
    visitedDistancing: false,
    visitedSummary: false
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

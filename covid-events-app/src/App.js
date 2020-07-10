import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { home } from "./components/screens/home.js"
import { you } from "./components/screens/you.js"
import { attendees } from "./components/screens/attendees.js"
import { guestlist } from "./components/screens/guestlist.js"
import { location } from "./components/screens/location.js"
import { duration } from "./components/screens/duration.js"
import { food } from "./components/screens/food.js"
import { ppe } from "./components/screens/ppe.js"
import { distancing } from "./components/screens/distancing.js"

function App() {
  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact component={home} />
            <Route path={"/you"} exact component={you} />
            <Route path={"/attendees"} exact component={attendees} />
            <Route path={"/guestlist"} exact component={guestlist} />
            <Route path={"/location"} exact component={location} />
            <Route path={"/duration"} exact component={duration} />
            <Route path={"/food"} exact component={food} />
            <Route path={"/ppe"} exact component={ppe} />
            <Route path={"/distancing"} exact component={distancing} />
            <Route path={"/"} render={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
  );

}

export default App;

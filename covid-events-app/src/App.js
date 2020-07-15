import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Home, homeSidebar } from "./components/screens/home"
import { You, you, youSidebar } from "./components/screens/you"
import { Attendees, attendees, attendeesSidebar } from "./components/screens/attendees"
import { Guestlist, guestlist, guestlistSidebar } from "./components/screens/guestlist"
import { Location, location, locationSidebar } from "./components/screens/location"
import { Duration, duration, durationSidebar } from "./components/screens/duration"
import { Food, food, foodSidebar } from "./components/screens/food"
import { Ppe, ppe, ppeSidebar } from "./components/screens/ppe"
import { Distancing, distancing, distancingSidebar } from "./components/screens/distancing"
import { Summary,summary, summarySidebar } from "./components/screens/summary"
import { previewinvite } from "./components/screens/previewinvite";
import Notifications from './components/Notifications'
import ProgressBar from './components/ProgressBar'
import { Virtual, virtualSidebar } from "./components/screens/virtual"

function App() {
  return (
    <BrowserRouter>

        <div style={{ display: "flex" }}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}
            >
                <ul className = "sidebar" style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to={"/"}>home</Link>
                    </li>
                    <li>
                        <Link to={"/you"}>you</Link>
                    </li>
                    <li>
                        <Link to={"/attendees"}>attendees</Link>
                    </li>
                    <li>
                        <Link to={"/guestlist"}>guest list</Link>
                    </li>
                    <li>
                        <Link to={"/location"}>location</Link>
                    </li>
                    <li>
                        <Link to={"/duration"}>duration</Link>
                    </li>
                    <li>
                        <Link to={"/food"}>food</Link>
                    </li>
                    <li>
                        <Link to={"/ppe"}>ppe</Link>
                    </li>
                    <li>
                        <Link to={"/distancing"}>distancing</Link>
                    </li>
                    <li>
                        <Link to={"/summary"}>summary</Link>
                    </li>
                    <li>
                        <Link to={"/virtual"}>virtual</Link>
                    </li>
                </ul>

                You are on:

                <Switch>
                    <Route path={"/"} exact component={homeSidebar} />
                    <Route path={"/you"} exact component={youSidebar} />
                    <Route path={"/attendees"} exact component={attendeesSidebar} />
                    <Route path={"/guestlist"} exact component={guestlistSidebar} />
                    <Route path={"/location"} exact component={locationSidebar} />
                    <Route path={"/duration"} exact component={durationSidebar} />
                    <Route path={"/food"} exact component={foodSidebar} />
                    <Route path={"/ppe"} exact component={ppeSidebar} />
                    <Route path={"/distancing"} exact component={distancingSidebar} />
                    <Route path={"/summary"} exact component={summarySidebar} />
		    <Route path={"/virtual"} exact component={virtualSidebar} />
                    <Route path={"/"} render={() => <div>bruh</div>} />
                </Switch>
            </div>

            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/you"} exact component={You} />
                <Route path={"/attendees"} exact component={Attendees} />
                <Route path={"/guestlist"} exact component={Guestlist} />
                <Route path={"/location"} exact component={Location} />
                <Route path={"/duration"} exact component={Duration} />
                <Route path={"/food"} exact component={Food} />
                <Route path={"/ppe"} exact component={Ppe} />
                <Route path={"/distancing"} exact component={Distancing} />
                <Route path={"/summary"} exact component={Summary} />
		<Route path={"/virtual"} exact component={Virtual} />
                <Route path={"/previewinvite"} exact component={previewinvite} />
                <Route path={"/"} render={() => <div>404</div>} />
            </Switch>
            <Notifications></Notifications>
            <ProgressBar></ProgressBar>
        </div>
    </BrowserRouter>
  );

}

export default App;

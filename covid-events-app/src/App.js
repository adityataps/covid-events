import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { home, homeSidebar } from "./components/screens/home"
import { You, youSidebar } from "./components/screens/you"
import { Attendees, attendeesSidebar } from "./components/screens/attendees"
import { guestlist, guestlistSidebar } from "./components/screens/guestlist"
import { Location, locationSidebar } from "./components/screens/location"
import { Duration, durationSidebar } from "./components/screens/duration"
import { Food, foodSidebar } from "./components/screens/food"
import { ppe, ppeSidebar } from "./components/screens/ppe"
import { Distancing, distancingSidebar } from "./components/screens/distancing"
import { Summary, summarySidebar } from "./components/screens/summary"
import { previewinvite } from "./components/screens/previewinvite";
import Notifications from './components/Notifications'
import ProgressBar from './components/ProgressBar'

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
                    <Route path={"/"} render={() => <div>bruh</div>} />
                </Switch>
            </div>

            <Switch>
                <Route path={"/"} exact component={home} />
                <Route path={"/you"} exact component={You} />
                <Route path={"/attendees"} exact component={Attendees} />
                <Route path={"/guestlist"} exact component={guestlist} />
                <Route path={"/location"} exact component={Location} />
                <Route path={"/duration"} exact component={Duration} />
                <Route path={"/food"} exact component={Food} />
                <Route path={"/ppe"} exact component={ppe} />
                <Route path={"/distancing"} exact component={Distancing} />
                <Route path={"/summary"} exact component={Summary} />
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

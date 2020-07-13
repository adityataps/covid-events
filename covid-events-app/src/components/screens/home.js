import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const homeSidebar = () => {
    return(
        <div>homepage</div>
    );
};

export const home = () => {
    // this.state = { page: home }
    return(
            <div className={"container"}>
                <h1 className={"titleBar"}>
                    Welcome To Covid-Events!
                </h1>
                <p className={"contentSection"}>Welcome to the covid events app.
                    This application is here to help you plan social gathering
                    while also being aware of covid guidelines. We know that
                    it can be hard to plan a fun gathering during this time,
                    but it is possible to have a fun event while also following
                    social distancing rules. Click "Next" to get started
                </p>

                <Link to={"/you"}>
                    <Button className={"button"} style={{right: '-35%'}}>
                        <span>Next</span>
                    </Button>
                </Link>

            </div>
    );
};
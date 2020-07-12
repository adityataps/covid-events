import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const locationSidebar = () => {
    return(
        <div>location</div>
    );
};

export const location = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Location
            </h1>

            <Link to={"/guestlist"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/duration"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const attendeesSidebar = () => {
    return(
        <div>attendees</div>
    );
};

export const attendees = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Attendees
            </h1>

            <Link to={"/you"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/guestlist"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
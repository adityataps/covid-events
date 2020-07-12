import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const guestlistSidebar = () => {
    return(
        <div>guestlist</div>
    );
};

export const guestlist = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Guest List
            </h1>

            <Link to={"/attendees"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/location"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
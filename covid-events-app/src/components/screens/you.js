import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const youSidebar = () => {
    return (
        <div>you</div>
    );
};

export const you = () => {
    return (
        <div className={"container"}>
            <h1 className={"titleBar"}>
                About you
            </h1>


            <Link to={"/"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/attendees"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};

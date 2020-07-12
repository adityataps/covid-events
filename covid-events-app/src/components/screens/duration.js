import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const durationSidebar = () => {
    return(
        <div>duration</div>
    );
};

export const duration = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Duration
            </h1>

            <Link to={"/location"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/food"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
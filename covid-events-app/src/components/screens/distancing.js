import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const distancingSidebar = () => {
    return(
        <div>distancing</div>
    );
};

export const distancing = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Distancing
            </h1>

            <Link to={"/ppe"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/summary"}>
                <Button className={"button"}>
                    <span>Summary</span>
                </Button>
            </Link>

        </div>
    );
};
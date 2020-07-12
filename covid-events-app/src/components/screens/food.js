import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const foodSidebar = () => {
    return(
        <div>food</div>
    );
};

export const food = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Food
            </h1>

            <Link to={"/duration"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/ppe"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
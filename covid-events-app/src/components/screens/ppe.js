import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const ppeSidebar = () => {
    return(
        <div>ppe</div>
    );
};

export const ppe = () => {
    return(
        //setGlobal({progress: 6*100/8}),
        <div className={"container"}>
            <h1 className={"titleBar"}>
                PPE
            </h1>

            <Link to={"/food"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/distancing"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
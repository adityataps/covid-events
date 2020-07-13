import React from "react";
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'

export const summarySidebar = () => {
    return(
        <div>summary</div>
    );
};

export const summary = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Summary
            </h1>

            <Link to={"/previewinvite"}>
                <Button className={"button"} style={{right:'-8%'}}>
                    <span>Preview Invite</span>
                </Button>
            </Link>

            {/*<Link to={"/summary"}>*/}
                <Button className={"button"} style={{right:'-8%'}}>
                    <span>Send Invites</span>
                </Button>
            {/*</Link>*/}

            {/*<Link to={"/summary">*/}
                <Button className={"button"} style={{right:'-8%',
                                                    color: 'palevioletred',
                                                    border: '2px solid palevioletred'}}>
                    <span>Cancel</span>
                </Button>
            {/*</Link>*/}

        </div>
    );
};

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'
import React, { useGlobal } from "reactn";

export const Summary = () => {
    const [global, setGlobal] = useGlobal();

    return (
        <div>
            <p>Progress: {global.progress}</p>
            <h2>Summary</h2>
            <p>The host name is: {global.name}</p>
            <p>The host age is: {global.age} years old</p>
            <p>The attendee count is: {global.attendees} people</p>
            <p>The event will take place at/in the {global.location}</p>
            <p>The event will last around {global.duration} hours.</p>
            <p>The event will have food: {global.food}</p>
            <p>The event will have PPE: {global.ppe}</p>
            <p>The event will enforce social distancing: {global.distancing}</p>
            <p></p>
            <h2>The event risk factor is: {global.risk}</h2>
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
}

export const summarySidebar = () => {
    return(
        <div>summary</div>
    );
};


import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'
import React, { useGlobal } from "reactn";

export const Attendees = () => {
    const [ global, setGlobal ] = useGlobal();

    const increment = () => setGlobal(state => ({
        attendees: state.attendees+1,
        risk: global.risk+1
    }))

    const decrement = () => setGlobal(state => ({
        attendees: state.attendees-1,
        risk: global.risk-1
    }))

    return (
        <div>
            <p>Number of Attendees: {global.attendees}</p>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    );
}

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
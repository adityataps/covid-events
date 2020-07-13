import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'
import React, { useGlobal } from "reactn";

export const Duration = () => {
    const [ global, setGlobal ] = useGlobal();

    const increment = () => setGlobal(state => ({
        duration: state.duration+1,
        risk: global.risk+1
    }))

    const decrement = () => setGlobal(state => ({
        duration: state.duration-1,
        risk: global.risk-1
    }))

    //setGlobal({progress: (4*100/8 >= global.progress) ? 4*100/8 : global.progress});
    setGlobal({progress: 4*100/8})

    return (
        <div>
            <p>Number of Hours: {global.duration} hours</p>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    );
}

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
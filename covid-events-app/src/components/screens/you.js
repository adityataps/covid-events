import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './screens.css'
import React, { useGlobal } from "reactn";

export class You extends React.Component {

    updateName = (e) => {
        this.setGlobal({name: e.target.value});
    }
    updateAge = (e) => {
        this.setGlobal({age: e.target.value});
    }
    render() {
       return (
          this.setGlobal({progress: 0*100/8}),
          <div>
             Enter your name: <input type = "text" value = {this.global.name}
                onChange = {this.updateName} />
             Enter your age: <input type = "text" value = {this.global.age}
                onChange = {this.updateAge} />
          </div>
       );
    }
}

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

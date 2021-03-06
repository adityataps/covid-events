import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { useGlobal } from "reactn";
import {notify} from "../Notifications";

const Container = styled.div`
    background: #43b98b;
    position: relative;
    width: 90%
`;

const TitleBar = styled.h1`
    text-align: center;
    color: white;
    font-size: 20px;
    position: absolute;
    left: 10px;
    top: 0px;
`
const ContentSection = styled.p`
    text-align: left;
    color: white;
    font-size: 20px;
    position: absolute;
    height: 90%;
    padding-left: 10px;
    padding-right: 10px;
    top: 40px;
`

const FormSection = styled.form`
    position: absolute;
    top: 30%;
    left: 25px;
`

const NextButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    bottom: -88px;
    right: 0;
    position: absolute;
`;

const PrevButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    bottom: -88px;
    left: 0;
    position: absolute;
`;

const Selection = styled.div`
    margin: 20px 0px;
`



export class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: "location",
            selectedOption: this.global.location,
            arcadeSelectedOnce: false,
            restaurantSelectedOnce: false
        };
    }


    handleChange = (event) => {
        if(this.global.location === 'theater')
        {
            this.setGlobal({locationRisk: this.global.locationRisk - 8});
        } else if(this.global.location === 'park'){
            this.setGlobal({locationRisk: this.global.locationRisk - 1});
        } else if(this.global.location === 'driveway'){
            this.setGlobal({locationRisk: this.global.locationRisk - 2});
        } else if(this.global.location === 'backyard'){
            this.setGlobal({locationRisk: this.global.locationRisk - 3});
        } else if(this.global.location === 'living room'){
            this.setGlobal({locationRisk: this.global.locationRisk - 10});
        } else if(this.global.location === 'arcade'){
            this.setGlobal({locationRisk: this.global.locationRisk - 7});
        } else if(this.global.location === 'restaurant'){
            this.setGlobal({locationRisk: this.global.locationRisk - 6});
        } else {
            this.setGlobal({locationRisk: this.global.locationRisk - 0});
        }
        this.setState({selectedOption: event.target.value});
        this.setGlobal({location: event.target.value})
        if(this.global.location === 'theater')
        {
            this.setGlobal({locationRisk: this.global.locationRisk + 8});
        } else if(this.global.location === 'park'){
            this.setGlobal({locationRisk: this.global.locationRisk + 1});
        } else if(this.global.location === 'driveway'){
            this.setGlobal({locationRisk: this.global.locationRisk + 2});
        } else if(this.global.location === 'backyard'){
            this.setGlobal({locationRisk: this.global.locationRisk + 3});
        } else if(this.global.location === 'living room'){
            this.setGlobal({locationRisk: this.global.locationRisk + 10});
        } else if(this.global.location === 'arcade'){
            if(!this.state.arcadeSelectedOnce){
                this.setState({arcadeSelectedOnce: true});
                notify("Enclosed spaces with limited air circulation can be risky. Try to steer away form events where attendees will share materials as well.")
            }
            this.setGlobal({locationRisk: this.global.locationRisk + 7});
        } else if(this.global.location === 'restaurant'){
            this.setGlobal({locationRisk: this.global.locationRisk + 6});
            if(!this.state.restaurantSelectedOnce){
                this.setState({restaurantSelectedOnce: true});
                notify("A restaurant typically has groups in close proximity together, and you are prone to share dishes and food. Make sure the restaurant is hosting events outdoors, and keep your distance from staff.");
            }
        } else {
            this.setGlobal({locationRisk: this.global.locationRisk + 0});
        }
    }
    render(){

        if (!this.global.visitedLocation) {
            this.setGlobal({visitedLocation: true});
        }

        return(
            this.setGlobal({progress: 4*100/9}),
            <Container>
                <TitleBar>What kind of place would you host your event at?</TitleBar>
                <FormSection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="theater" checked={this.state.selectedOption === 'theater'} onChange={this.handleChange}/>
                        At the movie theater
                    </label>
                    </Selection>
                    <div className="radio">
                    <Selection>
                        <input type="radio" value="park" checked={this.state.selectedOption === 'park'} onChange={this.handleChange}/>
                        At the local park
                    </Selection>
                    </div>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="driveway" checked={this.state.selectedOption === 'driveway'} onChange={this.handleChange}/>
                        In your driveway
                    </label>
                    </Selection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="backyard" checked={this.state.selectedOption === 'backyard'} onChange={this.handleChange}/>
                        In your backyard
                    </label>
                    </Selection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="living room" checked={this.state.selectedOption === 'living room'} onChange={this.handleChange}/>
                        In your living room
                    </label>
                    </Selection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="arcade" checked={this.state.selectedOption === 'arcade'} onChange={this.handleChange}/>
                        At the local video arcade
                    </label>
                    </Selection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="restaurant" checked={this.state.selectedOption === 'restaurant'} onChange={this.handleChange}/>
                        At your favorite restaurant 
                    </label>
                    </Selection>
                </FormSection>
                <Link to={"/duration"}><NextButton>Next</NextButton></Link>
                <Link to={"/guestlist"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const locationSidebar = () => {
    return(
        <div>locationpage</div>
    );
};

export const location = () => {
    return(
        <div>locationpage</div>
    );
};

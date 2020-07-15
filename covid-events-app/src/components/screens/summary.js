import React, { useGlobal } from "reactn";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

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

const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const socialDistancingTrueWords = "You will enforce social distancing rules."
const socialDistancingFalseWords = "You will not enforce social distancing rules."

const foodYesIWords = "You will be providing all food."
const foodYesThemWords = "All attendees are bringing their own food."
const foodNoWords = "You will not be providing food."

export class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: summary
        };
    }

    calculateTotalRisk = () => {
        let totalRisk = this.global.youRisk + this.global.attendeesRisk + this.global.distancingRisk
        + this.global.durationRisk + this.global.foodRisk + this.global.locationRisk; 
        return totalRisk
    }

    calcluateSocialDistancingWords = () => {
        if(this.global.distancing){
            return socialDistancingTrueWords;
        }
        else{
            return socialDistancingFalseWords;
        }
    }

    calcluateFoodWords = () => {
        if(this.global.food === 'Yes, provided by me'){
            return foodYesIWords;
        }
        else if(this.global.food === 'Yes, provided by others'){
            return foodYesThemWords;
        }
        else if(this.global.food === 'No'){
            return foodNoWords;
        }
        return foodNoWords;
    }

    render(){

        if (!this.global.visitedSummary) {
            this.setGlobal({visitedSummary: true});
        }

        return(
            this.setGlobal({progress: 100}),
            <Container>
                <TitleBar>The summary of the event:</TitleBar>
                <ContentSection>
                    <p>Ok great job {this.global.name}! Now let's check your score and see how you did.</p>
                    <p>You are {this.global.age} years old. Risk factor: {this.global.youRisk}</p>
                    <p>You are inviting {this.global.attendees} people. Risk factor: {this.global.attendeesRisk}</p>
                    <p>You are hosting the event at {this.global.location}. Risk factor: {this.global.locationRisk}</p>
                    <p>You're holding the event for {this.global.duration} hours. Risk factor: {this.global.durationRisk}</p>
                    <p>{this.calcluateFoodWords()} Risk Factor: {this.global.foodRisk}</p>
                    <p>The event will have PPE: {this.global.ppe}</p>
                    <p>{this.calcluateSocialDistancingWords()} Risk Factor: {this.global.distancingRisk}</p>
                    <p></p>
                    <h2>The event risk factor is: {this.calculateTotalRisk()}</h2>
                </ContentSection>
        		<Link to={"/distancing"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const summarySidebar = () => {
    return(
        <div>summarypage</div>
    );
};

export const summary = () => {
    return(
        <div>summarypage</div>

    );
}

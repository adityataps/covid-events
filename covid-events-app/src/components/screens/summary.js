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
    font-size: 15px;
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
    bottom: 0;
    left: 0;
    position: absolute;
`;

const NextButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    bottom: 0;
    right: 0;
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



export class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: summary
        };
    }

    calculateTotalRisk = () => {
        let totalRisk = this.global.attendeesRisk + this.global.distancingRisk
        + this.global.durationRisk + this.global.foodRisk + this.global.locationRisk; 
        return totalRisk
    }

    render(){
        return(
            this.setGlobal({progress: 100}),
            <Container>
                <TitleBar>The summary of the event:</TitleBar>
                <ContentSection>
                    <p>The host name is: {this.global.name}</p>
                    <p>The host age is: {this.global.age} years old</p>
                    <p>The attendee count is: {this.global.attendees} people. Risk factor: {this.global.attendeesRisk}</p>
                    <p>The event will take place at/in the {this.global.location}. Risk factor: {this.global.locationRisk}</p>
                    <p>The event will last around {this.global.duration} hours. Risk factor: {this.global.durationRisk}</p>
                    <p>The event will have food: {this.global.food}. Risk Factor: {this.global.foodRisk}</p>
                    <p>The event will have PPE: {this.global.ppe}</p>
                    <p>The event will enforce social distancing: {this.global.distancing}. Risk Factor: {this.global.distancingRisk}</p>
                    <p></p>
                    <h2>The event risk factor is: {this.calculateTotalRisk()}</h2>
                </ContentSection>
        		<Link to={"/virtual"}><NextButton>Next</NextButton></Link>
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

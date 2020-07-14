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

export class Attendees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'attendees'
        };
    }
    increment = () => this.setGlobal(state => ({
        attendees: this.global.attendees+1,
        risk: this.global.risk+1
    }))

    decrement = () => this.setGlobal(state => ({
        attendees: this.global.attendees-1,
        risk: this.global.risk-1
    }))

    render(){
        return(
            this.setGlobal({progress: 1*100/8}),
            <Container>
                <TitleBar>How many people will attend?</TitleBar>
                <ContentSection>
                    <p>Number of Attendees: {this.global.attendees}</p>
                    <button onClick={() => this.increment()}>+</button>
                    <button onClick={() => this.decrement()}>-</button>
                </ContentSection>
                <Link to={"/guestlist"}><NextButton>Next</NextButton></Link>
                <Link to={"/you"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const attendeesSidebar = () => {
    return(
        <div>attendeespage</div>
    );
};

export const attendees = () => {
    return(
        <div>attendeespage</div>
    );
};

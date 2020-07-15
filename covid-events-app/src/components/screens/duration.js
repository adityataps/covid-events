import { Button } from 'react-bootstrap'
import './screens.css'
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

export class Duration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: duration
        };
    }
    increment = () => this.setGlobal(state => ({
        duration: this.global.duration+1,
        durationRisk: this.global.durationRisk+1
    }))

    decrement = () => this.setGlobal(state => ({
        duration: this.global.duration-1,
        durationRisk: this.global.durationRisk-1
    }))

    //setGlobal({progress: (4*100/8 >= global.progress) ? 4*100/8 : global.progress});
    render(){
        return (
            this.setGlobal({progress: 4*100/8}),
            <React.Fragment>
                <Container>
                    <TitleBar>How long will the event last?</TitleBar>
                    <ContentSection>
                        <p>Number of Hours: {this.global.duration} hours</p>
                        <button onClick={() => this.increment()}>+</button>
                        <button onClick={() => this.decrement()}>-</button>
                    </ContentSection>
                    <Link to={"/food"}><NextButton>Next</NextButton></Link>
                    <Link to={"/location"}><PrevButton>Prev</PrevButton></Link>
                </Container>
            </React.Fragment>
        );
    }
}

export const durationSidebar = () => {
    return(
        <div>durationpage</div>
    );
};

export const duration = () => {
    return(
        <div>durationpage</div>
    );
};

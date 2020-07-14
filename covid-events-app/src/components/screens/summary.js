import React from "react";
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

export class Summary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: summary
        };
    }

    render(){
        return(
            <Container>
                <TitleBar>Stuff about summary here!</TitleBar>
                <ContentSection>Stuff about summary here!
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
};

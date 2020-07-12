import React from "react";
import styled from 'styled-components';

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
    font-size: 10px;
    position: absolute;
    height: 90%;
    padding-left: 10px;
    padding-right: 10px;
    top: 40px;
`

const Button = styled.button`
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

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: home
        };
    }

    render(){
        return(
            <Container>
                <TitleBar>Welcome To Covid-Events!</TitleBar>
                <ContentSection>Welcome to the covid events app.
                This application is here to help you plan social gathering
                while also being aware of covid guidelines. We know that
                it can be hard to plan a fun gathering during this time,
                but it is possible to have a fun event while also following
                social distancing rules. Click "Next" to get started
                </ContentSection>
                <Button>Next</Button>
            </Container>
        );
    }
}

export const homeSidebar = () => {
    return(
        <div>homepage</div>
    );
};

export const home = () => {
    return(
        <div>homepage</div>
    );
};
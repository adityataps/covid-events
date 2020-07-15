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

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: home
        };
    }

    render(){
        this.setGlobal({progress: 0*100/9});
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
		<Link to={"/you"}><NextButton>Next</NextButton></Link>
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

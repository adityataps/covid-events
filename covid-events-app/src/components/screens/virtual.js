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
    bottom: -88px;;
    left: 0;
    position: absolute;
`;

export class Virtual extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: virtual
        };
    }

    render(){
        return(
            <Container>
                <TitleBar>Welcome To Covid-Events!</TitleBar>
                <ContentSection>Meeting in person may not always be safe
		or you may feel uncomfortable with physical interaction. We
		want to suggest some online resources that you can use.
		<br/> 		
		<a href="https://www.housebeautiful.com/lifestyle/fun-at-home/a32250895/virtual-hang-out-ideas">House Beautiful</a>
		<br/>
		<a href="https://www.buzzfeed.com/hbraga/virtual-hangout-ideas">Buzzfeed</a>
		<br/>
		<a href="https://www.goodhousekeeping.com/life/entertainment/g32098665/best-games-to-play-on-zoom/">Good Housekeeping</a>
                </ContentSection>
		<Link to={"/summary"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const virtualSidebar = () => {
    return(
        <div>virtualpage</div>
    );
};

export const virtual = () => {
    return(
        <div>virtualpage</div>
    );
};

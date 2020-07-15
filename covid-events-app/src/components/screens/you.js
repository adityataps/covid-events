import React, { useGlobal } from "reactn";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {visitedYou} from "../../App";
import { notify } from "../Notifications";

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
    position: relative;
    width: 100%;
    display:block;
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

export class You extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'you',
            ageCheckedOnce: false
        };
    }
    updateName = (e) => {
        this.setGlobal({name: e.target.value});
    }
    updateAge = (e) => {
        this.setGlobal({age: e.target.value});
        if(this.global.age >= 65){
            if(!this.state.ageCheckedOnce){
                this.setState({ageCheckedOnce: true})
                notify("You are above 65, and are classified an at risk individual. Considering avoiding close social contact if you can.");
            }
            this.setGlobal({youRisk: 8})
        }
    }
    render(){

        if (!this.global.visitedYou) {
            this.setGlobal({visitedYou: true})
        }

        return(
            // this.setGlobal({visitedYou: true}),
            this.setGlobal({progress: 1*100/9}),
            <Container>
                <TitleBar>Stuff about you here!</TitleBar>
                <ContentSection>
                    Enter your name: <input type = "text" value = {this.global.name}
                        onChange = {this.updateName} />
                </ContentSection>
                <ContentSection>
                Enter your age: <input type = "text" value = {this.global.age}
                        onChange = {this.updateAge} />
                </ContentSection>
                <Link to={"/attendees"}><NextButton>Next</NextButton></Link>
		        <Link to={"/"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const youSidebar = () => {
    return(
        <div>youpage</div>
    );
};

export const you = () => {
    return(
        <div>youpage</div>
    );
};

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

export class Ppe extends React.Component {
    constructor(props){
<<<<<<< Updated upstream
        super(props);
        this.state = {
            page: 'ppe'
        };
    }
=======
            super(props);
            this.state = {
                page: "ppe",
                selectedOption: this.global.ppe
            };
        }

        handleChange = (event) => {
            if(this.global.ppe === 'Masks')
            {
                this.setGlobal({risk: this.global.risk + 5});
            } else if(this.global.ppe === 'Gloves'){
                this.setGlobal({risk: this.global.risk + 2});
            } else if(this.global.ppe === 'Hand Sanitizer'){
                this.setGlobal({risk: this.global.risk + 3});
            } else if(this.global.ppe === 'Alcohol Wipes'){
                this.setGlobal({risk: this.global.risk + 3});
            } else if(this.global.ppe === 'Full PPE Suit'){
                this.setGlobal({risk: this.global.risk + 7});
            } else {
                this.setGlobal({risk: this.global.risk - 0});
            }
            this.setState({selectedOption: event.target.value});
            this.setGlobal({ppe: event.target.value})
            if(this.global.ppe === 'Masks')
            {
                this.setGlobal({risk: this.global.risk - 5});
            } else if(this.global.ppe === 'Gloves'){
                this.setGlobal({risk: this.global.risk - 2});
            } else if(this.global.ppe === 'Hand Sanitizer'){
                this.setGlobal({risk: this.global.risk - 3});
            } else if(this.global.ppe === 'Alcohol Wipes'){
                this.setGlobal({risk: this.global.risk - 3});
            } else if(this.global.ppe === 'Full PPE Suit'){
                this.setGlobal({risk: this.global.risk - 7});
            } else {
                this.setGlobal({risk: this.global.risk - 0});
            }
        }
>>>>>>> Stashed changes

    render(){
        return(
            <Container>
                <TitleBar>Stuff about ppe here!</TitleBar>
                <ContentSection>Stuff about ppe here!
                </ContentSection>
                <Link to={"/distancing"}><NextButton>Next</NextButton></Link>
                <Link to={"/food"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const ppeSidebar = () => {
    return(
        <div>ppepage</div>
    );
};


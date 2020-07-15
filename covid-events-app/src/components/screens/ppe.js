import React, { setGlobal } from "reactn";
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Checkbox from '../Checkbox'


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

const FormSection = styled.form`
    position: absolute;
    top: 30%;
    left: 25px;
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
const checkboxes = [
    {
        name: 'Masks',
        key: 'Masks',
        label: "Masks",
    },
    {
        name: 'Gloves',
        key: 'Gloves',
        label: "Gloves",
    },
    {
        name: 'Hand Sanitizer',
        key: 'Hand Sanitizer',
        label: "Hand Sanitizer",
    },
    {
        name: 'Alcohol Wipes',
        key: 'Alcohol Wipes',
        label: "Alcohol Wipes",
    },
    {
        name: 'Full PPE Suit',
        key: 'Full PPE Suit',
        label: "Full PPE Suit",
    }

]

export class Ppe extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                page: "ppe",
                selectedOption: this.global.ppe
            };
        }

<<<<<<< HEAD

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

        render(){
            if (!this.global.visitedPPE) {
                this.setGlobal({visitedPPE: true});
            }
            return(
                this.setGlobal({progress: 6*100/8}),
                <Container>
                    <TitleBar>Is there any PPE gear you are requiring?</TitleBar>
                    <FormSection>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Masks" checked={this.state.selectedOption === 'Masks'} onChange={this.handleChange}/>
                            Masks
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Gloves" checked={this.state.selectedOption === 'Gloves'} onChange={this.handleChange}/>
                            Gloves
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Hand Sanitizer" checked={this.state.selectedOption === 'Hand Sanitizer'} onChange={this.handleChange}/>
                            Hand Sanitizer
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Alcohol Wipes" checked={this.state.selectedOption === 'Alcohol Wipes'} onChange={this.handleChange}/>
                            Alcohol Wipes
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="Full PPE Suit" checked={this.state.selectedOption === 'Full PPE Suit'} onChange={this.handleChange}/>
                            Full PPE Suit
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input type="radio" value="None" checked={this.state.selectedOption === 'None'} onChange={this.handleChange}/>
                            None
                        </label>
                        </div>
                    </FormSection>
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


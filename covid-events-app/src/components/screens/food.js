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

export class Food extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: "food",
            selectedOption: this.global.food
        };
    }


    handleChange = (event) => {
        if(this.global.food === 'Yes, provided by me')
        {
            this.setGlobal({foodRisk: this.global.foodRisk - 7});
        } else if(this.global.food === 'Yes, provided by others'){
            this.setGlobal({foodRisk: this.global.foodRisk - 3});
        } else if(this.global.food === 'No'){
            this.setGlobal({foodRisk: this.global.foodRisk - 1});
        } else {
            this.setGlobal({foodRisk: this.global.foodRisk - 0});
        }
        this.setState({selectedOption: event.target.value});
        this.setGlobal({food: event.target.value})
        if(this.global.food === 'Yes, provided by me')
        {
            this.setGlobal({foodRisk: this.global.foodRisk + 7});
        } else if(this.global.food === 'Yes, provided by others'){
            this.setGlobal({foodRisk: this.global.foodRisk + 3});
        } else if(this.global.food === 'No'){
            this.setGlobal({foodRisk: this.global.foodRisk + 1});
        } else {
            this.setGlobal({foodRisk: this.global.foodRisk + 0});
        }
    }

    render(){

        if (!this.global.visitedFood) {
            this.setGlobal({visitedFood: true});
        }

        return(
            this.setGlobal({progress: 5*100/8}),
            <Container>
                <TitleBar>Will you have food at your event?</TitleBar>
                <FormSection>
                    <div className="radio">
                    <label>
                        <input type="radio" value="Yes, provided by me" checked={this.state.selectedOption === 'Yes, provided by me'} onChange={this.handleChange}/>
                        Yes, I will be providing food.
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="Yes, provided by others" checked={this.state.selectedOption === 'Yes, provided by others'} onChange={this.handleChange}/>
                        Yes, but everyone is bringing their own food.
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="No" checked={this.state.selectedOption === 'No'} onChange={this.handleChange}/>
                        No, I will not have any food.
                    </label>
                    </div>
                </FormSection>
                <Link to={"/ppe"}><NextButton>Next</NextButton></Link>
                <Link to={"/duration"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const foodSidebar = () => {
    return(
        <div>foodpage</div>
    );
};

export const food = () => {
    return(
        <div>foodpage</div>
    );
};

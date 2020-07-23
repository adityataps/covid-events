import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
import React, { useGlobal } from "reactn";

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

const Selection = styled.div`
    margin: 40px 0px;
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

export class Distancing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: "distancing",
            selectedOption: this.global.distancing
        };
    }


    handleChange = (event) => {
        if(this.global.distancing === 'Yes')
        {
            this.setGlobal({distancingRisk: this.global.distancingRisk - 1});
        } else if(this.global.distancing === 'No'){
            this.setGlobal({distancingRisk: this.global.distancingRisk - 10});
        } else {
            this.setGlobal({distancingRisk: this.global.distancingRisk - 0});
        }
        this.setState({selectedOption: event.target.value});
        this.setGlobal({distancing: event.target.value})
        if(this.global.distancing === 'Yes')
        {
            this.setGlobal({distancingRisk: this.global.distancingRisk + 1});
        } else if(this.global.distancing === 'No'){
            this.setGlobal({distancingRisk: this.global.distancingRisk + 10});
        } else {
            this.setGlobal({distancingRisk: this.global.distancingRisk + 0});
        }
    }

    render(){

        if (!this.global.visitedDistancing) {
            this.setGlobal({visitedDistancing: true});
        }

        return(
            this.setGlobal({progress: 8*100/9}),
            <Container>
                <TitleBar>CDC recommends that contact be kept at a minimum distance of 6 feet. Will you be enforcing social distancing rules?</TitleBar>
                <FormSection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="Yes" checked={this.state.selectedOption === 'Yes'} onChange={this.handleChange}/>
                        Yes.
                    </label>
                    </Selection>
                    <Selection className="radio">
                    <label>
                        <input type="radio" value="No" checked={this.state.selectedOption === 'No'} onChange={this.handleChange}/>
                        No.
                    </label>
                    </Selection>
                </FormSection>
                <Link to={"/summary"}><NextButton>Next</NextButton></Link>
                <Link to={"/ppe"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const distancingSidebar = () => {
    return(
        <div>distancingpage</div>
    );
};

export const distancing = () => {
    return(
        <div>distancingpage</div>
    );
};

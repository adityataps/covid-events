import styled from 'styled-components';
import { Link } from 'react-router-dom'
import React, { useGlobal } from "reactn";

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
            this.setGlobal({risk: this.global.risk - 7});
        } else if(this.global.food === 'Yes, provided by others'){
            this.setGlobal({risk: this.global.risk - 3});
        } else if(this.global.food === 'No'){
            this.setGlobal({risk: this.global.risk - 1});
        } else {
            this.setGlobal({risk: this.global.risk - 0});
        }
        this.setState({selectedOption: event.target.value});
        this.setGlobal({food: event.target.value})
        if(this.global.food === 'Yes, provided by me')
        {
            this.setGlobal({risk: this.global.risk + 7});
        } else if(this.global.food === 'Yes, provided by others'){
            this.setGlobal({risk: this.global.risk + 3});
        } else if(this.global.food === 'No'){
            this.setGlobal({risk: this.global.risk + 1});
        } else {
            this.setGlobal({risk: this.global.risk + 0});
        }
    }

    render(){
        return(
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
                <Button onClick={this.handleSubmit}>Next</Button>
            </Container>
        );
    }
}

export const foodSidebar = () => {
    return(
        <div>food</div>
    );
};

export const food = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Food
            </h1>

            <Link to={"/duration"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/ppe"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
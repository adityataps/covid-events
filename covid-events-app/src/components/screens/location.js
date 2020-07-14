import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

export class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: "location",
            selectedOption: "none"
        };
    }

    handleChange = (event) => {
        this.setState({selectedOption: event.target.value});
    }


    render(){
        return(
            <Container>
                <TitleBar>What kind of place would you host your event at?</TitleBar>
                <FormSection>
                    <div className="radio">
                    <label>
                        <input type="radio" value="theater" checked={this.state.selectedOption === 'theater'} onChange={this.handleChange}/>
                        At the movie theater
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="park" checked={this.state.selectedOption === 'park'} onChange={this.handleChange}/>
                        At the local park
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="backyard" checked={this.state.selectedOption === 'backyard'} onChange={this.handleChange}/>
                        In your backyard
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="livingroom" checked={this.state.selectedOption === 'livingroom'} onChange={this.handleChange}/>
                        In your living room
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="arcade" checked={this.state.selectedOption === 'arcade'} onChange={this.handleChange}/>
                        At the local video arcade
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="restaurant" checked={this.state.selectedOption === 'restaurant'} onChange={this.handleChange}/>
                        At your favorite restaurant 
                    </label>
                    </div>
                </FormSection>
                <Button onClick={this.handleSubmit}>Next</Button>
            </Container>
        );
    }
}

export const locationSidebar = () => {
    return(
        <div>location</div>
    );
};

export const location = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Location
            </h1>

            <Link to={"/guestlist"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/duration"}>
                <Button className={"button"}>
                    <span>Next</span>
                </Button>
            </Link>

        </div>
    );
};
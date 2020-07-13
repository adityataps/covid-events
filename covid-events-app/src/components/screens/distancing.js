import { Link } from 'react-router-dom'
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
            this.setGlobal({risk: this.global.risk - 1});
        } else if(this.global.distancing === 'No'){
            this.setGlobal({risk: this.global.risk - 10});
        } else {
            this.setGlobal({risk: this.global.risk - 0});
        }
        this.setState({selectedOption: event.target.value});
        this.setGlobal({distancing: event.target.value})
        if(this.global.distancing === 'Yes')
        {
            this.setGlobal({risk: this.global.risk + 1});
        } else if(this.global.distancing === 'No'){
            this.setGlobal({risk: this.global.risk + 10});
        } else {
            this.setGlobal({risk: this.global.risk + 0});
        }
    }

    render(){
        return(
            this.setGlobal({progress: 7*100/8}),
            <Container>
                <TitleBar>Will you be enforcing social distancing?</TitleBar>
                <FormSection>
                    <div className="radio">
                    <label>
                        <input type="radio" value="Yes" checked={this.state.selectedOption === 'Yes'} onChange={this.handleChange}/>
                        Yes.
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" value="No" checked={this.state.selectedOption === 'No'} onChange={this.handleChange}/>
                        No.
                    </label>
                    </div>
                </FormSection>
                <Button onClick={this.handleSubmit}>Next</Button>
            </Container>
        );
    }
}

export const distancingSidebar = () => {
    return(
        <div>distancing</div>
    );
};

export const distancing = () => {
    return(
        <div className={"container"}>
            <h1 className={"titleBar"}>
                Distancing
            </h1>

            <Link to={"/ppe"}>
                <Button className={"button"}>
                    <span>Previous</span>
                </Button>
            </Link>

            <Link to={"/summary"}>
                <Button className={"button"}>
                    <span>Summary</span>
                </Button>
            </Link>

        </div>
    );
};
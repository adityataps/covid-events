import React, { useGlobal } from "reactn";
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
             page: 'ppe',
             checkedItems: new Map()
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }

    handleCheckboxChange = changeEvent => {
        console.log('Hi2')
        const { name } = changeEvent.target;

        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            console.log(checkbox, "is selected.");
          });
      };

    render(){
        return(
            this.setGlobal({progress: 6*100/8}),
            <React.Fragment>
                <Container>
                    <TitleBar>Is there any PPE gear you are requiring? (Can select multiple answers)</TitleBar>
                    <ContentSection>
                        {
                            checkboxes.map(item => (
                            <p>
                                <label key = {item.key}>
                                    <Checkbox name={item.name} checked = {this.state.checkedItems.get(item.name)} onChange = {this.handleChange} />
                                    {item.name}
                                </label>
                            </p>
                            ))
                        }
                        <ul>{this.state.checkedItems}</ul>
                    </ContentSection>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <Link to={"/distancing"}><NextButton>Next</NextButton></Link>
                    <Link to={"/food"}><PrevButton>Prev</PrevButton></Link>
                </Container>
            </React.Fragment>
        );
    }
}

export const ppeSidebar = () => {
    return(
        <div>ppepage</div>
    );
};


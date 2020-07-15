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
    font-size: 10px;
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

const AgeInput = styled.input`
    width:3%
`;

export class Guestlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: guestlist
        };
    }

    render(){
        return(
            <Container>
<<<<<<< Updated upstream
                <TitleBar>Stuff about guestlist here!</TitleBar>
                <ContentSection>Stuff about guestlist here!
=======
                <TitleBar>Who are you inviting?</TitleBar>
                <ContentSection>
                    Enter the name of Guest 1: <input type = "text" value = {this.state.name1} onChange = {this.updateName1} />
                    Enter the age of Guest 1: <AgeInput type = "text" value = {this.state.age1} onChange = {this.updateAge1} />
                    Enter the email of Guest 1: <input type = "text" value = {this.state.email1}onChange = {this.updateEmail1} />
                </ContentSection>
                <ContentSection>
                        Enter the name of Guest 2: <input type = "text" value = {this.state.name2} onChange = {this.updateName2} />
                        Enter the age of Guest 2: <AgeInput type = "text" value = {this.state.age2} onChange = {this.updateAge2} />
                        Enter the email of Guest 2: <input type = "text" value = {this.state.email2} onChange = {this.updateEmail2} />
                </ContentSection>
                <ContentSection>
                    Enter the name of Guest 3: <input type = "text" value = {this.state.name3} onChange = {this.updateName3} />
                    Enter the age of Guest 3: <AgeInput type = "text" value = {this.state.age3} onChange = {this.updateAge3} />
                    Enter the email of Guest 3: <input type = "text" value = {this.state.email3} onChange = {this.updateEmail3} />
                </ContentSection>
                <ContentSection>
                    Enter the name of Guest 4: <input type = "text" value = {this.state.name4} onChange = {this.updateName4} />
                    Enter the age of Guest 4: <AgeInput type = "text" value = {this.state.age4} onChange = {this.updateAge4} />
                    Enter the email of Guest 4: <input type = "text" value = {this.state.email4} onChange = {this.updateEmail4} />
                </ContentSection>
                <ContentSection>
                    Enter the name of Guest 5: <input type = "text" value = {this.state.name5} onChange = {this.updateName5} />
                    Enter the age of Guest 5: <AgeInput type = "text" value = {this.state.age5} onChange = {this.updateAge5} />
                    Enter the email of Guest 5: <input type = "text" value = {this.state.email5} onChange = {this.updateEmail5} />
>>>>>>> Stashed changes
                </ContentSection>
                <Link to={"/location"}><NextButton>Next</NextButton></Link>
                <Link to={"/attendees"}><PrevButton>Prev</PrevButton></Link>
            </Container>
        );
    }
}

export const guestlistSidebar = () => {
    return(
        <div>guestlistpage</div>
    );
};

export const guestlist = () => {
    return(
        <div>guestlistpage</div>
    );
};

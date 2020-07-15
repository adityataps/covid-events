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

export class Guestlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'guestlist',
            name1: '',
            age1: '',
            email1: '',
            name2: '',
            age2: '',
            email2: '',
            name3: '',
            age3: '',
            email3: '',
            name4: '',
            age4: '',
            email4: '',
            name5: '',
            age5: '',
            email5: '',
        };
    }

    updateName1 = (e) => {
        this.setState({name1: e.target.value});
    }
    updateAge1 = (e) => {
        this.setState({age1: e.target.value});
    }
    updateEmail1 = (e) => {
        this.setState({email1: e.target.value});
    }

    updateName2 = (e) => {
        this.setState({name2: e.target.value});
    }
    updateAge2 = (e) => {
        this.setState({age2: e.target.value});
    }
    updateEmail2 = (e) => {
        this.setState({email2: e.target.value});
    }

    updateName3 = (e) => {
        this.setState({name3: e.target.value});
    }
    updateAge3 = (e) => {
        this.setState({age3: e.target.value});
    }
    updateEmail3 = (e) => {
        this.setState({email3: e.target.value});
    }

    updateName4 = (e) => {
        this.setState({name4: e.target.value});
    }
    updateAge4 = (e) => {
        this.setState({age4: e.target.value});
    }
    updateEmail4 = (e) => {
        this.setState({email4: e.target.value});
    }

    updateName5 = (e) => {
        this.setState({name5: e.target.value});
    }
    updateAge5 = (e) => {
        this.setState({age5: e.target.value});
    }
    updateEmail5 = (e) => {
        this.setState({email5: e.target.value});
    }

    render(){
        return(
            this.setGlobal({progress: 2*100/8}),
            <Container>
                <TitleBar>Who are you inviting?</TitleBar>
                <ContentSection>
                    <p>
                    Enter the name of Guest 1: <input type = "text" value = {this.state.name1}
                        onChange = {this.updateName1} />
                    </p>
                    <p>
                    Enter the age of Guest 1: <input type = "text" value = {this.state.age1}
                        onChange = {this.updateAge1} />
                    </p>
                    <p>
                    Enter the email of Guest 1: <input type = "text" value = {this.state.email1}
                        onChange = {this.updateEmail1} />
                    </p>
                    <p></p>
                    <p>
                    Enter the name of Guest 2: <input type = "text" value = {this.state.name2}
                        onChange = {this.updateName2} />
                    </p>
                    <p>
                    Enter the age of Guest 2: <input type = "text" value = {this.state.age2}
                        onChange = {this.updateAge2} />
                    </p>
                    <p>
                    Enter the email of Guest 2: <input type = "text" value = {this.state.email2}
                        onChange = {this.updateEmail2} />
                    </p>
                    <p></p>
                    <p>
                    Enter the name of Guest 3: <input type = "text" value = {this.state.name3}
                        onChange = {this.updateName3} />
                    </p>
                    <p>
                    Enter the age of Guest 3: <input type = "text" value = {this.state.age3}
                        onChange = {this.updateAge3} />
                    </p>
                    <p>
                    Enter the email of Guest 3: <input type = "text" value = {this.state.email3}
                        onChange = {this.updateEmail3} />
                    </p>
                    <p></p>
                    <p>
                    Enter the name of Guest 4: <input type = "text" value = {this.state.name4}
                        onChange = {this.updateName4} />
                    </p>
                    <p>
                    Enter the age of Guest 4: <input type = "text" value = {this.state.age4}
                        onChange = {this.updateAge4} />
                    </p>
                    <p>
                    Enter the email of Guest 4: <input type = "text" value = {this.state.email4}
                        onChange = {this.updateEmail4} />
                    </p>
                    <p></p>
                    <p>
                    Enter the name of Guest 5: <input type = "text" value = {this.state.name5}
                        onChange = {this.updateName5} />
                    </p>
                    <p>
                    Enter the age of Guest 5: <input type = "text" value = {this.state.age5}
                        onChange = {this.updateAge5} />
                    </p>
                    <p>
                    Enter the email of Guest 5: <input type = "text" value = {this.state.email5}
                        onChange = {this.updateEmail5} />
                    </p>
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

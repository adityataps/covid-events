import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #bd4040;
    color: white;
    padding: 16px;
    position: absolute;
    float: right;
    top: ${props => props.top}%;
    right: 0%;
    height: 100%;
    width: 10%;
    z-index: 999;
    transition: top 1.5s ease;
`;

const Button = styled.button`
    position: relative;
    top: -2%;
    left: 50%;
    display: block
`;
export default class Notification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            top: -110,
            text: "Example Text"
        };
    }

    onShow = () => {

    }

    showNotification = (myText) => {
        this.setState({
            top: 0,
            text: myText
        })
    }

    closeNotification = () => {
        this.setState({
            top: -110,
        })
    }

    render(){
        return(
            <React.Fragment>
                <Container id={this.props.id} top={this.state.top} >
                    <Button onClick={this.closeNotification}>✖️</Button>
                    {this.state.text}
                </Container>
            </React.Fragment>
        );
    }
}
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
export default class Notification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            top: -110,
        };
    }

    onShow = () => {

    }

    showNotification = () => {
        this.setState({
            top: 0,
        }, () => {
            setTimeout(() => {
                this.setState({
                    top: -110,
                })
            }, 3000);
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={this.showNotification}>Click me</button>
                <Container id={this.props.id} top={this.state.top} >
                    <a>✖️</a>
                    Example text
                </Container>
            </React.Fragment>
        );
    }
}
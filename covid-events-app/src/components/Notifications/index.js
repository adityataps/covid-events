import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    top: 16px;
    right: ${props => props.right}px;
    z-index: 999;
    transition: top 0.5s ease;
`;
export default class Notification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            right: 9999
        };
    }

    onShow = () => {

    }

    showNotification = () => {
        this.setState({
            right: 100
        }, () => {
            setTimeout(() => {
                this.setState({
                    right: 9999
                })
            }, 3000);
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={this.showNotification}>Click me</button>
                <Container id={this.props.id} top={this.state.top}>Example text</Container>
            </React.Fragment>
        );
    }
}
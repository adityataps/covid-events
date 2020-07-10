import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #111;
    color: white;
    padding: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

export default class ProgressBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            right: 9999
        };
    }

    // onShow = () => {

    // }

    // showNotification = () => {
    //     this.setState({
    //         right: 100
    //     }, () => {
    //         setTimeout(() => {
    //             this.setState({
    //                 right: 9999
    //             })
    //         }, 3000);
    //     })
    // }

    render(){
        return(
            <React.Fragment>
                 <Container id={this.props.id} >This is a progress bar!</Container>
             </React.Fragment>
        );
    }
}
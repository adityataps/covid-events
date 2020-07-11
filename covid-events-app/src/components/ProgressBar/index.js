import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #111;
    color: white;
    padding: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

const progress = document.querySelector('.progress-done');


export default class ProgressBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            right: 9999
        };
    }

    onShow = () => {

    }

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

    showProgress = () => {
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;
    }

    render(){
        return(
            <React.Fragment>
                 <Container id={this.props.id} >This is your progress bar!</Container>
             </React.Fragment>
        );
    }
}
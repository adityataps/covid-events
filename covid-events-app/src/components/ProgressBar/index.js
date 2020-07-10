import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #bd4040;
    color: white;
    padding: 16px;
    z-index: 999;
    transition: right 0.5s ease;
    position: relative
    top: 100px
    right: 100px
    height: 100%
    width: 10%
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
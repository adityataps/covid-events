//https://codepen.io/FlorinPop17/pen/yLyzmLZ

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
const Progress = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 30px;
    width: 300px;
`;

const ProgressDone = styled.div`
    background: linear-gradient(to left, #F2709C, #FF9472);
    box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${props => props.width}%;
    opacity: 1;
    transition: 1s ease 0.3s;
`;

const Button = styled.button`
`;


export default class ProgressBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            progress: 0
        };
    }
    
    updateProgress = (newProgress) => {
        this.setState({
            progress: newProgress
        })
    }

    render(){
        console.log("Calling ProgressBar's render method with progress of " + this.state.progress)
        return(
            <React.Fragment>
                 <Progress id={this.props.id} >
                     <ProgressDone width={this.state.progress}></ProgressDone>
                     Progress Bar
                 </Progress>
                 <Button onClick={() => this.updateProgress(100)}>Click me to fill progress bar</Button>
            </React.Fragment>
        );
    }
}
//https://codepen.io/FlorinPop17/pen/yLyzmLZ

import React from 'react';
import styled from 'styled-components';

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

function updateProgress(state) {
    this.setProgress({state})
}

export default class ProgressBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            progress: 0
        };
        updateProgress = updateProgress.bind(this)
    }

    onShow = () => {
    }

    // showProgress = () => {
    //     progress.style.width = progress.getAttribute('data-done') + '%';
    //     progress.style.opacity = 1;
    // }

    render(){
        return(
            <React.Fragment>
                 <Progress id={this.props.id} >
                     <ProgressDone width={this.state.progress}></ProgressDone>
                     Progress Bar
                 </Progress>
            </React.Fragment>
        );
    }
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';

// const AppWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const ProgressBarContainer = styled.div`
//   width: 300px;
//   margin-top: 200px;
// `;

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return(
//       <AppWrapper>
//         <ProgressBarContainer>
//         </ProgressBarContainer>
//       </AppWrapper>
//     );
//   }

// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

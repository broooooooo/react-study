import React from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';
import CSSModule from './CSSmodule';
import StyledComponent from './StyledComponent';

function App() {
  // return (
  //   <div className="App">
  //     {/* <header className="App-header"> */}
  //     <header>
  //       <img src={logo} className="logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // return (
  //   <div>
  //     <SassComponent/>
  //   </div>
  // )
  return (
    <div>
      {/* <CSSModule/> */}
      <StyledComponent/>
    </div>
  )
}

export default App;

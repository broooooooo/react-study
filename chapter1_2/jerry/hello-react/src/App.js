import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // return (
  const name = "리액트";
  return <div>{name === "리액트" && <h1>리액트입니다</h1>}</div>;
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // );
}

export default App;

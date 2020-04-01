import React, { Fragment } from "react"; // node_modules에서 가져옴, 여기가 react 모듈 설치됨
import logo from "./logo.svg";
import "./App.css";
/*
이렇게 외부 모듈을 사용하는건 Node.js에서 지원 해주는 기능 (Node가 브라우저 밖에서도 JS 실행을 가능케해줘서)
css, svg 파일도 가져올 수 있으며 각 loader가 담당
i.e.) css-loader, file-loader (img, font, etc.), babel-loader (converts JS tp ECMAScript5)
*/

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
  // in JSX -> React.createElement
  // return React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
}
export default App;

/* 2.4.1 감싸인 요소
- 요소로 감싸지 않으면 문제 발생
- Virtual DOM diff시 컴포넌트로 감싸야 효율적으로 작동함
- 꼭 div 요소가 필요없다면 Fragment 사용
- Fragment는 <Fragment></Fragment> OR <></>로 표현
*/
// function WrongApp(){
//   return (
//     <h1> 리액트 안뇽!</h1>
//     <h2> 잘 작동하니?</h2>
//   );
// }
// export default WrongApp;

/* 2.4.2~2.4.5 자바스크립트 표현
const, let 등 사용 가능
*/
// function ReactRox(){
//  const name = '리액트'
//   return (
//     <div>
//       {name === '리액트' ? (<h1>리액트에요</h1>) : (<h1>리액트가 아니에요</h1>)}
//     </div>
//   );
// }
// export default ReactRox;

// function Comment() {
//   const name = '리액트';
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다. */}
//       <div
//         className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성 할 수 있습니다.
//       >
//         {name}
//       </div>
//       // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//       <input />
//     </>
//   );
// }
// export default Comment;

// function Styling() {
//   const name = "리액트";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16
//   };
//   return <div style={style}>{name}</div>;
// }
// export default Styling;

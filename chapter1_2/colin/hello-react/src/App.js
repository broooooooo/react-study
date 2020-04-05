import React from 'react'; // node_moduels에 있는 것을 import (node.js기능)
// webpack bundler를 이용해 load

// 1 JSX
// // 1-1) JSX 방식
// function App() {
//   return (
//     // div와 같이 부모요소 하나로 감싸야 함
//     <Fragment>
//       Hello <b> react </b> <br></br>
//       안녕 <p> REACT</p>
//     </Fragment>
//   )
// }

// 부모요소로 감싸는 이유

// // 1-2) React component 방식
// function App(){
//   return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"))
// }

// // 2 JS 표현
// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>{name} 잘 작동하니?</h2>
//     </>
//   )
// }

// // 3 조건부 연산자
// function App() {
//   const name = '리액트1';

//   // // 1) 삼항 연산자
//   // return (
//   //   <div>
//   //     {name === '리액트'? (
//   //       <h1>리액트입니다.</h1>
//   //     ):(
//   //       <h2>리액트가 아닙니다.</h2>
//   //     )}
//   //   </div>
//   // )

//   // 2) AND (&&) 연산자
//   return (
//     <div>
//       {/* {name === '리액트'? <h1>리액트입니다.</h1> : null}; */}
//       {name === '리액트' &&  <h1>리액트입니다.</h1>}
//     </div>
//   )
// }

// // 4 undefined
// function App(){
//   const name = undefined;
//   // return name;

//   // // OR(||) 연산자를 이용해서 undefined 처리
//   // return name || '값이 undefined입니다.';

//   return (
//     <div>{name || '리액트 undefined'}</div>
//   )
// }

// 5 Inline styling
function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  // return <div style = {style}>{name}</div>

  return (
    <div className="App">
      {name}
      /*하지만 이런 주석이나,*/
      <input />
    </div>
  );
}

export default App;

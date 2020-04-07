/*
프로젝트를 번들링해주는 코드
이런 모듈을 묶어서(bundle) 해주는 bundler가 웹팩, Parcel, browserify
리액트에서는 웹팩 사용하는 추새
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
  <React.StrictMode>
    <App />           {/*랜더링할 모듈*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

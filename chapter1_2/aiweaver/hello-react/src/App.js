import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const name = '리액트';
    return (
        <>
            {/* 주석은 이렇게 작성합니다. */}
            <div className="react">
                {name}
            </div>
            <input/>
        </>
    );
}

export default App;

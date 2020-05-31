// import React from 'react';

// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map((name, index)=> <li key={index}>{name}</li>);
//     return <ul>{nameList}</ul>
// }

// export default IterationSample

import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목 추가 시 ID

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        // push대신 concat을 쓴 이유 -> push는 기존값을 바꾸지만 concat은 새로운 배열을 만듦
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames)
    }


    // 함수의 인자를 받는 경우에는  (onRemove), 반드시 {함수형}으로 표현해야함
    const nameList = names.map(name => 
        <li 
        key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>);

    return(
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSample
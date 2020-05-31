import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
    console.log('평균값계산중')
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a+b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null); // local 변수를 관리할 때 도 씀

    // 이벤트 핸들러 함수는 컴포넌트 리렌더링 시 매번 새로 생성
    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []); // 이렇게 하면 컴포넌트 처음 생성시에만 함수 생성, 이전 state를 참조하지 않기 떄문에 []가능


    // const onInsert = (e) => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // };
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus()
    }, [number, list]); // 이전 state를 참조해서 더하기 때문에 []안에 값을 넣어줘야 함

    // list가 변할떄만 getAverage를 호출. 아닐 경우는 이전 값 사용
    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}

export default Average;
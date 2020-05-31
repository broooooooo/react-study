// // useState 방식
// import React, { useState } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>
//                 현재 카운터는 <b>{count}</b> 입니다.
//             </p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//         </div>
//     )
// }

// export default Counter;


// useReducer 방식
import React, { useReducer } from 'react';

// 컴포넌트 업데이트 로직을 컴포넌트와 분리/독립할 수 있음
function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type){
        case 'INCREMENT':
            return { value : state.value + 1};
        case 'DECREMENT':
            return { value : state.value - 1};
        default:
            // 아무것도 해당되지 않을 때 기존 값 return
            return state;        
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value : 0 });

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>+1</button>
        </div>
    )
}

export default Counter;
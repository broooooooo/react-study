import React, { useState } from 'react';

const Say = () => {
    // [state, method(setter)] 방식
    const [message, setMessage] = useState('')
    const onClickEnter = () => setMessage('안녕하세요!')
    const onClickLeave = () => setMessage('Bye!')

    const [color, setColor] = useState('black')

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{ color : 'red'}} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color : 'black'}} onClick={() => setColor('black')}>
                검은색
            </button>
            <button style={{ color : 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    )
}

export default Say;

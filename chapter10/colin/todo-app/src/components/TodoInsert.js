import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    // 함수가 매번 만들어지지 않도록(렌더링 할때 마다), useCallback을 사용
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, [])

    const onSubmit = useCallback(
        e => {
            onInsert(value); // 부모의 props로 전달
            setValue('');

            // submit이 새로고침을 만들기에, 이를 방지
            e.preventDefault();
        },
        [onInsert, value],
    );


    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;
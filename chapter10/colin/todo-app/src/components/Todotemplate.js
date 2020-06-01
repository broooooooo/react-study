import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            {/* TodoInsert & TodoList를 보여주는 children */}
            <div className="content">{children}</div> 
        </div>
    )
}

export default TodoTemplate;
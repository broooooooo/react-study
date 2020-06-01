import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss'

// App.js로 부터 props로 전달받음
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {/* <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/> */}
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default TodoList;
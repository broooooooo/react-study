import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/Todotemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // State를 App에서 관리
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'리액트기초',
      checked:true,
    },
    {
      id:2,
      text:'리액트 스타일링',
      checked:true,
    },
    {
      id:3,
      text:'일정 관리 앱',
      checked:false,
    },
  ])

  // State를 변화하는 함수들 (nextId, onInsert, onRemove)

  // 고유값으로 이용할 ID, ref를 이용하여 변수 사용 (rendering되는 것이 아니기 때문에 ref이용)
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked:false,
      };

      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos]
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !==id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
    },[todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;
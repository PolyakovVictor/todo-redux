import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeTodo } from '../store/reducers/todoReducer';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

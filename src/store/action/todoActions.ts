import { ADD_TODO, REMOVE_TODO, Todo, TodoActionTypes } from '../../types/todoTypes';

export const addTodo = (todo: Todo): TodoActionTypes => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number): TodoActionTypes => ({
  type: REMOVE_TODO,
  payload: id,
});

export interface Todo {
    id: number;
    text: string;
}

export interface TodoState {
    todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: number;
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

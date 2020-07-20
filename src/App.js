import React, { useState } from 'react';
import { func, string, bool, number, arrayOf, shape } from 'prop-types';

import './App.css';

const todoItem = { todoItem: '' };

const getTodoError = (value) => {
  if (value.length < 3) {
    return 'Invalid input. The value must be more than 3 letters';
  }
  return '';
};

const App = ({ todos, handleAddTodoItem, handleToggleTodoItem }) => {
  const [data, setTodoItem] = useState(todoItem);
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoItem({ ...data, [name]: value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getTodoError(data.todoItem)) {
      handleAddTodoItem(data);
      setTodoItem(todoItem);
    }
    setErrors({ todoItem: getTodoError(data.todoItem) });
  };

  const handleClick = (todo) => {
    handleToggleTodoItem(todo.id);
  };

  return (
    <div className="app">
      <h1>A Simple To Do App</h1>
      <form onSubmit={handleSubmit}>
        <div className="todo-list-form">
          <div>
            <input
              type="text"
              name="todoItem"
              onChange={handleChange}
              value={data.todoItem}
              style={{ borderColor: errors.todoItem && 'red' }}
            />
            {errors.todoItem && <span style={{ marginBottom: '2rem' }}>{errors.todoItem}</span>}
          </div>
          <input type="submit" value="Add Todo Item" />
        </div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li
              role="presentation"
              key={`${todo.id}`}
              onClick={() => handleClick(todo)}
              style={{ textDecoration: todo.done ? 'line-through' : 'none', display: 'list-item' }}
            >
              {todo.todoItem}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

App.propTypes = {
  todos: arrayOf(
    shape({
      todoItem: string,
      done: bool,
      id: number,
    })
  ).isRequired,
  handleAddTodoItem: func.isRequired,
  handleToggleTodoItem: func.isRequired,
};

export default App;

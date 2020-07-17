import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, string, bool, number, arrayOf, shape } from 'prop-types';

import { addTodoItem } from './redux/actions';

import './App.css';

const mapDispatchToProps = (dispatch) => ({
  handleAddTodoItem(todoItem) {
    dispatch(addTodoItem(todoItem));
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const todoItem = { todoItem: '', done: false };

const App = ({ todos, handleAddTodoItem }) => {
  const [data, setTodoItem] = useState(todoItem);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoItem({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodoItem(data);
    setTodoItem(todoItem);
  };

  return (
    <div className="app">
      <h1>A Simple To Do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoItem" onChange={handleChange} value={data.todoItem} />
        <input type="submit" value="Add Todo Item" />
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li>{todo.todoItem}</li>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

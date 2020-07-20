import { ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM } from '../constant';
import initialState from '../initialState';

const addTodoItemReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return state.concat({ ...action.todoItem, id: state.length + 1, done: false });
    case DELETE_TODO_ITEM:
      return state.filter((item) => item.id !== action.id);
    case TOGGLE_TODO_ITEM:
      return state.map((todoItem) => (todoItem.id === action.id ? { ...todoItem, done: !todoItem.done } : todoItem));
    default:
      return state;
  }
};

export default addTodoItemReducer;

import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './constant';

export const addTodoItem = (todoItem) => ({
  type: ADD_TODO_ITEM,
  todoItem,
});

export const deleteTodoItem = (todoItemId) => ({
  type: DELETE_TODO_ITEM,
  todoItemId,
});

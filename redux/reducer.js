const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

const addTodoItemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return state.concat({ ...action.todoItem, id: state.length + 1 });
    default:
      return state;
  }
};

export default addTodoItemReducer;

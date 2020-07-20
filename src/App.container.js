import { connect } from 'react-redux';
import { addTodoItem, toggleTodoItem } from './redux/actions';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  handleAddTodoItem(todoItem) {
    dispatch(addTodoItem(todoItem));
  },
  handleToggleTodoItem(id) {
    dispatch(toggleTodoItem(id));
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

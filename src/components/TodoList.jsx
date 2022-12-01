import React from 'react';
import { List } from '@mui/material';
import PropTypes from 'prop-types';
import Todo from './Todo';

function TodoList({ todos, onTodoClick }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;

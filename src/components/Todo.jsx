import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';
import './styles/styles.css';

function Todo({ onClick, completed, text }) {
  return (
    <ListItem
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      className="ListItem"
      id={text}
    >
      <span className="material-symbols-outlined">done</span>
      {text}
    </ListItem>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;

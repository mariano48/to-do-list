import { Button, Input } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

function AddTodo({ dispatch }) {
  let input;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Add new to-do:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <Input
          ref={(node) => {
            input = node;
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          color="success"
          style={{ marginLeft: '10px' }}
        >
          Añadir tarea
        </Button>
      </form>
    </div>
  );
}
AddTodo = connect()(AddTodo);

export default AddTodo;

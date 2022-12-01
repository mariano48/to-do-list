import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function Link({ active, children, onClick }) {
  if (active) {
    return (
      <Button color="success" disabled={active}>
        {children}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      color="success"
      style={{ textDecoration: 'underlined' }}
    >
      {children}
    </Button>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

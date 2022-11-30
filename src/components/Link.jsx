import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
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

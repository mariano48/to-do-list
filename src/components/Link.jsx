import React from 'react';
import PropTypes from 'prop-types';

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

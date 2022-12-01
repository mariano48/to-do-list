import React from 'react';
import FilterLink from './containers/FilterLink';

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '25px'
      }}
    >
      <FilterLink filter="SHOW_ALL">Todos</FilterLink>
      {'  ||  '}
      <FilterLink filter="SHOW_ACTIVE">Doing</FilterLink>
      {'  ||  '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </div>
  );
}

export default Footer;

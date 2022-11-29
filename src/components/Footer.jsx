import React from 'react';
import FilterLink from './containers/FilterLink';

function Footer() {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">Todos</FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">Doing</FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
}

export default Footer;

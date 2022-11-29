import React from 'react';
import AddTodo from './components/containers/AddTodo';
import VisibleTodoList from './components/containers/VisibleTodoList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

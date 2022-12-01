import React from 'react';
import AddTodo from './components/containers/AddTodo';
import VisibleTodoList from './components/containers/VisibleTodoList';
import Footer from './components/Footer';
import './appstyles.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <AddTodo />
      </div>
      <Footer />
      <VisibleTodoList />
    </div>
  );
}

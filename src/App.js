import React from "react";
import AddTodo from "./components/containers/AddTodo";
import VisibleTodoList from "./components/containers/VisibleTodoList";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;

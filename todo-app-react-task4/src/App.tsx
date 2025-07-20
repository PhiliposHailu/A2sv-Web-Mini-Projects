import React from "react";
import TodoList from "./componets/TodoList";
import "./css/App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;

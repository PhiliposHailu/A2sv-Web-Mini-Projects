import type TodoTypes from "../types/TodoTypes";
import { LOCAL_STORAGE_KEY } from "./storage";

export default function updateTodos(updatedTodo: TodoTypes): TodoTypes {
  const todos: TodoTypes[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");

  const newTodos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );

  localStorage.setItem("todos", JSON.stringify(newTodos));

  return updatedTodo;
}

import type TodoTypes from "../types/TodoTypes";
import { LOCAL_STORAGE_KEY } from "./storage";

export default function addNewTodo(task: string): TodoTypes {
  const todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");

  const newTodo: TodoTypes = {
    id: Date.now(),
    task,
    completed: false,
  };

  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));

  return newTodo;
}

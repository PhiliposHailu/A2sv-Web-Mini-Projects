import type TodoTypes from "../types/TodoTypes";
import { LOCAL_STORAGE_KEY } from "./storage";


export default function deleteTodos(id: number): void {
  const todos: TodoTypes[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
  const newTodos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

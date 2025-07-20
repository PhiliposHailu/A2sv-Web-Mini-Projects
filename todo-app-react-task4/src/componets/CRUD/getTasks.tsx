import type TodoTypes from "../types/TodoTypes";
import { LOCAL_STORAGE_KEY } from "./storage";

export default function getTodos(): TodoTypes[] {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}

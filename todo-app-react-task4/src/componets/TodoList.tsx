import { useState } from "react";
import TodoItem from "./TodoItem";
import type TodoTypes from "./types/TodoTypes";
import getTodos from "./CRUD/getTasks";
import updateTodos from "./CRUD/updateTask";
import deleteTodos from "./CRUD/deleteTask";
import addNewTodo from "./CRUD/addNewTask";
import { LOCAL_STORAGE_KEY } from "../componets/CRUD/storage";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(getTodos());
  const [isEditingId, setIsEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");
  const [newTask, setNewTask] = useState("");

  // Add new task handler
  function handleAddTask() {
    if (newTask.trim() === "") return;
    const newTodo = addNewTodo(newTask.trim());
    setTodos([...todos, newTodo]);
    setNewTask("");
  }

  // Edit button clicked
  function handleEditBtn(id: number, text: string) {
    setIsEditingId(id);
    setEditedText(text);
  }

  // Cancel editing
  function handleCancelBtn() {
    setIsEditingId(null);
    setEditedText("");
  }

  // Save edited task
  function handleSaveBtn(id: number) {
    if (editedText.trim() === "") return;

    const updatedTodo = updateTodos({
      id,
      task: editedText.trim(),
      completed: false,
    });

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    setIsEditingId(null);
    setEditedText("");
  }

  // Delete task
  function handleDeleteBtn(id: number) {
    deleteTodos(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    if (isEditingId === id) setIsEditingId(null);
  }

  // Toggle completed state
  function handleToggle(id: number) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  }

  return (
    <>
      <div className="input-section">
        <input
          type="text"
          className="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask} className="add-btn">
          Add
        </button>
      </div>

      <ul className="task-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            isEditing={isEditingId === todo.id}
            onStartEdit={() => handleEditBtn(todo.id, todo.task)}
            onCancelEdit={handleCancelBtn}
            onDelete={() => handleDeleteBtn(todo.id)}
            onUpdate={() => handleSaveBtn(todo.id)}
            editedText={editedText}
            setEditedText={setEditedText}
            onToggle={() => handleToggle(todo.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;

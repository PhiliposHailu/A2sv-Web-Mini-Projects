import React from "react";
import { FaSave, FaEdit, FaTrash } from "react-icons/fa";

interface TodoItemProps {
  task: string;
  completed: boolean;
  isEditing: boolean;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: () => void;
  editedText: string;
  setEditedText: React.Dispatch<React.SetStateAction<string>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  isEditing,
  onStartEdit,
  onCancelEdit,
  onToggle,
  onDelete,
  onUpdate,
  editedText,
  setEditedText,
}) => {
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <button onClick={onUpdate} className="save-btn" title="Save">
            <FaSave />
          </button>
          <button onClick={onCancelEdit} className="cancel-btn" title="Cancel">
            ✕
          </button>
        </>
      ) : (
        <>
          <span className="task-text">{task}</span>
          <button onClick={onStartEdit} className="edit-btn" title="Edit">
            <FaEdit />
          </button>
        </>
      )}
      <button onClick={onDelete} className="delete-btn" title="Delete">
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;

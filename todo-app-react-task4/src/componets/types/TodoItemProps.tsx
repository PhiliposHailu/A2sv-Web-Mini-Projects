export default interface TodoItemProps {
  task: string;
  completed: boolean;
  isEditing: boolean;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: () => void;
  editedText: string;
  setEditedText: (value: string) => void;
}
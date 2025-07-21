# React Todo App with LocalStorage

## 🌊 Overview

This is a simple yet powerful Todo App built using **React** with **TypeScript**, featuring:

- Adding, editing, and deleting tasks
- Task completion toggle with checkbox
- Persistent storage using `localStorage`
- Component-based structure
- Clean separation of CSS

## 🔧 Tech Stack

- React (via Vite)
- TypeScript
- CSS Modules / App-wide CSS
- LocalStorage API

---

## 🔄 Features

- **Add Task**: Type and press enter or click add button
- **Edit Task**: Click edit, modify the task, then save or cancel
- **Delete Task**: Click delete icon
- **Mark Complete**: Click checkbox to toggle completion
- **Persistent**: Tasks are saved in your browser's localStorage

---

## 📖 File Structure

```
src/
├── components/
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   ├── crud/
│   │   ├── addNewTask.tsx
│   │   ├── deleteTask.tsx
│   │   ├── getTasks.tsx
│   │   └── updateTask.tsx
│   └── types/
│       └── TodoTypes.tsx
|       └── TodoItemProps.tsx
├── App.tsx
├── main.tsx
├── index.css
└── App.css
```

---

## ⚡ Setup & Run

### 1. Clone this repo

```bash
git clone https://github.com/PhiliposHailu/A2sv-Web-Mini-Projects
cd todo-app-react-task4
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to see the app.

---

## 🚀 Future Improvements

- Due date support
- Task categories (All, Completed, Incomplete ... )
- Drag and drop reordering

---

## 👋 Acknowledgements

Inspired by simple todo apps and React component design best practices.

---

## ✉ Contact

Feel free to reach out at [hailuphilipos@gmail.com](mailto:hailuphilipos@gmail.com) or raise an issue/pull request.

Happy coding! 🚀

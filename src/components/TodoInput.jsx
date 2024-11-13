import { useState } from "react";
export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  function addTodo() {
    handleAddTodos(todoValue);
    setTodoValue("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      addTodo();
    }
  }
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        onClick={(e) => {
          addTodo();
        }}
      >
        Add
      </button>
    </header>
  );
}

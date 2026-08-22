import React from 'react';

export function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import DeleteButton from './Buttons/DeleteButton';

export default function TodoList({ toDoList, onToggle, onDelete }) {
  return (
    <ul className="js--todos-wrapper">
      {toDoList.map(task => (
        <li
          key={task.id}
          className={`todo-item ${task.checked ? 'todo-item--checked' : ''}`}
        >
          <input
            className="checkbox"
            type="checkbox"
            checked={task.checked || false}
            onChange={() => onToggle(task.id, task.checked)}
          />
          <span className="todo-item__description">{task.text}</span>

          <DeleteButton
            text="Видалити"
            className="todo-item__delete"
            id={task.id}
            onClick={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

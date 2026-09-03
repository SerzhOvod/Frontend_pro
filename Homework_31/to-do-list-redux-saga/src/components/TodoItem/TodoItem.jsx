import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SaveButton } from '../Buttons/SaveButton';
import { CancelButton } from '../Buttons/CancelButton';
import { EditButton } from '../Buttons/EditButton';
import { DeleteButton } from '../Buttons/DeleteButton';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const [text, setText] = useState(todo.text);

  const handleToggle = () => {
    dispatch({
      type: 'todos/toggleTodoRequest',
      payload: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'todos/deleteTodoRequest',
      payload: todo.id,
    });
  };

  const handleEdit = () => {
    if (!text.trim()) {
      return;
    }

    dispatch({
      type: 'todos/updateTodoRequest',
      payload: {
        id: todo.id,
        text,
      },
    });

    setIsEditing(false);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleEdit();
    } else if (event.key === 'Escape') {
      setIsEditing(false);
      setText(todo.text);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            value={text}
            onChange={event => setText(event.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="buttons">
            <SaveButton onClick={handleEdit} />
            <CancelButton
              onClick={() => {
                setIsEditing(false);
                setText(todo.text);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <label className="checkbox-container">
            <input
              className="checkbox-hidden"
              type="checkbox"
              checked={todo.completed || false}
              onChange={handleToggle}
            />
            <span className="custom-checkbox"></span>
          </label>

          <span
            className="todo-item__description"
            onClick={handleToggle}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : 'inherit',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {todo.text}
          </span>

          <div className="buttons">
            <EditButton
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
            />
            <DeleteButton onClick={handleDelete} />
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;

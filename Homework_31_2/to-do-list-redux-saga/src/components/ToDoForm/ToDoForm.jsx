import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export function ToDoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({
      type: 'todos/addTodoRequest',
      payload: text.trim(),
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Додати</button>
    </form>
  );
}

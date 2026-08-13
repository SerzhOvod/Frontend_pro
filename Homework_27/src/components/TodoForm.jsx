import React, { useState } from 'react';
import AddButton from './Buttons/AddButton';

function TodoForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue !== '') {
      onAddTask(trimmedValue);
      setInputValue('');
    }
  };

  return (
    <form className="form js--form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        required
        className="form__input js--form__input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <AddButton type="submit" />
    </form>
  );
}

export default TodoForm;

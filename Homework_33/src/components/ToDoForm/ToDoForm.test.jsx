import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../../redux/todoSlice';
import { ToDoForm } from './ToDoForm';

function renderFormWithRedux() {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

  return {
    ...render(
      <Provider store={store}>
        <ToDoForm />
      </Provider>,
    ),
    store,
  };
}

describe('ToDoForm Component', () => {
  // Тест 1
  test('дозволяє вводити в поле для тексту як цифри, так і букви', () => {
    renderFormWithRedux();

    const input = screen.getByRole('textbox');
    const testValue = 'Пройти 3 модулі та написати 5 тестів';

    fireEvent.change(input, { target: { value: testValue } });
    expect(input.value).toBe(testValue);
  });

  // Тест 2
  test('очищує поле введення після натискання кнопки "Додати"', () => {
    renderFormWithRedux();

    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /додати/i });

    fireEvent.change(input, { target: { value: 'Нове завдання 123' } });
    fireEvent.click(submitButton);

    expect(input.value).toBe('');
  });

  // Тест 3
  test('не викликає відправку форми і не змінює стан, якщо натиснути "Додати" без тексту', () => {
    const { store } = renderFormWithRedux();
    const initialState = store.getState().todos.items;
    expect(initialState).toHaveLength(0);

    const submitButton = screen.getByRole('button', { name: /додати/i });
    fireEvent.click(submitButton);

    const afterState = store.getState().todos.items;
    expect(afterState).toHaveLength(0);
  });
});

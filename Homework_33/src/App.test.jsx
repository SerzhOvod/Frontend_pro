import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import todoReducer from './redux/todoSlice';
import App from './App';

function renderWithRedux(ui, { preloadedState } = {}) {
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
    preloadedState,
  });

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('App Component', () => {
  // Тест 1
  test('відображає початкові заголовки "Todo" та "Todos"', () => {
    renderWithRedux(<App />);

    expect(
      screen.getByRole('heading', { name: /^Todo$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /^Todos$/i }),
    ).toBeInTheDocument();
  });

  // Тест 2
  test('коректно відображає нові елементи, які передаються в стейт', () => {
    const stateWithNewItem = {
      todos: {
        items: [
          { id: 1, text: 'Вивчити Vitest', completed: false },
          { id: 2, text: 'Зробити домашку', completed: false },
        ],
        loading: false,
        error: null,
      },
    };

    renderWithRedux(<App />, { preloadedState: stateWithNewItem });

    expect(screen.getByText(/Вивчити Vitest/i)).toBeInTheDocument();
    expect(screen.getByText(/Зробити домашку/i)).toBeInTheDocument();
  });

  // Тест 3
  test('не показує кнопку "Clear all", якщо немає елементів', () => {
    const stateWithNoItems = {
      todos: { items: [], loading: false, error: null },
    };

    renderWithRedux(<App />, { preloadedState: stateWithNoItems });

    expect(
      screen.queryByRole('button', { name: /clear all/i }),
    ).not.toBeInTheDocument();
  });

  // Тест 4
  test('показує кнопку "Clear all", якщо є елементи у списку', () => {
    const stateWithItems = {
      todos: {
        items: [{ id: 1, text: 'Завдання для видалення', completed: false }],
        loading: false,
        error: null,
      },
    };

    renderWithRedux(<App />, { preloadedState: stateWithItems });

    const clearButton = screen.getByRole('button', { name: /clear all/i });
    expect(clearButton).toBeInTheDocument();
  });

  // Тест 5
  test('відображає text "Loading...", коли стан перебуває в процесі завантаження', () => {
    const stateWithLoading = {
      todos: { items: [], loading: true, error: null },
    };

    renderWithRedux(<App />, { preloadedState: stateWithLoading });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});

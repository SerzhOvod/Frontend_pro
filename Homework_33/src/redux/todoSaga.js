import { call, put, takeEvery } from 'redux-saga/effects';

import {
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoSuccess,
  deleteTodoSuccess,
  toggleTodoSuccess,
  editTodoSuccess,
  clearTodosSuccess,
} from './todoSlice';

const STORAGE_KEY = 'todos';

const getTodos = () => {
  const todos = localStorage.getItem(STORAGE_KEY);

  return todos ? JSON.parse(todos) : [];
};

const saveTodos = todos => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

function* fetchTodos() {
  try {
    const todos = yield call(getTodos);

    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodo(action) {
  const todos = getTodos();

  const newTodo = {
    id: Date.now(),
    text: action.payload,
    completed: false,
  };

  const updatedTodos = [...todos, newTodo];

  saveTodos(updatedTodos);

  yield put(addTodoSuccess(newTodo));
}

function* deleteTodo(action) {
  const todos = getTodos();

  const updatedTodos = todos.filter(todo => todo.id !== action.payload);

  saveTodos(updatedTodos);

  yield put(deleteTodoSuccess(action.payload));
}

function* toggleTodo(action) {
  const todos = getTodos();

  const updatedTodos = todos.map(todo =>
    todo.id === action.payload
      ? {
          ...todo,
          completed: !todo.completed,
        }
      : todo,
  );

  saveTodos(updatedTodos);

  yield put(toggleTodoSuccess(action.payload));
}

function* editTodo(action) {
  const { id, text } = action.payload;

  const todos = getTodos();

  const updatedTodos = todos.map(todo =>
    todo.id === id
      ? {
          ...todo,
          text,
        }
      : todo,
  );

  saveTodos(updatedTodos);

  yield put(
    editTodoSuccess({
      id,
      text,
    }),
  );
}

function* clearTodos() {
  localStorage.removeItem(STORAGE_KEY);

  yield put(clearTodosSuccess());
}

export function* todoSaga() {
  yield takeEvery('todos/fetchTodosRequest', fetchTodos);

  yield takeEvery('todos/addTodoRequest', addTodo);

  yield takeEvery('todos/deleteTodoRequest', deleteTodo);

  yield takeEvery('todos/toggleTodoRequest', toggleTodo);

  yield takeEvery('todos/updateTodoRequest', editTodo);

  yield takeEvery('todos/clearTodosRequest', clearTodos);
}

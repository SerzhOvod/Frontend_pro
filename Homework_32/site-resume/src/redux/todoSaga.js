import { call, put, takeEvery } from 'redux-saga/effects';

import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  editTodoRequest,
  editTodoSuccess,
  clearTodosRequest,
  clearTodosSuccess,
} from './todoSlice';

const STORAGE_KEY = 'todos';

/* =========================
   LocalStorage helpers
========================= */

const getTodos = () => {
  const todos = localStorage.getItem(STORAGE_KEY);

  return todos ? JSON.parse(todos) : [];
};

const saveTodos = todos => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

/* =========================
   Fetch Todos
========================= */

function* fetchTodosSaga() {
  try {
    const todos = yield call(getTodos);

    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Add Todo
========================= */

function* addTodoSaga(action) {
  try {
    const todos = yield call(getTodos);

    const newTodo = {
      id: Date.now(),
      text: action.payload,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];

    yield call(saveTodos, updatedTodos);

    yield put(addTodoSuccess(newTodo));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Delete Todo
========================= */

function* deleteTodoSaga(action) {
  try {
    const todos = yield call(getTodos);

    const updatedTodos = todos.filter(todo => todo.id !== action.payload);

    yield call(saveTodos, updatedTodos);

    yield put(deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Toggle Todo
========================= */

function* toggleTodoSaga(action) {
  try {
    const todos = yield call(getTodos);

    const updatedTodos = todos.map(todo =>
      todo.id === action.payload
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo,
    );

    yield call(saveTodos, updatedTodos);

    yield put(toggleTodoSuccess(action.payload));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Edit Todo
========================= */

function* editTodoSaga(action) {
  try {
    const todos = yield call(getTodos);

    const updatedTodos = todos.map(todo =>
      todo.id === action.payload.id
        ? {
            ...todo,
            text: action.payload.text,
          }
        : todo,
    );

    yield call(saveTodos, updatedTodos);

    yield put(editTodoSuccess(action.payload));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Clear Todos
========================= */

function* clearTodosSaga() {
  try {
    yield call(saveTodos, []);

    yield put(clearTodosSuccess());
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

/* =========================
   Watcher Saga
========================= */

export default function* todoSaga() {
  yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);

  yield takeEvery(addTodoRequest.type, addTodoSaga);

  yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);

  yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);

  yield takeEvery(editTodoRequest.type, editTodoSaga);

  yield takeEvery(clearTodosRequest.type, clearTodosSaga);
}

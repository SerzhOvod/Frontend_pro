import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',

  initialState,

  reducers: {
    // =========================
    // FETCH
    // =========================

    fetchTodosRequest: state => {
      state.loading = true;
      state.error = null;
    },

    fetchTodosSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // =========================
    // ADD
    // =========================

    addTodoRequest: state => {
      state.loading = true;
      state.error = null;
    },

    addTodoSuccess: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },

    // =========================
    // DELETE
    // =========================

    deleteTodoRequest: state => {
      state.loading = true;
      state.error = null;
    },

    deleteTodoSuccess: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);

      state.loading = false;
    },

    // =========================
    // TOGGLE
    // =========================

    toggleTodoRequest: state => {
      state.loading = true;
      state.error = null;
    },

    toggleTodoSuccess: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }

      state.loading = false;
    },

    // =========================
    // EDIT
    // =========================

    editTodoRequest: state => {
      state.loading = true;
      state.error = null;
    },

    editTodoSuccess: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
      }

      state.loading = false;
    },

    // =========================
    // CLEAR
    // =========================

    clearTodosRequest: state => {
      state.loading = true;
      state.error = null;
    },

    clearTodosSuccess: state => {
      state.items = [];
      state.loading = false;
    },
  },
});

export const {
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
} = todoSlice.actions;

export default todoSlice.reducer;

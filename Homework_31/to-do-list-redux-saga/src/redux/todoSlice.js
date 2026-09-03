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

    addTodoSuccess: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodoSuccess: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },

    toggleTodoSuccess: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodoSuccess: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload.id);

      if (todo) {
        todo.text = action.payload.text;
      }
    },

    clearTodosSuccess: state => {
      state.items = [];
    },
  },
});

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoSuccess,
  deleteTodoSuccess,
  toggleTodoSuccess,
  editTodoSuccess,
  clearTodosSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;

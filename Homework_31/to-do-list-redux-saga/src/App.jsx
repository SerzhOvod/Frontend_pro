import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTodosRequest } from './redux/todoSlice';

// Components
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { Footer } from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.items);
  const loading = useSelector(state => state.todos.loading);
  const error = useSelector(state => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleClear = () => {
    dispatch({
      type: 'todos/clearTodosRequest',
    });
  };

  return (
    <>
      <div className="todo-card">
        <h2>Todo</h2>

        <TodoForm />

        <h2>Todos</h2>

        {loading && <p>Loading...</p>}

        {error && <p>Error: {error}</p>}

        <TodoList todos={todos} />

        {todos.length > 0 && <button onClick={handleClear}>Clear all</button>}

        <Footer />
      </div>
    </>
  );
}

export default App;

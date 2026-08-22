import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import { useSelector } from 'react-redux';
import { TodoForm } from './components/ToDoForm/ToDoForm';
import { TodoList } from './components/ToDoList/ToDoList';
import { Footer } from './components/Footer/Footer';

function App() {
  const todos = useSelector(state => state.todos.items);

  return (
    <>
      <div className="todo-card">
        <h2>Todo</h2>
        <TodoForm />

        <h2>Todos</h2>
        <TodoList todos={todos} />

        <Footer />
      </div>
    </>
  );
}

export default App;

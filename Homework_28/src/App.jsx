import './App.css';
import { useTasks } from './hooks/custom-hooks';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/ToDoList/TodoList';

function App() {
  const { handleAddTask, handleDelete, handleToggle, toDoList } = useTasks();

  return (
    <div className="container">
      <h1>ToDoList</h1>
      <TodoForm onAddTask={handleAddTask} />

      <TodoList
        toDoList={toDoList}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

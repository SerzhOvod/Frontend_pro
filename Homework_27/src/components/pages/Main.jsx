import { useTasks } from '../../hooks/custom-hooks';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

export function Main() {
  const { handleAddTask, handleDelete, handleToggle, toDoList } = useTasks();

  return (
    <main>
      <h1>ToDoList</h1>
      <TodoForm onAddTask={handleAddTask} />

      <TodoList
        toDoList={toDoList}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </main>
  );
}

import TodoItem from '../ToDoItem/ToDoItem';

export function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;

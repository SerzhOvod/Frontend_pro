import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default ToDoList;

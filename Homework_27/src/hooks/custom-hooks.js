import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [toDoList, setToDoList] = useState(() => {
    const saved = localStorage.getItem('react_todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('react_todos', JSON.stringify(toDoList));
  }, [toDoList]);

  const handleAddTask = taskText => {
    const newTodo = {
      id: Date.now(),
      text: taskText,
      checked: false,
    };
    setToDoList(prevList => [...prevList, newTodo]);
  };

  const handleDelete = id => {
    setToDoList(prevList => prevList.filter(task => task.id !== id));
  };

  const handleToggle = (id, currentChecked) => {
    setToDoList(prevList =>
      prevList.map(task =>
        task.id === id ? { ...task, checked: !currentChecked } : task,
      ),
    );
  };

  return {
    handleAddTask,
    handleDelete,
    handleToggle,
    toDoList,
  };
};

const taskList = document.querySelector('.js--todos-wrapper');
const form = document.querySelector('.js--form');
const inputArea = document.querySelector('.js--form__input');
const addTaskButton = document.querySelector('.form__btn');
const deleteTaskButton = document.querySelector('.todo-item__delete');

const API_URL = 'http://localhost:3000/todos';

let toDoList = [];

function renderTasksToDo() {
  taskList.innerHTML = '';

  toDoList.forEach(task => {
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');

    if (task.checked) {
      newTask.classList.add('todo-item--checked');
    }

    newTask.innerHTML = `
      <input type="checkbox" ${task.checked ? 'checked' : ''} data-id="${task.id}"/>
      <span class="todo-item__description">${task.text}</span>
      <button class="todo-item__delete" data-id="${task.id}">Видалити</button>
    `;

    taskList.appendChild(newTask);
  });
}

function loadTodos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      toDoList = data;
      renderTasksToDo();
    })
    .catch(err => console.error('Load error:', err));
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskToDo = inputArea.value.trim();

  if (taskToDo !== '') {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: taskToDo }),
    })
      .then(res => res.json())
      .then(newTodo => {
        toDoList.push(newTodo);
        renderTasksToDo();
        inputArea.value = '';
      })
      .catch(err => console.error('Adding error:', err));
  }
});

taskList.addEventListener('click', function (event) {
  const target = event.target;
  const id = target.dataset.id;

  if (!id) return;

  if (target.classList.contains('todo-item__delete')) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        toDoList = toDoList.filter(task => task.id !== parseInt(id));
        renderTasksToDo();
      })
      .catch(err => console.error('Deleting error:', err));
  }

  if (target.type === 'checkbox') {
    const isChecked = target.checked;

    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: isChecked }),
    })
      .then(res => res.json())
      .then(updatedTodo => {
        const task = toDoList.find(t => t.id === updatedTodo.id);
        if (task) task.checked = updatedTodo.checked;

        target
          .closest('.todo-item')
          .classList.toggle('todo-item--checked', updatedTodo.checked);
      })
      .catch(err => {
        target.checked = !isChecked;
        console.error('Updating error:', err);
      });
  }
});

loadTodos();
// setInterval(loadTodos, 1000);

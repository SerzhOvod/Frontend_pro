import './main.scss';

const taskList = document.querySelector('.js--todos-wrapper');
const form = document.querySelector('.js--form');
const inputArea = document.querySelector('.js--form__input');
const addTaskButton = document.querySelector('.form__btn');
const deleteTaskButton = document.querySelector('.todo-item__delete');

// let toDoList = JSON.parse(localStorage.getItem('todo-item')) || [];

const savedData = localStorage.getItem('todo-item');
console.log(savedData);

let toDoList = savedData
  ? JSON.parse(savedData)
  : [
      { text: 'Text', checked: false },
      { text: 'Text', checked: false },
    ];

if (!savedData) {
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('todo-item', JSON.stringify(toDoList));
}

function renderTasksToDo() {
  taskList.innerHTML = '';

  toDoList.forEach((task, index) => {
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');

    if (task.checked) {
      newTask.classList.add('todo-item--checked');
    }

    newTask.innerHTML = `
      <input type="checkbox" ${task.checked ? 'checked' : ''} data-index="${index}"/>
      <span class="todo-item__description">${task.text}</span>
      <button class="todo-item__delete" data-index="${index}">Видалити</button>
    `;

    taskList.appendChild(newTask);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskToDo = inputArea.value.trim();

  if (taskToDo !== '') {
    toDoList.push({
      text: taskToDo,
      checked: false,
    });

    saveToLocalStorage();
    renderTasksToDo();
    inputArea.value = '';
  }
});

taskList.addEventListener('click', function (event) {
  const target = event.target;

  const index = target.dataset.index;

  if (target.classList.contains('todo-item__delete')) {
    toDoList.splice(index, 1);
    saveToLocalStorage();
    renderTasksToDo();
  }

  if (target.type === 'checkbox') {
    toDoList[index].checked = target.checked;

    target
      .closest('.todo-item')
      .classList.toggle('todo-item--checked', target.checked);
    saveToLocalStorage();
  }
});

renderTasksToDo();

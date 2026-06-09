const taskList = document.querySelector('ul');
const inputArea = document.querySelector('input');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');

let taskToDo = '';

function createTask() {
  taskToDo = inputArea.value;

  if (taskToDo !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
    <span>${taskToDo}</span>
    <button id="removeTaskBtn">Remove</button>
    `;
    taskList.appendChild(newTask);
  }
}

taskList.addEventListener('click', deleteTask);

function deleteTask(event) {
  event.target.parentElement.remove();
}

inputArea.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    createTask();
  }
});

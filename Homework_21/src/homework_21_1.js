$(document).ready(function () {
  const $taskList = $('.js--todos-wrapper');
  const $form = $('.js--form');
  const $inputArea = $('.js--form__input');
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
    $taskList.empty();

    toDoList.forEach((task, index) => {
      const $newTask = $('<li>')
        .addClass('todo-item')
        .toggleClass('todo-item--checked', task.checked);

      $newTask.html(`
        <input type="checkbox" ${task.checked ? 'checked' : ''} data-index="${index}"/>
        <span class="todo-item__description" style="cursor: pointer;">${task.text}</span>
        <button class="todo-item__delete" data-index="${index}">Видалити</button>
      `);

      $taskList.append($newTask);
    });
  }

  $form.on('submit', function (event) {
    event.preventDefault();

    const taskToDo = $inputArea.val().trim();

    if (taskToDo !== '') {
      toDoList.push({
        text: taskToDo,
        checked: false,
      });

      saveToLocalStorage();
      renderTasksToDo();
      $inputArea.val('');
    }
  });

  $taskList.on('click', function (event) {
    const $target = $(event.target);
    const index = $target.data('index');

    if ($target.hasClass('todo-item__delete')) {
      toDoList.splice(index, 1);
      saveToLocalStorage();
      renderTasksToDo();
      return;
    }

    if ($target.is(':checkbox')) {
      const isChecked = $target.prop('checked');
      toDoList[index].checked = isChecked;

      $target
        .closest('.todo-item')
        .toggleClass('todo-item--checked', isChecked);

      saveToLocalStorage();
      return;
    }

    if ($target.hasClass('todo-item__description')) {
      const taskText = $target.text();

      $('#modalTaskText').text(taskText);

      const taskModal = new bootstrap.Modal(
        document.getElementById('taskModal'),
      );
      taskModal.show();
    }
  });

  renderTasksToDo();
});

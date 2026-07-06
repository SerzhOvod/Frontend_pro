$(document).ready(function () {
  var $taskList = $('.js--todos-wrapper');
  var $form = $('.js--form');
  var $inputArea = $('.js--form__input');
  var savedData = localStorage.getItem('todo-item');
  console.log(savedData);
  var toDoList = savedData ? JSON.parse(savedData) : [{
    text: 'Text',
    checked: false
  }, {
    text: 'Text',
    checked: false
  }];
  if (!savedData) {
    saveToLocalStorage();
  }
  function saveToLocalStorage() {
    localStorage.setItem('todo-item', JSON.stringify(toDoList));
  }
  function renderTasksToDo() {
    $taskList.empty();
    toDoList.forEach(function (task, index) {
      var $newTask = $('<li>').addClass('todo-item').toggleClass('todo-item--checked', task.checked);
      $newTask.html("\n        <input type=\"checkbox\" ".concat(task.checked ? 'checked' : '', " data-index=\"").concat(index, "\"/>\n        <span class=\"todo-item__description\" style=\"cursor: pointer;\">").concat(task.text, "</span>\n        <button class=\"todo-item__delete\" data-index=\"").concat(index, "\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n      "));
      $taskList.append($newTask);
    });
  }
  $form.on('submit', function (event) {
    event.preventDefault();
    var taskToDo = $inputArea.val().trim();
    if (taskToDo !== '') {
      toDoList.push({
        text: taskToDo,
        checked: false
      });
      saveToLocalStorage();
      renderTasksToDo();
      $inputArea.val('');
    }
  });
  $taskList.on('click', function (event) {
    var $target = $(event.target);
    var index = $target.data('index');
    if ($target.hasClass('todo-item__delete')) {
      toDoList.splice(index, 1);
      saveToLocalStorage();
      renderTasksToDo();
      return;
    }
    if ($target.is(':checkbox')) {
      var isChecked = $target.prop('checked');
      toDoList[index].checked = isChecked;
      $target.closest('.todo-item').toggleClass('todo-item--checked', isChecked);
      saveToLocalStorage();
      return;
    }
    if ($target.hasClass('todo-item__description')) {
      var taskText = $target.text();
      $('#modalTaskText').text(taskText);
      var taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
      taskModal.show();
    }
  });
  renderTasksToDo();
});
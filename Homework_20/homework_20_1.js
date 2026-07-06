$(document).ready(function () {
  // Выбор элементов с помощью jQuery
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

  // Отрендерить список задач
  function renderTasksToDo() {
    $taskList.empty(); // Быстрое очищение контейнера

    toDoList.forEach((task, index) => {
      // Создание LI элемента с классами через jQuery
      const $newTask = $('<li>')
        .addClass('todo-item')
        .toggleClass('todo-item--checked', task.checked);

      // Вставка HTML содержимого (добавлен инлайн-стиль для курсора)
      $newTask.html(`
        <input type="checkbox" ${task.checked ? 'checked' : ''} data-index="${index}"/>
        <span class="todo-item__description" style="cursor: pointer;">${task.text}</span>
        <button class="todo-item__delete" data-index="${index}">Видалити</button>
      `);

      $taskList.append($newTask); // Добавление элемента в DOM
    });
  }

  // Обработка отправки формы (Добавление задачи)
  $form.on('submit', function (event) {
    event.preventDefault();

    const taskToDo = $inputArea.val().trim(); // Получение значения инпута

    if (taskToDo !== '') {
      toDoList.push({
        text: taskToDo,
        checked: false,
      });

      saveToLocalStorage();
      renderTasksToDo();
      $inputArea.val(''); // Очистка инпута
    }
  });

  // Делегирование событий на список задач
  $taskList.on('click', function (event) {
    const $target = $(event.target); // Обертывание целевого элемента в jQuery
    const index = $target.data('index'); // Получение data-index через .data()

    // 1. Удаление задачи
    if ($target.hasClass('todo-item__delete')) {
      toDoList.splice(index, 1);
      saveToLocalStorage();
      renderTasksToDo();
      return; // Выходим из функции
    }

    // 2. Переключение чекбокса
    if ($target.is(':checkbox')) {
      const isChecked = $target.prop('checked'); // Получение состояния чекбокса
      toDoList[index].checked = isChecked;

      // Поиск ближайшего родителя и переключение класса
      $target
        .closest('.todo-item')
        .toggleClass('todo-item--checked', isChecked);

      saveToLocalStorage();
      return; // Выходим из функции
    }

    // 3. Клик на текст задачи — Открытие модального окна
    if ($target.hasClass('todo-item__description')) {
      const taskText = $target.text(); // Забираем текст задачи

      $('#modalTaskText').text(taskText); // Вставляем его в окно (id из предыдущего шага)

      // Инициализируем и показываем модальное окно Bootstrap 5
      const taskModal = new bootstrap.Modal(
        document.getElementById('taskModal'),
      );
      taskModal.show();
    }
  });

  // Первичный рендер при загрузке
  renderTasksToDo();
});

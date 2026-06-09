const buttonsList = document.querySelector('.buttons-list');

buttonsList.addEventListener('click', buttonClick);
function buttonClick(event) {
  console.log('You clicked the: ' + event.target.textContent);
}

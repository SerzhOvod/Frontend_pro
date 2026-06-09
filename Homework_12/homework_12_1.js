const promptBtn = document.querySelector('#promptBtn');
const linkBtn = document.querySelector('#linkBtn');

let linkFromPrompt = '';

promptBtn.addEventListener('click', function () {
  let userInput = prompt('Enter the link below: ');

  if (userInput) {
    linkFromPrompt = userInput;
  }
});

linkBtn.addEventListener('click', function () {
  if (linkFromPrompt) {
    window.location.href = 'https://' + linkFromPrompt;
  } else {
    alert('You did not enter the link yet');
  }
});

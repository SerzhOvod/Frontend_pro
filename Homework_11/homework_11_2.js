const btn = document.querySelector('button');
const text = document.querySelector('.text');

btn.addEventListener('click', function () {
  if (text.style.color === 'red') {
    text.style.color = 'green';
  } else {
    text.style.color = 'red';
  }
});

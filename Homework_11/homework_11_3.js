const changeImageButton = document.getElementById('changeImageButton');
const imageToChange = document.getElementById('randomImage');

changeImageButton.addEventListener('click', function () {
  let randomImageNumber = Math.floor(Math.random() * 9) + 1;
  imageToChange.src = randomImageNumber + '.jpg';
});

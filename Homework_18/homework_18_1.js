const timerSecondsQuantity = 85;

function startTimer(timerDuration) {
  let timer = timerDuration;
  const timerDisplay = document.getElementById('timer');

  const intervalToDisplay = setInterval(function () {
    const minutesQuantity = parseInt(timer / 60);
    const secondsQuantity = parseInt(timer % 60);

    const minutesToDisplay = minutesQuantity.toString().padStart(2, '0');
    const secondsToDisplay = secondsQuantity.toString().padStart(2, '0');

    timerDisplay.textContent = minutesToDisplay + ':' + secondsToDisplay;

    if (--timer < 0) {
      clearInterval(intervalToDisplay);
      timerDisplay.textContent = '00:00';
    }
  }, 1000);
}

startTimer(timerSecondsQuantity);

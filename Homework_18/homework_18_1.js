const timerSecondsQuantity = 25;

function startTimer(timerDuration) {
  let timer = timerDuration;
  const timerDisplay = document.getElementById('timer');

  const intervalToDisplay = setInterval(function () {
    const minutesQuantity = parseInt(timer / 60);
    const secondsQuantity = parseInt(timer % 60);

    const minutesToDisplay =
      minutesQuantity < 10 ? '0' + minutesQuantity : minutesQuantity;
    const secondsToDisplay =
      secondsQuantity < 10 ? '0' + secondsQuantity : secondsQuantity;

    timerDisplay.textContent = minutesToDisplay + ':' + secondsToDisplay;

    if (--timer < 0) {
      clearInterval(intervalToDisplay);
      timerDisplay.textContent = '00:00';
    }
  }, 1000);
}

startTimer(timerSecondsQuantity);

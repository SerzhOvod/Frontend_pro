function getCorrectNumber() {
  let lastInput;

  for (let i = 1; i <= 10; i++) {
    let input = prompt(`Enter your number (${i}/10)`);

    if (input === null) {
      console.log(`You did not enter the number`);
      return;
    }

    if (input > 100 || isNaN(input) || i === 10) {
      lastInput = input;
      console.log(`Your input is ${lastInput}`);
      return;
    } else {
      alert('Enter the number more than 100');
      continue;
    }
  }

  console.log('The last number is', lastInput);
}

getCorrectNumber();

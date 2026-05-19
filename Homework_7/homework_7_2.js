const someArray = [4, 'dfj', 10, 5, 5, 'df', {}];

function mathFunction(arr) {
  let sum = 0;
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      numbers.push(arr[i]);
      break;
    }

    if (numbers.length === 0) return 0;
  }
  return sum / numbers.length;
}

console.log(mathFunction(someArray));

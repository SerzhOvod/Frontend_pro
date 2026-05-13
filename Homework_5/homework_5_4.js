const number = +prompt('Enter your number:');

if (isNaN(number)) {
  alert('Введіть корректне число');
} else if (number <= 1) {
  alert('Введіть число більше за 1');
} else if (number % 2 === 0 || number % 3 === 0) {
  alert(`${number} - це складене число`);
} else {
  alert(`${number} - це просте число`);
}

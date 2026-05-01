const number = prompt('Введіть тризначне число:');

if (number[0] === number[1] && number[0] === number[2]) {
  alert('Всі цифри однакові');
} else {
  alert('Не всі цифри однакові');
}

if (
  number[0] === number[1] ||
  number[0] === number[2] ||
  number[2] === number[1]
) {
  alert('Серед введених цифр є однакові');
} else {
  alert('Серед введених цифр немає однакових');
}

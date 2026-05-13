const number = +prompt('Enter your number:');

for (let i = 1; i <= 100; i++) {
  if (i ** 2 < number) {
    console.log(i);
  }
}

// Другий варіант
// let i = 1;
// while (i ** 2 < number && i <= 100) {
//   console.log(i);
//   i++;
// }

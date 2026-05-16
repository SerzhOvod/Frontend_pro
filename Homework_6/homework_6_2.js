const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 12, 234, 342, 9348, 239, 369];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

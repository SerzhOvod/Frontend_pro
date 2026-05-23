function sumFunc() {
  let result = 0;
  return function (number) {
    result += number;
    return result;
  };
}

const sum = sumFunc();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

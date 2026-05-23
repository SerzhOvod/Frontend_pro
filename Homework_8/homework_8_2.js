function multiplyFunc(x) {
  return function (y) {
    return x * y;
  };
}

console.log(multiplyFunc(5)(2));
console.log(multiplyFunc(3)(4));
console.log(multiplyFunc(7)(6));

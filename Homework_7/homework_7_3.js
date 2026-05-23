const array = [1, 3, 1, 6, 2, 5, 7];
const item = [1, 2];

function removeElement(data, chars) {
  let result = [];
  for (let el of data) {
    if (!chars.includes(el)) {
      result.push(el);
    }
  }
  return result;
}

console.log(removeElement(array, item));

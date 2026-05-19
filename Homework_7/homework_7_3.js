const array = [1, 3, 1, 6, 2, 5, 7];
const item = 10;

function removeElement(array, item) {
  let match = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      match = true;
    }
    if (!match) {
      console.log(`Element ${item} is not found`);
    }
  }
}

removeElement(array, item);
console.log(array);

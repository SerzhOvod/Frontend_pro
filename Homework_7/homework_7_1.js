let userString = prompt('Enter your string: ');
let userSymbols = [];

while (true) {
  let userSymbol = prompt('Enter your symbols: ', '');

  if (userSymbol === null || userSymbol === '') {
    break;
  }
  userSymbols.push(userSymbol);
}

function modifiedString(userString, userSymbols) {
  let result = '';

  for (let i = 0; i < userString.length; i++) {
    let toRemove = false;

    for (let j = 0; j < userSymbols.length; j++) {
      if (userString[i] === userSymbols[j]) {
        toRemove = true;
        break;
      }
    }

    if (!toRemove) {
      result += userString[i];
    }
  }

  return result;
}

console.log(modifiedString(userString, userSymbols));

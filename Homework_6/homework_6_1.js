const user = {
  name: 'Serhii',
  age: 36,
  location: 'Kyiv',
  hobby: 'painting',
  getInfo() {
    return `Ім'я користувача: ${user.name}, Вік користувача: ${user.age}, Місце проживання - ${user.location}, Хоббі - ${user.hobby}`;
  },
};
console.log(user.getInfo());

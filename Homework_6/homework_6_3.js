const myObject = {
  contacts: [
    { name: 'Serhii', tel: +380971111111, email: 'serhii.serhii@gmail.com' },
    { name: 'Bohdan', tel: +380972222222, email: 'bohdan.bohdan@gmail.com' },
    { name: 'Oleksii', tel: +380973333333, email: 'oleksii.oleksii@gmail.com' },
  ],

  // findContact(name) {
  //   const contact = this.contacts.find(contact => contact.name === name);
  //   return contact ? contact : "Didn't find the contact";
  // },

  // addContact(name, tel, email) {
  //   const newContact = { name, tel, email };
  //   this.contacts.push(newContact);
  // },
};

const findName = 'Maria';
const contact = myObject.contacts.find(contact => contact.name === findName);
console.log(contact ? contact : "Didn't find the contact");

const newContact = {
  name: 'Maria',
  tel: +380974444444,
  email: 'maria.maria@gmail.com',
};

myObject.contacts.push(newContact);
console.log(myObject.contacts);

// console.log(myObject.findContact('Serhii'));
// myObject.addContact('Maria', +380974444444, 'maria.maria@gmail.com');

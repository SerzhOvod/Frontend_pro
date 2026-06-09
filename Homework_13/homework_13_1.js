const form = document.querySelector('form');

form.addEventListener('submit', clickSubmitButton);

function clickSubmitButton(event) {
  event.preventDefault();
  console.log(
    `
    Name: ${form.name.value}, 
    Message: ${form.message.value}, 
    Phone number: ${form.phone.value}, 
    Email: ${form.email.value}
    `,
  );
  form.reset();
}

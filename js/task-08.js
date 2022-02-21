const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email && password) {
    console.dir({ email, password });
  } else {
    alert('все поля должны быть заполнены');
  }

  form.reset();
}

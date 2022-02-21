const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);

function onBlur(event) {
  const defaultLength = Number(event.currentTarget.dataset.length);
  const inputLength = event.currentTarget.value.length;

  if (defaultLength === inputLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}

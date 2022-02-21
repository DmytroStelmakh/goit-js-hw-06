const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener('input', onInput);

function onInput(event) {
  output.style.fontSize = `${event.currentTarget.value}px`;
}

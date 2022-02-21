const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', e => {
  if (e.currentTarget.value.trim()) {
    outputText.textContent = e.currentTarget.value;
  } else {
    outputText.textContent = 'Anonymous';
  }
});

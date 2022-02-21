let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

const onIncrement = () => {
  counter.textContent = counterValue += 1;
};
const onDecrement = () => {
  counter.textContent = counterValue -= 1;
};

decrementBtn.addEventListener('click', onDecrement);
incrementBtn.addEventListener('click', onIncrement);

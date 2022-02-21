function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsItems = document.querySelector('#controls');
const inputData = document.querySelector('#controls > input');
const createItem = document.querySelector('button[data-create]');
const destroyItem = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('#boxes');

createItem.addEventListener('click', createHandler);
destroyItem.addEventListener('click', destroyBoxes);

function createHandler(amount) {
  amount = Number(inputData.value);

  return createBoxes(amount);
}

let boxSize = 30;

function createBoxes(amount) {
  const boxItems = [];

  for (let i = 0; i < amount; i++) {
    const boxMarkup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
    boxItems.push(boxMarkup);
  }

  boxes.insertAdjacentHTML('beforeend', boxItems.join(''));
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxSize = 30;
}

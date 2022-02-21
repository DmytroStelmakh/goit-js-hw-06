const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const arrayItems = [];

ingredients.forEach(el => {
  const listItem = document.createElement('li');
  listItem.classList.add('.item');
  listItem.textContent = el;
  arrayItems.push(listItem);
});

ingredientsList.append(...arrayItems);
console.log(ingredientsList);

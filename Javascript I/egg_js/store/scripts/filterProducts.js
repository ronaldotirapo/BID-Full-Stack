import { products } from './products.js';
import { printCards } from './productCards.js';

const searchSelector = document.getElementById('search');

const idSelector = 'products';

printCards(products, idSelector);

const captureText = (event) => {
  const searchText = event.target.value;
  console.log(searchText);
  if (!searchText) {
    printCards(products, idSelector);
  } else if (searchText) {
    const productsFiltered = products.filter((product) => {
      return product.title.toLowerCase().startsWith(searchText.toLowerCase());
    });
    printCards(productsFiltered, idSelector);
  }
};

searchSelector.addEventListener('keyup', (event) => {
  captureText(event);
});

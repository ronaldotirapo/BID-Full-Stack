import { products } from './products.js';

const createTemplateCard = (product) => {
  return `<a class="product-card" href="./details.html">
    <img src="${product.images[0]}" alt="${product.title}" class="product-img">
    <div class="product-info">
        <span class="product-title">
            ${product.title}
        </span>
        <span class="product-description">
            ${product.description}
        </span>
        <div class="product-price-block">
            <span class="price">$${product.price}</span>
            <span class="discount">$${product.price * 0.1}</span>
        </div>
    </div>
    <div class="product-tax-policy">
        Incluye impuestos del país
    </div>
    </a>`;
};

const productsTemplate = products
  .map((product) => {
    return createTemplateCard(product);
  })
  .join('');

const printCards = (arrayOfProducts, idSelector) => {
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = arrayOfProducts;
};

printCards(productsTemplate, "products");

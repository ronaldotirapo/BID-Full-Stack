const cartProductsArray = JSON.parse(localStorage.getItem('cart'));

const idCartProducts = 'cart-products';

const createTemplateCartCard = (product) => {
  const cartInfo = document.createElement('div');
  cartInfo.classList.add('product-card', 'product-info', 'cart-info');

  const img = document.createElement('img');
  img.src = product.image;
  img.classList.add('cart-img');

  const columnCartInfo = document.createElement('div');
  columnCartInfo.classList.add('column-cart-info');

  const title = document.createElement('span');
  title.classList.add('product-title');
  title.textContent = product.title;

  const color = document.createElement('span');
  color.classList.add('product-description', 'product-description-truncated-multiline');
  color.textContent = 'COLOR: ' + product.color.toUpperCase();

  const description = document.createElement('span');
  description.classList.add('product-description', 'product-description-truncated-multiline');
  description.textContent = product.description;

  const buy = document.createElement('div');
  buy.classList.add('buy');

  const quantity = document.createElement('input');
  quantity.readOnly = true;
  quantity.value = product.quantity;

  const productPriceBlock = document.createElement('div');
  productPriceBlock.classList.add('product-price-block', 'column-cart-info');

  const price = document.createElement('span');
  price.classList.add('price');
  price.textContent = product.subtotal;

  buy.appendChild(quantity);
  columnCartInfo.appendChild(title);
  columnCartInfo.appendChild(color);
  columnCartInfo.appendChild(description);
  columnCartInfo.appendChild(buy);
  productPriceBlock.appendChild(price);
  cartInfo.appendChild(img);
  cartInfo.appendChild(columnCartInfo);
  cartInfo.appendChild(productPriceBlock);

  return cartInfo;
};

const createTemplateEmptyCart = () => {
  const cartproductsSelector = document.getElementById(idCartProducts);
  cartproductsSelector.parentElement.classList.toggle('cart-container');

  const cartInfo = document.createElement('div');
  cartInfo.classList.add('product-card', 'product-info', 'cart-info', 'empty-cart');

  const title = document.createElement('span');
  title.classList.add('product-title');
  title.textContent = 'Tu carrito está vacío';

  cartInfo.appendChild(title);

  return cartInfo;
};

const printCartCards = (cartProductsArray, idCartProducts) => {
  const cartproductsSelector = document.getElementById(idCartProducts);

  if (!cartProductsArray) {
    cartproductsSelector.appendChild(createTemplateEmptyCart());
    return;
  }

  cartProductsArray.forEach((product) => {
    cartproductsSelector.appendChild(createTemplateCartCard(product));
  });
};

printCartCards(cartProductsArray, idCartProducts);

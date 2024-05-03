const cartProductsArray = JSON.parse(localStorage.getItem('cart'));

const idTotal = 'total';

const createTemplateTotalCart = (cartProductsArray) => {
  const total = cartProductsArray.reduce((total, product) => {
    return total + Number(product.subtotal.slice(1));
  }, 0);

  const moneda = cartProductsArray[0].subtotal.slice(0, 1);

  const cartInfo = document.createElement('div');
  cartInfo.classList.add('product-card', 'product-info', 'cart-info');

  const title = document.createElement('span');
  title.classList.add('product-title');
  title.textContent = 'Resumen del pedido';

  const div = document.createElement('div');

  const totalLabel = document.createElement('span');
  totalLabel.classList.add('checkout-total-label');
  totalLabel.textContent = 'Total';

  const totalTitle = document.createElement('h2');
  totalTitle.classList.add('checkout-total-price');
  totalTitle.textContent = moneda + Intl.NumberFormat().format(total);

  const divTaxPolicy = document.createElement('div');
  divTaxPolicy.classList.add('product-tax-policy');
  divTaxPolicy.textContent = 'Incluye impuestos del país';

  const buttonComprar = document.createElement('button');
  buttonComprar.classList.add('btn-primary');
  buttonComprar.textContent = 'Comprar';

  cartInfo.appendChild(title);
  div.appendChild(totalLabel);
  div.appendChild(totalTitle);
  cartInfo.appendChild(div);
  cartInfo.appendChild(divTaxPolicy);
  cartInfo.appendChild(buttonComprar);

  return cartInfo;
};

const createTemplateEmptyTotalCart = () => {
  const cartInfo = document.createElement('div');
  cartInfo.classList.add('product-card', 'product-info', 'cart-info', 'empty-cart');

  const title = document.createElement('span');
  title.classList.add('product-title');
  title.textContent = 'Resumen del pedido';

  const div = document.createElement('div');

  const totalLabel = document.createElement('span');
  totalLabel.classList.add('checkout-total-label');
  totalLabel.textContent = 'Total';

  const totalTitle = document.createElement('h2');
  totalTitle.classList.add('checkout-total-price');
  totalTitle.textContent = '$0.00';

  const divTaxPolicy = document.createElement('div');
  divTaxPolicy.classList.add('product-tax-policy');
  divTaxPolicy.textContent = 'Incluye impuestos del país';

  cartInfo.appendChild(title);
  div.appendChild(totalLabel);
  div.appendChild(totalTitle);
  cartInfo.appendChild(div);
  cartInfo.appendChild(divTaxPolicy);

  return cartInfo;
};

const printTotalCart = (cartProductsArray, idTotal) => {
  const totalSelector = document.getElementById(idTotal);

  if (!cartProductsArray) {
    totalSelector.appendChild(createTemplateEmptyTotalCart());
    return;
  }

  totalSelector.appendChild(createTemplateTotalCart(cartProductsArray));
};

printTotalCart(cartProductsArray, idTotal);

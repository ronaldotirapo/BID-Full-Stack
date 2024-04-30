import { products } from './products.js';

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

const createTemplateDetail = (product) => {
  return `<div class="product-images-block">
    <div class="thumbnail-container">
        ${product.images
          .map(
            (image, index) =>
              `<img class="thumbnail-image" src="${image}" alt="Miniatura ${index++}" />`,
          )
          .join('')}
    </div>
    <div class="selected-image-container">
        <img src="${product.images[0]}" alt="Imagen seleccionada" id="selected-image" />
    </div>
</div>
<div class="product-description-block">
    <h1 class="product-name">
        ${product.title}
    </h1>
    <form class="color">
        <label class="product-subtitle" for="color">Color</label>
        <select name="color" id="color">
            ${product.colors
              .map((color) => `<option value="${color.toLowerCase()}">${color}</option>`)
              .join('')}
        </select>
    </form>
    <span class="product-subtitle" for="description">Descripción</span>
    <p class="description-paragraph product-description">
        ${product.description}
    </p>
</div>
<div class="product-checkout-block">
    <div class="checkout-containter">
        <span class="checkout-total-label">
            Total
        </span>
        <h2 class="checkout-total-price" id="subTotal">
            $${product.price}
        </h2>
        <p class="checkout-description">
            Incluye impuestos del país. 
            ${product.onsale ? `Aplicado cupón de descuento de $${product.price * 0.1}` : ''}
        </p>
        <ul class="checkout-policy-list">
            <li>
                <span class="policy-icon"><img src="./assets/truck.png" alt="Truck"></span>
                <span class="policy-desc">
                    Agrega el producto al carrito para conocer los costos de envío
                </span>
            </li>
            <li>
                <span class="policy-icon"><img src="./assets/plane.png" alt="Plane"></span>
                <span class="policy-desc">
                    Recibe el pedido entre 10 a 15 días hábiles seleccionando el envío regular
                </span>
            </li>
        </ul>
        <div class="checkout-process">
            <div class="buy">
                <input type="number" value="1" id="quantity">
                <button class="btn-primary">
                    Comprar
                </button>
            </div>
            <div class="add-to-car">
                <button class="btn-outline">
                    Añadir al carrito
                </button>
            </div>
        </div>
    </div>
</div>`;
};

const changeMini = (event) => {
  const route = event.target.src;
  const selectedImage = document.getElementById('selected-image');
  selectedImage.src = route;
  console.log('hola');
};

const changeSubTotal = (event) => {
  const quantity = event.target.value;
  const productPrice = products.find((product) => product.id.toString() === id.toString()).price;
  const subTotal = document.getElementById('subTotal');
  subTotal.textContent = `$${productPrice * quantity}`;
};

const printDetails = (id) => {
  const productFounded = products.find((product) => {
    return product.id.toString() === id.toString();
  });

  let productDetailsSelector = document.getElementById('product-details');
  productDetailsSelector.innerHTML = createTemplateDetail(productFounded);
};

printDetails(id);

const thumbnailImages = document.getElementsByClassName('thumbnail-image');
for (let i = 0; i < thumbnailImages.length; i++) {
  thumbnailImages[i].addEventListener('click', changeMini);
}

const quantity = document.getElementById('quantity');
quantity.addEventListener('change', changeSubTotal);

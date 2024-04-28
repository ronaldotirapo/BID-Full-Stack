class Product {
  #supplier;
  constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.#supplier = supplier;
    this.colors = colors;
    this.description = description;
  }

  get getSupplier() {
    return this.#supplier;
  }

  set setSupplier(supplier) {
    this.#supplier = supplier;
  }

  sellUnits(units) {
    if (units > this.stock) {
      console.log('No hay suficiente stock');
      return;
    }
    this.stock -= units;
  }
}

const prod1 = new Product(
  1,
  'Laptop',
  2000,
  5,
  ['./assets/mock1.jpg', 'img2'],
  false,
  'Apple',
  'blue',
  'Apple blue laptop',
);
const prod2 = new Product(
  2,
  'Smartwatch',
  300,
  12,
  ['./assets/mock2.jpg', 'img2'],
  true,
  'Huawei',
  'red',
  'Huawei red smartwatch',
);
const prod3 = new Product(
  3,
  'Tablet',
  500,
  10,
  ['./assets/mock1.jpg', 'img2'],
  false,
  'Samsung',
  'green',
  'Samsung green tablet',
);
const prod4 = new Product(
  4,
  'Smartphone',
  200,
  24,
  ['./assets/mock2.jpg', 'img2'],
  true,
  'Xiaomi',
  'white',
  'Xiaomi white smartphone',
);
const prod5 = new Product(
  5,
  'Smartphone',
  250,
  30,
  ['./assets/mock1.jpg', 'img2', 'img3'],
  true,
  'Oppo',
  'indigo',
  'Oppo indigo smartphone',
);
const prod6 = new Product(
  6,
  'Smartphone',
  350,
  40,
  ['./assets/mock2.jpg', 'img2', 'img3'],
  true,
  'Redmagic',
  'black',
  'Redmagic black smartphone',
);

export const products = [prod1, prod2, prod3, prod4, prod5, prod6];

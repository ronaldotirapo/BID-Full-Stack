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
  ['img1', 'img2'],
  false,
  'Apple',
  'blue',
  'description1',
);
const prod2 = new Product(
  2,
  'Smartwatch',
  300,
  12,
  ['img1', 'img2'],
  true,
  'Huawei',
  'red',
  'description2',
);
const prod3 = new Product(
  3,
  'Tablet',
  500,
  10,
  ['img1', 'img2'],
  false,
  'Samsung',
  'green',
  'description3',
);
const prod4 = new Product(
  4,
  'Smartphone',
  200,
  24,
  ['img1', 'img2'],
  true,
  'Xiaomi',
  'white',
  'description4',
);
const prod5 = new Product(
  5,
  'Smartphone',
  250,
  30,
  ['img1', 'img2', 'img3'],
  true,
  'Oppo',
  'indigo',
  'description5',
);
const prod6 = new Product(
  6,
  'Smartphone',
  350,
  40,
  ['img1', 'img2', 'img3'],
  true,
  'Redmagic',
  'black',
  'description6',
);

const products = [prod1, prod2, prod3, prod4];

console.log(products);
console.log(products[1]);
console.log(products[products.length - 1].title);

products.unshift(prod5);
products.push(prod6);
console.log(products.slice());

products.shift();
products.pop();
console.log(products);

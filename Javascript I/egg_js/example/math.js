class Product {
  constructor(price, description) {
    this.price = price;
    this.description = description;
  }
}

const product1 = new Product(100, 'A product');
const product2 = new Product(200.1, 'Another product');
const product3 = new Product(300.99, 'Yet another product');
const product4 = new Product(400.6, 'One more product');
const product5 = new Product(500, 'The last product');

const products = [product1, product2, product3, product4, product5];

const diff = Math.abs(product1.price - product2.price);
console.log(diff);

const ceil = Math.ceil(product2.price);
console.log(ceil);

const floor = Math.floor(product3.price);
console.log(floor);

const round = Math.round(product4.price);
console.log(round);

const max = Math.max(
  product1.price,
  product2.price,
  product3.price,
  product4.price,
  product5.price,
);
console.log(max);

const min = Math.min(
  product1.price,
  product2.price,
  product3.price,
  product4.price,
  product5.price,
);
console.log(min);

const randomNumber = Math.round(Math.random() * 5);
const randomProduct = products[randomNumber];
console.log(randomProduct);

class Product {
  #supplier;
  constructor(id, title, price, stock, images, onsale, discount, supplier, colors, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.discount = discount;
    this.#supplier = supplier;
    this.colors = colors;
    this.description = description;
    this.baseCurrency = '$';
  }

  get getSupplier() {
    return this.#supplier;
  }

  set setSupplier(supplier) {
    this.#supplier = supplier;
  }

  exchangeCurrency(currency) {
    switch (currency) {
      case 'USD':
        this.baseCurrency = '$';
        this.price = this.price * 1;
        break;
      case 'EUR':
        this.baseCurrency = '€';
        this.price = this.price * 0.85;
        break;
      case 'GBP':
        this.baseCurrency = '£';
        this.price = this.price * 0.75;
        break;
      case 'PEN':
        this.baseCurrency = 'S/';
        this.price = this.price * 3.9;
        break;
      default:
        this.baseCurrency = '$';
        this.price = this.price * 1;
        break;
    }
  }

  getformatPrice() {
    return `${this.baseCurrency} ${Intl.NumberFormat().format(this.price)}`;
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
  'Apple Laptop Pro',
  2000,
  5,
  ['./assets/mock1.jpg', './assets/mock2.jpg'],
  false,
  0.1,
  'Apple',
  ['Blue', 'Green', 'Red'],
  'Esta es una laptop de alto rendimiento de Apple. Perfecta para profesionales y usuarios avanzados. Cuenta con una pantalla de alta resolución, procesador potente y almacenamiento rápido.',
);
const prod2 = new Product(
  2,
  'Huawei Smartwatch 2',
  300,
  12,
  ['./assets/mock2.jpg', './assets/mock1.jpg'],
  true,
  0.2,
  'Huawei',
  ['Red', 'Yellow', 'Purple'],
  'Este es un elegante smartwatch de Huawei. Mantente conectado y realiza un seguimiento de tu estado físico con estilo. Cuenta con una pantalla táctil a color, monitor de frecuencia cardíaca y resistencia al agua.',
);
const prod3 = new Product(
  3,
  'Samsung Tablet S7',
  500,
  10,
  ['./assets/mock1.jpg', './assets/mock2.jpg'],
  false,
  0,
  'Samsung',
  ['Green', 'Orange', 'Pink'],
  'Esta es una potente tablet de Samsung. Disfruta de una pantalla impresionante y productividad sobre la marcha. Cuenta con un procesador rápido, gran capacidad de almacenamiento y soporte para lápiz óptico.',
);
const prod4 = new Product(
  4,
  'Xiaomi Smartphone 12',
  200,
  24,
  ['./assets/mock2.jpg', './assets/mock1.jpg'],
  true,
  0.15,
  'Xiaomi',
  ['White', 'Black', 'Silver'],
  'Este es un smartphone repleto de funciones de Xiaomi. Captura fotos increíbles y disfruta de un rendimiento rápido. Cuenta con una cámara de alta resolución, batería de larga duración y desbloqueo facial.',
);
const prod5 = new Product(
  5,
  'Oppo Smartphone X3',
  250,
  30,
  ['./assets/mock1.jpg', './assets/mock2.jpg', 'img3'],
  true,
  0.25,
  'Oppo',
  ['Indigo', 'Cyan', 'Magenta'],
  'Este es un elegante smartphone de Oppo. Experimenta una pantalla impresionante y un rendimiento potente. Cuenta con una cámara versátil, carga rápida y diseño delgado.',
);
const prod6 = new Product(
  6,
  'Redmagic Smartphone Pro',
  350,
  40,
  ['./assets/mock2.jpg', './assets/mock1.jpg', 'img3'],
  true,
  0.3,
  'Redmagic',
  ['Black', 'Gray', 'Brown'],
  'Este es un smartphone de juegos de Redmagic. Sumérgete en el mundo de los juegos móviles. Cuenta con una pantalla de alta frecuencia de actualización, procesador potente y refrigeración líquida.',
);

export const products = [prod1, prod2, prod3, prod4, prod5, prod6];

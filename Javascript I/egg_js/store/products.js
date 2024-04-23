//Declaración de un objeto literal
//La sintaxis para añadir propiedades (clave) no requiere de usar let, const o var
//Los valores pueden ser de cualquier tipo de dato
const producto1 = {
  nombre: 'celular',
  precio: 10000,
  stock: 2,
};

/* Javascript permite agregar propiedades no existentes a un objeto 
en tiempo de ejecución, ya que son mutables
*/

/* Para prevenir agregar, modificar y eliminar propiedades se puede usar
Object.freeze(miObjeto) 
*/

//Accediendo y creando una nueva propiedad mediante la notación de punto
producto1.id = 'id123';

//Accediendo y creando una nueva propiedad mediante la notación de corchetes
producto1['foto'] = 'https://i.postimg.cc/Jn2C5W84/galaxy1.webp';

console.log(producto1);

//Accediendo a una propiedad ya declarada mediante la notación de punto
console.log(producto1.nombre);

//Declaración de una clase
//La sintaxis para añadir propiedades no requiere de usar let, const o var
//La sintaxis para añadir funciones requiere de la palabra reservada function
class Product {
  #supplier;
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.#supplier = supplier; //Propiedad privada
  }

  //Los nombres de los métodos usualmente son iguales a las propiedades

  //Método getter
  //Se puede acceder mediante el método .getSupplier (sin paréntesis, como si fuera una propiedad)
  get getSupplier() {
    return this.#supplier;
  }

  //Método setter
  //Se puede acceder mediante el método .setSupplier = nuevoValor (sin paréntesis como si fuera una propiedad)
  set setSupplier(supplier) {
    this.#supplier = supplier;
  }

  //Método
  sellUnits(units) {
    if (units > this.stock) {
      console.log('No hay suficiente stock');
      return;
    }
    this.stock -= units;
  }
}

/* A comparación de los objetos literales, 
las clases no permiten agregar propiedades en tiempo de ejecución
 */

//Instanciando un objeto de la clase Product
//La palabra reservada new crea una nueva instancia de la clase Product
//Se requiere tener el mismo orden de argumentos que el constructor
const prod1 = new Product(); //Propiedades declaradas con undefined

//Instanciando un objeto de la clase Product con argumentos
const prod2 = new Product(0, 'Celular', '1000'); //Solo algunas propiedades declaradas
const prod3 = new Product(1, 'Laptop', 2000, 5, ['img1', 'img2'], true); //Todas las propiedades declaradas

console.log('Producto 1: ', prod1);
console.log('Producto 2: ', prod2);
console.log('Producto 3: ', prod3);

//Accediendo a una propiedad de un objeto de la clase Product sin getter
console.log(prod2.title);
console.log(prod3.onsale);

const prod4 = new Product(2, 'Tablet', 500, 10, ['img1', 'img2'], false, 'Samsung');
prod4.setSupplier = 'Apple'; //Cambio de valor mediante setter
console.log(prod4.getSupplier); //Acceso mediante getter

prod5 = new Product(3, 'Smartwatch', 300, 12, ['img1', 'img2'], true, 'Huawei');
prod5.sellUnits(10);
prod5.sellUnits(5);
console.log(prod5);

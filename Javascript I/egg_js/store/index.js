let totalPagar = 0;
const body = document.querySelector('body');

//Con uso de for y if
cantidadProductos = prompt('¿Cuantos productos desea comprar?');
for (let index = 0; index < cantidadProductos; index++) {
  nombreProducto = prompt('Ingrese el nombre del producto');
  precioProducto = Number(prompt('Ingrese el precio del producto'));
  cantidadProducto = Number(prompt('Ingrese la cantidad del producto'));

  if (typeof precioProducto !== 'number' || typeof cantidadProducto !== 'number') {
    alert('La cantidad ingresada no es un número');
    continue;
  }

  subTotal = precioProducto * cantidadProducto;
  alert('El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal);
  //Con innerHTML puedo utilizar <br> a comparación de innerText
  body.innerHTML +=
    'El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal + '<br>';
  totalPagar += subTotal;
}

/* //Con uso de while
let contador = 0;
while (contador < cantidadProductos) {
  nombreProducto = prompt('Ingrese el nombre del producto');
  precioProducto = Number(prompt('Ingrese el precio del producto'));
  cantidadProducto = Number(prompt('Ingrese la cantidad del producto'));

  if (typeof precioProducto !== 'number' || typeof cantidadProducto !== 'number') {
    alert('La cantidad ingresada no es un número');
    continue;
  }

  subTotal = precioProducto * cantidadProducto;
  alert('El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal);
  body.innerHTML +=
    'El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal + '<br>';
  totalPagar += subTotal;
  contador++;
} */

/* //Con uso de do while
let contador = 0;
do {
  nombreProducto = prompt('Ingrese el nombre del producto');
  precioProducto = Number(prompt('Ingrese el precio del producto'));
  cantidadProducto = Number(prompt('Ingrese la cantidad del producto'));

  if (typeof precioProducto !== 'number' || typeof cantidadProducto !== 'number') {
    alert('La cantidad ingresada no es un número');
    continue;
  }

  subTotal = precioProducto * cantidadProducto;
  alert('El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal);
  body.innerHTML +=
    'El subtotal a pagar por el producto ' + nombreProducto + ' es: ' + subTotal + '<br>';
  totalPagar += subTotal;
  contador++;
} while (contador < cantidadProductos); */

alert('El total a pagar es: ' + totalPagar);
body.innerHTML += 'El total a pagar es: ' + totalPagar + '<br>';

//Uso de switch
let metodoPago = prompt('Ingrese el método de pago: tarjeta o efectivo');
switch (metodoPago.toLowerCase()) {
  case 'tarjeta':
    alert('Usted ha seleccionado el método de pago con tarjeta');
    body.innerHTML += 'Usted ha seleccionado el método de pago con tarjeta' + '<br>';
    break;
  case 'efectivo':
    alert('Usted ha seleccionado el método de pago con efectivo');
    body.innerHTML += 'Usted ha seleccionado el método de pago con efectivo' + '<br>';
    break;
  default:
    alert('El método de pago ingresado no es válido');
    body.innerHTML += 'El método de pago ingresado no es válido' + '<br>';
    break;
}

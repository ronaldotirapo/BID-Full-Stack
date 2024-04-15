/* Obetener elemento desde el DOM */
const mensaje = document.getElementById('mensaje');
mensaje.innerHTML = 'Hola Mundo!';

/* Ejemplo de uso de entrada de datos con prompt */
let entrada = prompt('Inserte un valor');

/* Ejemplo de uso de salida de datos con alert */
let respuesta = 'Has ingresado el valor: ' + entrada + ' con tipo: ' + typeof entrada;
alert(respuesta);
console.log(respuesta);
mensaje.innerHTML = respuesta;

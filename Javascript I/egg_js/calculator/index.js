/* Tipos de datos primitivos con comentarios en Javascript */
let numero = 10; // Número entero
let decimal = 10.5; // Número decimal
let texto = 'Hola Mundo'; // Cadena de texto
let booleano = true; // Valor booleano
let nulo = null; // Valor nulo
let indefinido = undefined; // Valor indefinido
let simbolo = Symbol('simbolo'); // Valor simbólico

/* Operadores ariméticos en Javascript con comentarios */
let suma = 10 + 5; // Suma
let resta = 10 - 5; // Resta
let multiplicacion = 10 * 5; // Multiplicación
let division = 10 / 5; // División
let residuo = 10 % 5; // Residuo
let potencia = 10 ** 5; // Potencia
let incremento = 10; // Incremento
incremento++; // Incremento en 1
let decremento = 10; // Decremento
decremento--; // Decremento en 1

/* Ejemplo de calculadora */
//Esto utiliza un object wrapper para convertir el valor de entrada a un número
const numero1 = Number(prompt('Ingrese el primer número'));
const numero2 = Number(prompt('Ingrese el segundo número'));
const resultadoSuma = numero1 + numero2;
const mensajeSuma = 'El resultado de la suma es: ' + resultadoSuma;
alert(mensajeSuma);
const resultadoPromedio = (numero1 + numero2) / 2;
const resultadoTriplePromedio = resultadoPromedio * 3;
const resultadoTriplePromedioMenosDiez = resultadoTriplePromedio - 10;
const mensajeResultado =
  'El resultado promedio es: ' +
  resultadoPromedio +
  ', el resultado de multiplicar por 3 es: ' +
  resultadoTriplePromedio +
  ' y el resultado de multiplicar por 3 y restar 10 es: ' +
  resultadoTriplePromedioMenosDiez;
alert(mensajeResultado);

class Calculadora {
  static suma(a, b) {
    return a + b;
  }

  static resta(a, b) {
    return a - b;
  }

  static multiplicacion(a, b) {
    return a * b;
  }

  static division(a, b) {
    return a / b;
  }

  static potencia(a, b) {
    return a ** b;
  }

  static raizCuadrada(a) {
    return Math.sqrt(a);
  }

  static raizCubica(a) {
    return Math.cbrt(a);
  }

  static raiz(a, b) {
    return a ** (1 / b);
  }

  static logaritmo(a, b) {
    return Math.log(a) / Math.log(b);
  }
}

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.getElementById('result');

const suma = document.getElementById('suma');
suma.addEventListener('click', () => {
  result.innerText = Calculadora.suma(Number(number1?.value), Number(number2?.value));
});

const resta = document.getElementById('resta');
resta.addEventListener('click', () => {
  result.innerText = Calculadora.resta(Number(number1?.value), Number(number2?.value));
});

const multiplicacion = document.getElementById('multiplicacion');
multiplicacion.addEventListener('click', () => {
  result.innerText = Calculadora.multiplicacion(Number(number1?.value), Number(number2?.value));
});

const division = document.getElementById('division');
division.addEventListener('click', () => {
  result.innerText = Calculadora.division(Number(number1?.value), Number(number2?.value));
});

const potencia = document.getElementById('potencia');
potencia.addEventListener('click', () => {
  result.innerText = Calculadora.potencia(Number(number1?.value), Number(number2?.value));
});

const raizCuadrada = document.getElementById('raizCuadrada');
raizCuadrada.addEventListener('click', () => {
  result.innerText = Calculadora.raizCuadrada(Number(number1?.value));
});

const raizCubica = document.getElementById('raizCubica');
raizCubica.addEventListener('click', () => {
  result.innerText = Calculadora.raizCubica(Number(number1?.value));
});

const raiz = document.getElementById('raiz');
raiz.addEventListener('click', () => {
  result.innerText = Calculadora.raiz(Number(number1?.value), Number(number2?.value));
});

const logaritmo = document.getElementById('logaritmo');
logaritmo.addEventListener('click', () => {
  result.innerText = Calculadora.logaritmo(Number(number1?.value), Number(number2?.value));
});

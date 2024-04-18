let distancia = 10;
let tiempo = 2;
let velocidad = 0;

//Declaración de función
/* function calcularVelocidad(distancia, tiempo) {
  return distancia / tiempo;
} */

//Función expresión
/* const calcularVelocidad = function (distancia, tiempo) {
  return distancia / tiempo;
}; */

//Función flecha
const calcularVelocidad = (distancia, tiempo) => {
  return distancia / tiempo;
};

velocidad = calcularVelocidad(distancia, tiempo);
console.log(`La velocidad de ${distancia}m en ${tiempo}s es de ${velocidad} m/s`);

distancia = 20;
tiempo = 5;
velocidad = calcularVelocidad(distancia, tiempo);
console.log(`La velocidad de ${distancia}m en ${tiempo}s es de ${velocidad} m/s`);

distancia = 50;
tiempo = 10;
velocidad = calcularVelocidad(distancia, tiempo);
console.log(`La velocidad de ${distancia}m en ${tiempo}s es de ${velocidad} m/s`);

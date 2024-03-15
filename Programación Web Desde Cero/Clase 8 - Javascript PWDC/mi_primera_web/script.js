/* let nombre = 'Ronaldo';
// 1. No se puede redeclarar
// 2. Se puede reasignar
// 3. Tiene un scope de bloque

var pais = 'Perú';
// 1. Se puede redeclarar
// 2. Se puede reasignar
// 3. Tiene un scope de función o global

const nacimiento = 1998;
// 1. No se puede redeclarar
// 2. No se puede reasignar
// 3. Tiene un scope de bloque

console.log('Nombre: ' + nombre + ' País: ' + pais + ' Fecha de nacimiento: ' + nacimiento);

let titulo = document.querySelector('h1');

//Condicionales
if (titulo.innerText === 'Acerca de mí') {
  console.log(titulo.innerText + ' se va a cambiar');
  titulo.innerText = 'He cambiado el título';
}

//Funciones
const nuevoTitulo = 'Acerca de mí';

function cambiarTitulo(nuevoTitulo) {
  titulo.innerText = `He vuelto a cambiar el título y ahora es ${nuevoTitulo}`;
}

cambiarTitulo(nuevoTitulo);
 */
//Menú responsive
let menuResponsive = document.querySelector(".checkbtn");
menuResponsive.onclick = () => {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("inactive");
};

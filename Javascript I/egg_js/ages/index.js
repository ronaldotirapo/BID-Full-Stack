const edad = Number(prompt('¿Cuántos años tienes?'));

if (typeof edad === 'number' && edad >= 18) {
  alert('Eres mayor de edad');
} else if (typeof edad === 'number' && edad > 0) {
  alert('Eres menor de edad');
} else {
  alert('Ingresa un número válido');
  console.log('Ingresa un número válido');
}

function titleFormat(string) {
  const firstChar = string.charAt(0).toUpperCase();
  const rest = string.slice(1).toLowerCase();
  //Si no se indica el segundo argumento va hasta el final
  total = firstChar.concat(rest);
  return total;
}

console.log(titleFormat('Hola Mundo'));
console.log(titleFormat('ADGASGKSALGALKSJDGLAJL'));
console.log(titleFormat('hola mundo'));
